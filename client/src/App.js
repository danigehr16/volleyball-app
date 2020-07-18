import React from 'react';
import Events from "./components/pages/Events";
import Nav from "./components/Nav/index";

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
                <Nav />
          </div>
        </header>
        <main>
          <Events />
          {/* <Calendar /> */}
        </main>

      </div>
      
    );
  }
}

export default App;
