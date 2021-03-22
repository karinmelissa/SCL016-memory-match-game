const Lost =() =>{
    const showResults = document.createElement('div');
    showResults.className = 'lost-holder';
    const finalText = document.createElement('h2');
    let rocketText = document.createTextNode('¡Prepárense para los problemas.Y más vale que teman!');
    finalText.appendChild(rocketText);
    const finalparagraph = document.createElement('p');
    finalparagraph.className = 'meowtext';
    const finalparagraph2 = document.createElement('p');
    const finalparagraph3 = document.createElement('p');
    let text1 = document.createTextNode('¡Meow, asi es!!');
    let text2 = document.createTextNode('Que mal! Hemos sido vencidos por el equipo Rocket!!');
    let text3 = document.createTextNode('Esto no puede quedar asi! Vamos de nuevo!');
    finalparagraph.appendChild(text1);
    finalparagraph2.appendChild(text2);
    finalparagraph3.appendChild(text3);
    const playAgain = document.createElement('button');
    playAgain.className = ('tryagain-button');
    playAgain.innerText = 'Jugar otra vez';
    playAgain.addEventListener('click',newGame);

    const rocketTeam = document.createElement('img');
    rocketTeam.src = 'images/equipoRocket.png';
    rocketTeam.className = ('rocket-team');


    showResults.appendChild(finalText);
    showResults.appendChild(finalparagraph);
    showResults.appendChild(finalparagraph2);
    showResults.appendChild(finalparagraph3);
    showResults.appendChild(playAgain);
    showResults.appendChild(rocketTeam);

    return showResults;
}
const newGame = () =>{ 
    location.reload();
}
export default Lost;