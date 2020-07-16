import React from 'react';

import Events from "./components/pages/Events";
// import Calendar from "./components/Calendar";
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon"></span>
            <span>
              KineticNRG
            </span>
          </div>
        </header>
        <main>
          {/* <Calendar /> */}
        </main>
       
      </div>
    );
  }
}

export default App;
