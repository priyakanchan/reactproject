import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/demo-1.jpg";

const Common = (props) => {
return(
    <>
   
   <section id="header" className="d-flex align-item-center">
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{props.name} <strong className="brand-name">Best Developers</strong></h1>
                    <h2 className="my-3">
                        we are the team of talented developer making websites
                    </h2>
                    <div className="mx-3">
                        <NavLink to={props.visit} className="btn-get-started"  >
                        {props.btnname}
                        </NavLink>
                    </div>    
                </div>   
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.imgsrc} className="img-fluid animated" alt="header-imag" />
                    
                </div> 
                </div>    
            </div>   
        </div>    
    </div>    
   </section>    
    </>
);
};
 
export default Common;