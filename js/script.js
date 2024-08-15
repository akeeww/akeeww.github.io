const testamento = document.getElementById("testamento");
const botonIzquierdo = document.getElementById("botonIzquierdo");
const botonDelMedio = document.getElementById("botonDelMedio");
const botonDerecho = document.getElementById("botonDerecho");
const videoDeFondo = document.getElementById("videoDeFondo");
const cancion = document.getElementById("cancion");
let primeraVez = 0;
let testamentos = [
    {
        video: "assests/video1.mp4",
        texto: `
            Deja de decirme esa mierda de que terminamos por querer chingar todo el tiempo.
            <br>
            Sabes que no es verdad. 
            <br>
            Siempre te traté bien; cuando estabas triste, intentaba animarte y hacerte reír. 
            <br>
            Nadie te tuvo tanta paciencia como yo.  <br>Si terminamos, fue porque tú no querías estar conmigo. 
            <br>
            Si fuera por mí, seguiríamos siendo novios.
            <br>
            Te quiero tanto que no entiendo por qué no podemos ser amigos.`
    },
    {
        video: "assests/video2.mp4",
        texto: 'La razón por la que no estoy con nadie más de un mes es porque me siento como una mierda, y si quiero tanto a alguien, prefiero que esté con otra persona que conmigo (una mierda).<br>Me esforcé mucho contigo, pero ya a los 20 días de ser novios quería terminar (me alegra haber seguido contigo). <br>Te molesta que Juli quiera quedar bien con Demian después de que él la trató mal, pero no entiendo por qué la juzgas tanto si tú haces lo mismo.'
    },
    {
        video: "assests/video3.mp4",
        texto: 'Sé que estás buscando que te disculpe para que te sientas bien contigo mismo, pero eso no va a pasar.<br>No voy a perdonarte, no lo mereces.<br>No voy a darte ese gusto.<br>Ahora tendrás que vivir con la mierda que hiciste, y debes saber que nunca jamás estará bien. <br>No voy a ser tu apoyo para que te sientas mejor y pienses que eres el bueno.'
    },
    {
        video: "assests/video4.mp4",
        texto: 'Te conozco, Ake. <br> No lo eres. <br>Eres un cobarde egoísta que toma lo que quiere y le importa una mierda a quién lastima.  <br>Me dijiste que no sabía qué es el amor. <br>Vos tampoco lo sabés.<br>Disculpa por hacerte reír, tratarte bien, comprarte cosas, darte atención, decirte cosas lindas, quererte, buscarte, acompañarte, abrazarte, escucharte, apoyarte, respetarte, cuidarte, ayudarte y amarte.'
    },
    {
        video: "assests/video5.mp4",
        texto: 'Se que parece raro, cada testamento fue escrito en días distintos, y es que estoy confundido, pero no veo motivo de si quiera hablarnos, siempre quise saber si algún tiktok que subías era para mi (pero no).<br>Ake, quiero que te vaya bien, que tengas un novio o novia con plata y que sea amable.<br>Ojalá que tengas una vida feliz.<br>Prometo mirarte y no meterme en tu vida.  <br>Prométeme que vivirás esta vida hasta el final. <br>No importa si no me quieres <br>Lo hice por ti'
    }
]
let contador = -1;
botonIzquierdo.onclick = function  () {
    contador--;
    actualizarTestamento();
}
botonDerecho.onclick = function  () {
    contador++;
    actualizarTestamento();
}
function actualizarTestamento() {
    if (contador < 0) {
        contador = 0;
    }
    else if (contador > 4) {
        contador = 4;
    }
    else {
        testamento.innerHTML= testamentos[contador]["texto"];
        videoDeFondo.src = testamentos[contador]["video"]
        videoDeFondo.play();
        animacionDeDesvanecidoParaElTestamento();
    }
}
botonDelMedio.onclick = function () {
        testamento.innerHTML= "";        
        cancion.play();

}
function animacionDeDesvanecidoParaElTestamento () {
    if (testamento.classList.contains('animar')) {
        testamento.classList.remove('animar');
        void testamento.offsetWidth;
        testamento.classList.add('animar2');
    }
    else {
        testamento.classList.remove('animar2');
        void testamento.offsetWidth;
        testamento.classList.add('animar');
    }
}