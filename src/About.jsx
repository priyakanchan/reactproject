import React from "react";
import Common from "./Common";
import web from "../src/images/demo-1.jpg";
const About = () => {
return(
    <>
    <Common name="Welcome to the About page"  imgsrc={web}  visit="/Contact" btnname="Contact Us"/>
    </>
);
};
 
export default About;