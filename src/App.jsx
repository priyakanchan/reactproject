import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import {  Switch , Route, Redirect} from "react-router";
import Navbar from "./Navbar";
const App = () => {
return(
    <>
    <Navbar />
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/About" component={About}/>
     <Route exact path="/Service" component={Service}/>
     <Route exact path="/Contact" component={Contact}/>
     <Redirect to="/" />
    </Switch>   
    </>
);
};
 
export default App;