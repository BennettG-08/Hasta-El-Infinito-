const button = document.getElementById("openLetter");
const music = document.getElementById("bgMusic");

button.addEventListener("click", () => {

    if (music) {
        music.play().catch(() => {});
    }

    document.querySelector(".container").innerHTML = `

        <h1>Para Ti ❤️</h1>

        <p style="font-size:20px;line-height:1.8;text-align:justify;">

        Desde que llegaste a mi vida, entendí que el amor puede sentirse en los pequeños detalles, en cada conversación, en cada sonrisa y en cada momento compartido.

        Gracias por existir, por ser esa persona que ilumina incluso mis días más oscuros.

        Quiero que recuerdes siempre que, sin importar la distancia o el tiempo, mi corazón siempre encontrará el camino hacia ti.

        Eres mi lugar favorito, mi paz, mi felicidad y el sueño más bonito que la vida pudo regalarme.

        Si pudiera pedir un deseo, sería seguir escribiendo nuestra historia juntos... hasta el infinito. ♾️❤️

        </p>

        <br>

        <button onclick="location.reload()">
            Volver 🌙
        </button>

    `;

});

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌹";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("petals").appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 8000);

}

setInterval(createPetal, 500);

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}

setInterval(createHeart, 700);
