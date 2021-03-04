import App from './components/App.js';
//Ocultamos todas las secciones excepto la principal
document.getElementById('game-page').style.display = 'none';
document.getElementById('results-page').style.display = 'none';
//Llamamos elementos de DOM
const startbutton = document.getElementById("start-button");

function startGame() {
    if (document.getElementById('game-page').style.display == 'none'){
        document.getElementById('game-page').style.display = 'block';
        document.getElementById('home-page').style.display = 'none';
    }
    document.getElementById('cards-placeholder').appendChild(App());
     //Titulo mas pequeño 
     //const title = document.getElementsByClassName('title-img');
     //title.style.height = '87px';
    //Llamar funcion shuffle, sobreescribir HTML
}

startbutton.addEventListener("click", startGame);


