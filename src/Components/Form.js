import React from "react";
import Table from "./Table";

function Form(){
    return(
        <div>
            <h1 className="Heading">Student Registration Form</h1>
            <p>
                Registered students can access the classes
            </p>
            <form className="Formcontainer">
  <div class="form-group">
    <label for="exampleInputEmail1" style={{fontWeight:'bold', color:'Blue'}}>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Id"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" style={{fontWeight:'bold'}}>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

        </div>
    )
}
export default Form;
