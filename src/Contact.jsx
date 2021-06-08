import React, { useState } from "react";

const Contact = () => {
    const[data ,setData]= useState({
        name:"",
        email:"",
        message:"",
    });
    const InputEvent=(event) =>{
        const {name ,value} = event.target;
         setData((preVal) =>{
             return{
                 ...preVal,
             [name] : value,
             };
         });

    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`my name is ${data.name}, email address: ${data.email} , message :${data.message}`);
    };
    return (
    <>
            <div className="my-5">
                <h1 className="text-center">CONTACT US
    </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <label class="control-label" for="email">Full Name</label>
                                    <input type="text" class="form-control" id="name"
                                     placeholder="Enter Name"
                                     name="name"
                                     value={data.name}
                                     onChange={InputEvent}
                                      />
                             </div>
                             <div class="form-group">
                                <label class="control-label " for="email">Email Address</label>
                                    <input type="email" class="form-control" id="email"
                                     placeholder="Enter email"
                                     onChange={InputEvent}
                                     value={data.email}
                                     name="email"
                                      />
                             </div>
                                <div class="mb-1">
                                    <label class="control-label " for="area">Text Area</label>
                                        <textarea class="form-control" id="area" rows="3"
                                         placeholder="Enter Message" 
                                         onChange={InputEvent}
                                         name="message"
                                         value={data.message}
                                         ></textarea>
                                </div>
                                    <div class="form-group mb-2">
                                        <div class="checkbox">
                                            <label><input type="checkbox" /> Remember me</label>
                                        </div>   
                                    </div>
                                    <div class="form-group">
                                            <div class="col-sm-offset-2 col-sm-10">
                                                <button type="submit" class="btn btn-outline-primary">Submit Form</button>
                                            </div>
                                        </div>
                        </form>
                                </div>
                            </div>    
    </div>    
    </>
);
};

export default Contact;