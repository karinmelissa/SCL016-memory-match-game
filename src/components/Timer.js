let gSecons = 120; 
let intervalHandle;

const createTimer = () => {
    const timer = document.createElement('div');
    let minutes= Math.floor(gSecons/60);
    let secons =gSecons-(minutes*60);
    /*Si los segundos son menores a 10
    nos aseguramos que quede en formato 0:00*/
    if (secons < 10){
        secons = '0'+secons;
    }
    const textTimer= minutes.toString() + ':' + secons;
    timer.innerText = textTimer;
    if (gSecons===0){
        return
    }
    gSecons --;
    //console.log(timer)
    return timer
}

const startButton = document.getElementById('start-button');
const startCounter =() =>{
        intervalHandle=setInterval(createTimer,1000);
        //startCounter();
}
startButton.addEventListener('click', startCounter)

export default createTimer;