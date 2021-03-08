import pokemon from '../data/pokemon/pokemon.js';

//Creamos una array de pares de pokemones
const pokemonList = [];
for(const items of pokemon.items){
    pokemonList.push(items.id,items.id);
}

const App = () => {
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
        un elemento <img> en HTML dentro de nuestro <div>
        */
            if(items.id === pokemonList[i]){
                printCards.id = items.id;
                printCards.addEventListener('click',turnCards);
                /*const printPokemons = document.createElement('IMG');
                printPokemons.className = 'card-pokemon';
                printPokemons.id = items.id;
                //printPokemons.src = items.image ;
                pokeballs.appendChild(printPokemons);
               printPokemos.addEventListener('click',turnCards())*/
            } 
        }
    }

    return pokeballs;

};
const selectedCards = [];
const turnCards = (e) => {
    //Con el id de la carta seleccionada, mostramos nuestra imagen de la base de datos
    console.log(e.target.id);
    const currentCardIndex = e.target.id ;
    const imageUrl = pokemon.items.find(
        (items) => items.id === currentCardIndex
    ).image; 
    e.target.setAttribute("src", `${imageUrl}`);
    /*Creamos un array de largo 2, para comparar estas dos cartas
    De esta manera nos aseguramos que no se eligan mas de dos cartas
    Luego ingresamos el array en a funcion compare()*/
    selectedCards.push(currentCardIndex);
    if (selectedCards.length%2 === 0){
        compare(selectedCards);
        console.log("turnos :" + selectedCards.length/2)
    }
}
const compare = (e) => {
    const compareIndex = e.reverse();
    if (compareIndex[0]== compareIndex[1]){
        console.log('son pares!')
    }
    else{
        setTimeout(function(){
            console.log('aca hay que dar vuelta las cartas que no son pares uwu')
            /*pairOfCards[0].setAttribute("src", 'images/pokeball.png');
            pairOfCards[1].setAttribute("src", 'images/pokeball.png');*/
        }
        )
    }


}
export default App;
