const button = document.getElementById("openLetter");
const music = document.getElementById("bgMusic");

button.addEventListener("click", async () => {

    if (music) {
        try {
            music.currentTime = 0;
            await music.play();
        } catch (e) {
            console.log("No se pudo reproducir la música:", e);
        }
    }

    document.querySelector(".container").innerHTML = `

        <h1>Para Ti ❤️</h1>

        <p>

Desde que llegaste a mi vida entendí que el amor puede encontrarse en los pequeños detalles, en cada conversación, en cada sonrisa y en cada instante compartido contigo.

Gracias por existir y por hacer que mis días tengan un motivo para sonreír.

Quiero que nunca olvides que sin importar el tiempo, la distancia o las dificultades, mi corazón siempre elegirá encontrarte.

Eres mi lugar favorito, mi paz, mi alegría y el sueño más hermoso que la vida pudo regalarme.

Si pudiera pedir un solo deseo, sería seguir escribiendo nuestra historia para siempre...

✨ Hasta el infinito y más allá. ♾️❤️

        </p>

        <br>

        <button onclick="location.reload()">
            Volver ❤️
        </button>

    `;

});

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("petals").appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 8000);

}

setInterval(createPetal, 500);

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.animationDuration = (5 + Math.random() * 3) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 700);
