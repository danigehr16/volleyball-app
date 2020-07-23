import React from 'react';
// import './AlertComponent.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./components/pages/Events";
import Header from "./login/Header/Header";
import Nav from "./components/Nav/index";
import RegistrationForm from './login/RegistrationForm';



// import Calendar from "./components/Calendar";
import './App.css';




class App extends React.Component {

  render() {
    return (

      <Router>
        <div className="App">
          <Header />
          <div className="container d-flex align-items-center flex-column">
            <Switch>
              <Route path="/" exact={true}>
                <RegistrationForm />
              </Route>
            </Switch>
          </div>
        </div>
      

      <div className="App">
        <header>
          <div id="logo">
            <span className="icon"></span>
            <span>
              KineticNRG
                </span>
            
              <div>
                <Nav />
                <Switch>
                  <Route exact path="/" component={Events} />
                  <Route exact path="/events" component={Events} />
                  <Route exact path="/books/:id" component={Events} />

                </Switch>
              </div>
            
          </div>
        </header>
        <main>
          <Events />
          {/* <Calendar /> */}
        </main>

      </div>
      </Router>
      
    );
  }
}

export default App;
