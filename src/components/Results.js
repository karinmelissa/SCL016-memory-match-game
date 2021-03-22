const Results = (turns,time) =>{
    const showResults = document.createElement('div');
    showResults.className = 'results-holder';
    const finalText = document.createElement('h2');
    const starsHolder = document.createElement('div');
    const finalparagraph = document.createElement('p');
    const finalparagraph2 = document.createElement('p');
    finalparagraph.className = 'final-text';
    finalparagraph2.className = 'final-text'; 
    const playAgain = document.createElement('button');
    playAgain.className = 'again-button';
    playAgain.id = 'again-button';
    playAgain.innerText = 'Jugar otra vez';
    playAgain.addEventListener('click',newGame);
    const pikachuAsh = document.createElement('img');
    pikachuAsh.src = 'images/ash-pikachu.png';
    pikachuAsh.className = ('pikachu-ash');
    console.log(time);

    if(turns<20){
        //Mostrar tres estrellas
        let excelenteText = document.createTextNode('¡¡Excelente!!');
        finalText.appendChild(excelenteText);
        showResults.appendChild(finalText);
        for(let i=0;i<3;i++){
            const stars = document.createElement('img');
            stars.src = 'images/star.png';
            starsHolder.appendChild(stars);
        }
        showResults.appendChild(starsHolder);
        let text1 = document.createTextNode('Felicidades!');
        let text2 = document.createTextNode('Eres el nuevo maestro Pokemon!');
        finalparagraph.appendChild(text1);
        finalparagraph2.appendChild(text2);
    }
    else if(turns>20 && turns<30){
        //Mostrar 2 estrellas
        let bienText = document.createTextNode('¡¡Bien Hecho!!');
        finalText.appendChild(bienText);
        showResults.appendChild(finalText);
        for(let i=0;i<2;i++){
            const stars = document.createElement('img');
            stars.src = 'images/star.png';
            starsHolder.appendChild(stars);
        }
        showResults.appendChild(starsHolder);
        let text1 = document.createTextNode('Buen trabajo!');
        let text2 = document.createTextNode('Eres un buen entrenador, sigue asi para convertirte en maestro Pokemon!');
        finalparagraph.appendChild(text1);
        finalparagraph2.appendChild(text2);
    }
    else{
        console.log('hola')
        //Mostrar 1 estrella
        let vamosText = document.createTextNode('¡¡Vamos!!');
        finalText.appendChild(vamosText);
        showResults.appendChild(finalText);
        const stars = document.createElement('img');
        stars.src = 'images/star.png';
        starsHolder.appendChild(stars);
        showResults.appendChild(starsHolder);
        let text1 = document.createTextNode('No te rindas!');
        let text2 = document.createTextNode(' Debes seguir aprendiendo, el camino para convertirte en maestro Pokemon es arduo, intentalo nuevamente!');
        finalparagraph.appendChild(text1);
        finalparagraph2.appendChild(text2);
    }
    showResults.appendChild(finalparagraph);
    showResults.appendChild(finalparagraph2);
    showResults.appendChild(playAgain);
    showResults.appendChild(pikachuAsh);

    return showResults;
}

//Crear funcion de boton para comenzar juego nuevamente jijiji;
const newGame = () =>{  
    location.reload();
}

export default Results;