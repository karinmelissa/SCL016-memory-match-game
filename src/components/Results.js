
const Results = (turns,time) =>{
    console.log(turns);
    console.log(time);
    const showResults = document.createElement('div');
    showResults.className = 'results-holder';
    const finalText = document.createElement('h2');
    const finalparagraph = document.createElement('p');
    const playAgain = document.createElement('button');
    playAgain.className = ('start-button');
    const pikachuAsh = document.createElement('img');
    pikachuAsh.src = 'images/ash-pikachu.png';
    pikachuAsh.className = ('pikachu-ash');

    if(turns<20){
        //Mostrar tres estrellas
        let excelenteText = document.createTextNode('¡¡Excelente!!');
        finalText.appendChild(excelenteText);
        showResults.appendChild(finalText);
        for(let i=0;i<3;i++){
            const stars = document.createElement('img');
            stars.src = 'images/star.png';
            showResults.appendChild(stars);
        }
        let text = document.createTextNode('Felicidades!Eres el nuevo maestro Pokemon!');
        finalparagraph.appendChild(text);
    }
    else if(turns<30){
        //Mostrar 2 estrellas
        let bienText = document.createTextNode('¡¡Bien Hecho!!');
        finalText.appendChild(bienText);
        showResults.appendChild(finalText);
        for(let i=0;i<2;i++){
            const stars = document.createElement('img');
            stars.src = 'images/star.png';
            showResults.appendChild(stars);
        }
        let text = document.createTextNode('Buen trabajo!Eres un buen entrenador, sigue asi para convertirte en maestro Pokemon!');
        finalparagraph.appendChild(text);
    }
    else{
        //Mostrar 1 estrella
        finalText.appendChild(vamosText);
        showResults.appendChild(finalText);
        let vamosText = document.createTextNode('¡¡Vamos!!');
        const stars = document.createElement('img');
        stars.src = 'images/star.png';
        showResults.appendChild(stars);
        let text = document.createTextNode('No te rindas! Debes seguir aprendiendo, el camino para convertirte en maestro Pokemon es arduo, intentalo nuevamente!');
        finalparagraph.appendChild(text);
    }
    showResults.appendChild(playAgain);
    showResults.appendChild(finalparagraph);

    return showResults;
}
export default Results;