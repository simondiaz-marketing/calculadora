const display = document.getElementById("display");

const messages = [
    "♪ Oh my darling, Clementine...",
    "Mercury Ferranti • Clementina",
    "Instituto de Cálculo - UBA",
    "Pionera de la informática argentina",
    "READY FOR COMPUTATION"
];

const footer = document.getElementById("footerText");

setInterval(() => {
    footer.textContent =
        messages[Math.floor(Math.random() * messages.length)];
}, 4000);

// Agregar caracteres
document.querySelectorAll("[data-value]").forEach(button => {

    button.addEventListener("click", () => {

        display.value += button.dataset.value;

    });

});

// Borrar todo
document.getElementById("clear").addEventListener("click", () => {

    display.value = "";

});

// Borrar último
document.getElementById("backspace").addEventListener("click", () => {

    display.value = display.value.slice(0, -1);

});

// Calcular
document.getElementById("equals").addEventListener("click", () => {

    try {

        display.value = Function('"use strict"; return (' + display.value + ')')();

    } catch {

        display.value = "ERROR";

        setTimeout(() => {

            display.value = "";

        }, 1200);

    }

});

// Soporte para teclado
document.addEventListener("keydown", e => {

    const key = e.key;

    if ("0123456789+-*/.".includes(key)) {

        display.value += key;

    }

    if (key === "Enter") {

        e.preventDefault();

        document.getElementById("equals").click();

    }

    if (key === "Backspace") {

        document.getElementById("backspace").click();

    }

    if (key === "Escape") {

        document.getElementById("clear").click();

    }

});
