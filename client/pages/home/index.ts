
import { state } from "./../../state";

class initHome extends HTMLElement{
    connectedCallback(){
        this.render();
        state.setState({number:0});
        console.log(state.listeners, "state.listeners antes de subscribe");   
        state.subscribe(()=>{
            console.log("se activo el subscribe");
            //Vuelvo a renderizar la pagina para que muestre como cambio el numero, pueden
            // comentar el this.render() para ver como no cambia con el click
            // pero si se ejecuta todo lo interior del eventListener (linea 27)
            this.render();
        })   
        console.log(state.listeners, "state.listeners despues de subscribe"); 
        
    }
    render():void{
        const number = state.getState().number;        
        this.innerHTML= `
        <div>
            <p>counter: ${number}</p>
            <button class="boton"> add</button>

        </div>
    `;
        this.querySelector(".boton").addEventListener("click", (e)=>{
            e.preventDefault();
            const actual = state.getState().number;
            const add = actual+1;
            console.log('antes de setState');
            state.setState({number:add})
            console.log('despues de setState');
            
            
        })
    }
    
}


customElements.define("home-page",initHome);
