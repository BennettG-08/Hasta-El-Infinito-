const button = document.getElementById("openLetter");

button.addEventListener("click", () => {

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
