## calculadora basica
calculadora creada con html, css y javascript

#### clase utilizada
- calculadora__btn
esta clase fue utilizada para los estilos en el css
tambien se tomo como la clase de referencia en el documento de javascript.

#### id para utilizar en js
- id 0, para el boton cero
- id igual, para el boton de igual
- id c, para el boton de borrar cada caracter
- id del, la limpiar la pantalla.

se crearon la variables seleccionadon a cada boton por su clase.
```
const pantalla = document.querySelector(".calculadora__display");
const botones = document.querySelectorAll(".calculadora__btn");

```

realizamos el evento recorriendo con el forEach

```

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        
        const btnclick = boton.textContent;
    })
});

```
dentro de este evento se encuentra las condiciones de cada botones.