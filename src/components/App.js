import pokemon from '../data/pokemon/pokemon.js';
import {createTimer,stopCounter} from '../components/Timer.js';
import Results from '../components/Results.js';

//Creamos una array de pares de pokemones
const pokemonList = [];
for(const items of pokemon.items){
    pokemonList.push(items.id,items.id);
}
const cards = [];
let turns = 0;

const App = () => {
    const gameBoard =  document.createElement('div');
    const boardContainer =  document.createElement('div');
    boardContainer.id = ('boardContainer');
    boardContainer.className = ('boardContainer');
    const  turnsText = document.createElement('p');
    turnsText.id= 'playedTurns';
    turnsText.className = 'played-turns';
    let turnsNumber = document.createTextNode("Turnos jugados :" + turns);
    turnsNumber.id = 'turns';
    turnsText.appendChild(turnsNumber);
    const clockIcon = document.createElement('span');
    clockIcon.className = 'far fa-clock';
    //Barajamos cartas con funcion shuffle
    const shuffle = (arr) =>{
        for(var i =arr.length-1 ; i>0 ;i--){
            var j = Math.floor( Math.random() * (i + 1) );
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
        return arr;    
    }
    shuffle(pokemonList);
    console.log(pokemonList);
    //Recorremos array de cartas barajadas
    const pokeballs =  document.createElement('div');
    pokeballs.className = 'cards';
    for(let i=0; i< pokemonList.length; i++){
        const printCards = document.createElement('IMG');
        printCards.className = 'card-back';
        printCards.src = 'images/pokeball.png' ;
        pokeballs.appendChild(printCards);
        for(const items of pokemon.items){ 
        /*Recorremos array de base de datos
        Si el pokemos de nuestra lista barajada coincide
        con el id de nuestra base de datos
        se guarda la imagen y se crea
        un elemento <img> en HTML dentro de nuestro <div>*/
            if(items.id === pokemonList[i]){
                printCards.id = items.id;
                printCards.addEventListener('click',turnCards);
            } 
        }
        cards.push(printCards);
    }
    boardContainer.appendChild(turnsText);
    boardContainer.appendChild(clockIcon);
    boardContainer.appendChild(createTimer());
    gameBoard.appendChild(boardContainer);
    gameBoard.appendChild(pokeballs);
    return gameBoard;
};

const selectedCards = [];
const turnCards = (e) => {
    //Con el id de la carta seleccionada, mostramos nuestra imagen de la base de datos
    const currentCardIndex = e.target ;
    const imageUrl = pokemon.items.find(
        (items) => items.id === currentCardIndex.id
    ).image; 
    e.target.setAttribute("src", `${imageUrl}`);
    e.target.setAttribute("class",'turned-card');
    /*Creamos un array de largo 2, para comparar estas dos cartas
    De esta manera nos aseguramos que no se eligan mas de dos cartas
    Luego ingresamos el array en a funcion compare()*/
    e.target.removeEventListener('click',turnCards);
    selectedCards.push(currentCardIndex);
    if (selectedCards.length%2 === 0){
        compare(selectedCards);
        turns = selectedCards.length/2 ; 
        let playedTurns = document.getElementById('playedTurns');
        playedTurns.innerText = "Turnos jugados :" + turns;
    }
    return turns 
}
let pairs = 0;
const compare = (e) => {
    const compareIndex = e.reverse();
    if (compareIndex[0].id== compareIndex[1].id){
        pairs ++;
        if (pairs === 9){
            stopCounter();
            setTimeout(function(){
                document.getElementById('results-page').style.display = 'block';
                document.getElementById('game-page').style.display = 'none';
                const showResults = document.getElementById('show-results');
                showResults.appendChild(Results(turns));
            }
            ,1000);
        }
    }
    else{
        setTimeout(function(){
            compareIndex[0].addEventListener('click',turnCards);
            compareIndex[1].addEventListener('click',turnCards);
            turnCardBack(compareIndex[0]);
            turnCardBack(compareIndex[1]);
        }, 1000);
    }
}
const turnCardBack = (card) => {
    card.setAttribute("src", 'images/pokeball.png');
}

export default App;
