
const Results = (turns,time) =>{
    console.log(turns);
    console.log(time);
    const showResults = document.createElement('div');
    showResults.className = 'results-holder';
    const finalText = document.createElement('h2');
    const finalparagraph = document.createElement('p');
    if(time ==='0:00'){
        console.log('equipo rocket');

    }
    else if(turns<17){
        //Mostrar tres estrellas
        let excelenteText = document.createTextNode('¡¡Excelente!!');
        finalText.appendChild(excelenteText);
        for(let i=0;i<3;i++){
            const stars = document.createElement('img');
            stars.src = 'images/star.png';
            showResults.appendChild(stars);
        }
        let text = document.createTextNode('Felicidades!Eres el nuevo maestro Pokemon!');
        finalparagraph.appendChild(text);
    }
    else if(turns<30){
        console.log('Deberia mostrar 2 estrellas');
        //Mostrar 2 estrellas
        let bienText = document.createTextNode('¡¡Bien Hecho!!');
        finalText.appendChild(bienText);
        for(let i=0;i<2;i++){
            const stars = document.createElement('img');
            stars.src = 'images/star.png';
            showResults.appendChild(stars);
        }
        let text = document.createTextNode('Buen trabajo!Eres un buen entrenador, sigue asi para convertirte en maestro Pokemon!');
        finalparagraph.appendChild(text);
    }
    else{
        console.log('Deberia mostrar 1 estrellas');
        //Mostrar 1 estrella
        finalText.appendChild(vamosText);
        let vamosText = document.createTextNode('¡¡Vamos!!');
        const stars = document.createElement('img');
        stars.src = 'images/star.png';
        showResults.appendChild(stars);
        let text = document.createTextNode('No te rindas! Debes seguir aprendiendo, el camino para convertirte en maestro Pokemon es arduo, intentalo nuevamente!');
        finalparagraph.appendChild(text);
    }
    showResults.appendChild(finalparagraph);
    showResults.appendChild(finalText);

    return showResults;
}
export default Results;