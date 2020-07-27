import React from 'react';
// import LoginForm from './login/LoginForm/LoginForm';
// import RegistrationForm from './login/RegistrationForm/index';
// import Home from './login/Home/Home';
// import AlertComponent from './login/AlertComponent/AlertComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Events from "./pages/calendarEvents";
import Nav from "./components/Nav/index";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
// import Header from "./login/LoginHeader/LoginHeader"





// import Calendar from "./components/Calendar";
import './App.css';


function App () {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Events} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}


export default App;
