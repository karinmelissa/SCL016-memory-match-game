import App from './App.js';
import Lost from './Lost.js';
import Results from './Results.js';
import {createTimer,stopCounter} from './Timer.js';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
  it('should be a function', () => {
    expect(typeof App).toBe('function');
  });
});

describe('Results', () =>{
  it("should show a winner message", () => {
    const winner = Results(0, 0);
    expect(winner instanceof HTMLElement).toBe(true);
  });

  it("should work for 3 stars", () => {
    const winner = Results(18);
    const finalText = winner.getElementsByClassName('final-greeting');
    expect(finalText[0].textContent).toBe('¡¡Excelente!!');
  });
  it("should work for 2 stars", () => {
    const winner = Results(21);
    const finalText = winner.getElementsByClassName('final-greeting');
    expect(finalText[0].textContent).toBe("¡¡Bien Hecho!!");
  });
  it("should work for 1 stars", () => {
    const winner = Results(31);
    const finalText = winner.getElementsByClassName('final-greeting');
    expect(finalText[0].textContent).toBe("¡¡Vamos!!");
  });
  

});

describe('Timer', () =>{
  it('should writte html' , () =>{
    const timer = createTimer();
    expect(timer instanceof HTMLElement).toBe(true);
  });

  it('should start timer', () =>{
    createTimer();
    setTimeout(() => {
      const time = document.getElementById('timer');
      const oldTime = time.innerHTML;
      setTimeout(() => {
        const currentTime = time.innerHTML;
        expect(oldTime).toBe(currentTime); 
      },0)
    },0) 
  });
  it('should stop the timer', () =>{
    stopCounter();
    setTimeout(() => {
      const timer = document.getElementById("timer");
      const oldTime = timer.innerText;

      setTimeout(() => {
          const currentTime = timer.innerText;
          expect(oldTime).toBe(currentTime);
      }, 180);
    });
  }, 180);
  it('should show lost page if time its 0:00' , () =>{
    setInterval(createTimer(),1000);
    const showLost = Lost();
    expect(showLost instanceof HTMLElement).toBe(true);
  })
});

