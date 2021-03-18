import Lost from '../components/Lost.js';

let gSecons = 120; 
let intervalHandle = 0; 
const timer = document.createElement('div');
//timer.innerHTML = ('<i class="far fa-clock"></i>');
timer.id = 'timer';
timer.className = ('timer');

const createTimer = () => {
    if (gSecons===0){
        stopCounter();
        console.log('perdiste');
        setTimeout(function(){
            document.getElementById('results-page').style.display = 'block';
            document.getElementById('game-page').style.display = 'none';
            const showResults = document.getElementById('show-results');
            showResults.appendChild(Lost());
        }
        ,1000);
    }
    let minutes= Math.floor(gSecons/60);
    let secons =gSecons-(minutes*60);
    /*Si los segundos son menores a 10
    nos aseguramos que quede en formato 0:00*/
    if (secons < 10){
        secons = '0'+secons;
    }
    const textTimer= minutes.toString() + ':' + secons;
    timer.innerText = textTimer;
    gSecons --;
    return timer
}

const startButton = document.getElementById('start-button');
const startCounter =() =>{
    intervalHandle=setInterval(createTimer,1000);

}
const stopCounter =() =>{
    clearInterval(intervalHandle);
}
if (startButton){
    startButton.addEventListener('click', startCounter);
}

export {createTimer,stopCounter};