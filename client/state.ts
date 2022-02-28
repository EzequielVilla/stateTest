export const state = {
    data:{
        number: 0,
    },
    listeners:[],
    
    subscribe(callback:(any) =>any){
        
        console.log(callback, "callback en state.subscribe");
        
        
        this.listeners.push(callback);
    },
    getState(){
        return this.data;
    },

    setState(newState):void{
        this.data = newState;
        for(const cb of this.listeners){  
            console.log("se dispara la siguiente funcion llamada 'cb'(linea 20) en el state: ",cb);
                 
            cb();         
        }          
        
    },
}