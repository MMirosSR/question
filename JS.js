const typingText = document.getElementById("typingText");
const startButton = document.getElementById("startButton");

const text = "I know you’re not a big fan of romantic stuff, and maybe this is already making you cringe haha, but since I can't send anything in person, I thought I'd surprise you with this. I’ve got something to ask…";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    } else {
        startButton.style.display = "inline-block";
    }
}

window.onload = typeWriter;

// Manejo de botones y preguntas
const intro = document.getElementById("intro");
const question = document.getElementById("question");

startButton.addEventListener("click", () => {
    intro.style.display = "none";
    question.style.display = "block";
});

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const mainImage = document.getElementById("mainImage");
const result = document.getElementById("result");

// Asegurarse de que el `src` y `alt` del `mainImage` inicien vacíos
mainImage.src = "";  // Iniciar sin imagen
mainImage.alt = "";  // Sin texto de marcador de posición

// Arreglo con URLs de los GIFs de Giphy
const sadGIFs = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm5tOGNnZ3l2MzY5d3V4dm1yM3ZoNWdjNWppeXFjbmsyMTJtaG13byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ty9Sg8oHghPWg/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHdmOGc2Y2t3eGQzbjFhdXE1N2FxcnNrZTNhaXU3djIycGhxczYzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0Exh3LIHNB1RVpJu/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHFzeDFodnAxeHJwcG9zZm56aHdzcm11aDhsYmtkZ2R0djZzdDhraCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7abldj0b3rxrZUxW/giphy.gif"
];
let currentGIFIndex = 0;

noButton.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    mainImage.src = sadGIFs[currentGIFIndex]; // Cambia el GIF
    currentGIFIndex = (currentGIFIndex + 1) % sadGIFs.length; // Cicla a través de los GIFs
});

yesButton.addEventListener("click", () => {
    result.style.display = "block";
    document.getElementById("buttons").style.display = "none";
    mainImage.src = "feliz.jpg"; // Imagen de celebración
});
