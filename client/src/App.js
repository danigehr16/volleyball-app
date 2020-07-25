import React from 'react';
// import Header from "./login/Header/Header";
import LoginForm from './login/LoginForm/LoginForm';
import RegistrationForm from './login/RegistrationForm/index';
// import Home from './login/Home/Home';
// import AlertComponent from './login/AlertComponent/AlertComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./components/pages/calendarEvents";
import Nav from "./components/Nav/index";





// import Calendar from "./components/Calendar";
import './App.css';




class App extends React.Component {

  render() {
    // const [title, updateTitle] = useState(null);
    // const [errorMessage, updateErrorMessage] = useState(null);
    return (

      <Router>
        {/* <div className="App">
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
        </div> */}
      

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
               
                  {/* <Route exact path="/" component={RegistrationForm} /> */}
                  <Route exact path="/" component={Events} />
                  <Route exact path="/login" component={LoginForm} />
        
                  <Route exact path="/scheduleEvents" component={Events} />

                </Switch>
              </div>
            
          </div>
        </header>
        <main>
          {/* <home> /> */}
          {/* <Calendar /> */}
        </main>

      </div>
      </Router>
      
    );
  }
}

export default App;
