import React from "react";
import web1 from "../src/images/service1.jpg";
import {NavLink} from "react-router-dom";
const Card = (props) => {
return(
    <>
   
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="card">
                            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title</p>
                                <NavLink to="#" className="btn btn-primary">Go Somewhere</NavLink>
                            </div>    
                        </div>    
                    </div>     
               
    </>
);
};
 
export default Card;