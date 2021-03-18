import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});


describe('App', () => {

  it('should be a function', () => {
    expect(typeof App).toBe('function');
  });
  
});