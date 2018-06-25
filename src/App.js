import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="content">
      {/* <div className='one'> 1 </div>
      <div className='two'> 2</div>
      <div className='three'> 3</div>
      <div className='four'> 4</div>
      <div className='nested'> 
      <p> Top - Left </p>
      <p> Top - Right </p>
      <p> Bottom - Left </p>
      <p> Bottom - Right </p>
      </div>
      <div> 6</div>
      <div> 7</div>
      <div> 8</div>
      <div> 9 </div> */}
      <div className='header'>
      <header> Header </header>
      </div>
      <div className='main'>
      <main> Main </main>
      </div>
      <div className='section'>
      <section> Section </section>
      </div>
      <div className='aside'>
      <aside> Aside </aside>
      </div>
      <div className='nav'>
      <nav> Nav </nav>
      </div>
      <div className='footer'>
      <footer> Footer </footer>
      </div>
      </div>
    );
  }
}

export default App;
