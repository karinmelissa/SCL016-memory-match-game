const Results = () =>{
    const showResults = document.createElement('div');
    const pText = document.createElement('h2');
    //pText.className('results-title');
    let holamundo = document.createTextNode('¡¡Excelente!!');
    const stars = document.createElement('img');
    stars.src = 'images/stars.png';
    pText.appendChild(holamundo);
    showResults.appendChild(pText);
    showResults.appendChild(stars);

    return showResults;
}
export default Results;