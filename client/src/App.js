import React from 'react';
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
              react<b>calendar</b>
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
