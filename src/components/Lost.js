const Lost =() =>{
    const showResults = document.createElement('div');
    showResults.className = 'results-holder';
    const finalText = document.createElement('h2');
    let rocketText = document.createTextNode('¡Prepárense para los problemas.Y más vale que teman!');
    finalText.appendChild(rocketText);
    const finalparagraph = document.createElement('p');
    let text = document.createTextNode('Que mal! Hemos sido vencidos por el equipo Rocket!! Esto no puede quedar asi! Vamos denuevo!');
    finalparagraph.appendChild(text);

    showResults.appendChild(finalText);
    showResults.appendChild(finalparagraph);

    return showResults;
}
export default Lost;