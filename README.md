# Cómo funciona el state/subscribe

Dejo un código de muestra de cómo funciona el state, subscribe y listener.

Pueden analizar en la consola de la página como va evolucionando el listener, qué es
lo que hay en `listeners[]` antes y despues del subscribe de `connectedCallback()`.

Cuando se dispara el evento del botón se ve que se llama a la función cargada en `listeners[]`

---

## **_Página_** : https://statetest.herokuapp.com/

**_Instalar en local_**

-   Con yarn

```bash
    git clone git@github.com:EzequielVilla/stateTest.git
    yarn
    yarn dev
```

-   Con NPM

```bash
    git clone git@github.com:EzequielVilla/stateTest.git
    npm install
    npm run dev
```
