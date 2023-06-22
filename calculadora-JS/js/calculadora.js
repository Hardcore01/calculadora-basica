
const pantalla = document.querySelector(".calculadora__display");
const botones = document.querySelectorAll(".calculadora__btn");


/**---eventos para los botones */

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        
        const btnclick = boton.textContent;

        if (boton.id === "del") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "c") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
                return;
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                return;
            }
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
                return;
            } catch (error) {
                pantalla.textContent = "Error!";
                return;
            }
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = btnclick;

        }else{
            pantalla.textContent += btnclick;
            return; 
        }
    })
});
