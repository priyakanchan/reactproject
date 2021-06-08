import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/about.svg";
import Common from "./Common";

const Home = () => {
return(
    <>
   
  <Common name="Grow your bussiness with "  imgsrc={web}  visit="/About" btnname="Get started"/>
    
    </>
);
};
 
export default Home;