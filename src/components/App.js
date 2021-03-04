import pokemon from '../data/pokemon/pokemon.js';

const App = () => {
    //Creamos una array de pares de pokemones
    const pokemonList = [];
    for(const items of pokemon.items){
        pokemonList.push(items.id,items.id);
    }
    //Barajamos cartas con funcion shuffle
    const shuffle = (arr) =>{
        for(var i =arr.length-1 ; i>0 ;i--){
            var j = Math.floor( Math.random() * (i + 1) );
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
        return arr;    
    }
    shuffle(pokemonList);
    //Recorremos array de cartas barajadas
    const pokeballs =  document.createElement('div');
    pokeballs.className = 'cards';
    for(let i=0; i< pokemonList.length; i++){
        for(const items of pokemon.items){
        /*Recorremos array de base de datos
        Si el pokemos de nuestra lista barajada coincide
        con el id de nuestra base de datos
        se guarda la imagen y se crea
        un elemento <img> en HTML dentro de nuestro <div>
        */
            if(items.id === pokemonList[i]){
                const printPokemons = document.createElement('IMG');
                printPokemons.className = 'card';
                printPokemons.src = items.image ;
                pokeballs.appendChild(printPokemons);
            } 
        }
    }
    return pokeballs;
    
};
export default App;
