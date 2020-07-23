import React, {useState} from 'react';
import LoginHeader from "./login/LoginHeader/LoginHeader";
import LoginForm from './login/LoginForm/LoginForm';
import RegistrationForm from './login/RegistrationForm/index';
import Home from './login/Home/Home';
import AlertComponent from './login/AlertComponent/AlertComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./components/pages/Events";
import Header from "./login/LoginHeader/LoginHeader";
import Nav from "./components/Nav/index";





// import Calendar from "./components/Calendar";
import './App.css';




function App () {
  const [title, updateTitle] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);

    return (

      <Router>
        <div className="App">
          <Header title={title} />
          <div className="container d-flex align-items-center flex-column">
            <Switch>
              <Route path="/" exact={true}>
                <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} />
              </Route>
              <Route path="/login">
                <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
              </Route>
              <Route path="/home">
                <Home/>
              </Route>
            </Switch>
            <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
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

export default App;
