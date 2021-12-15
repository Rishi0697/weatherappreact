import React from "react";

function Registration() {
  return (
    <>
      <div className="main_div">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-10 content_div mx-auto my-5 ">
              <lable htmlFor="name">Enter Your Name</lable>
              <br />
              <input type="text" name="name" />
              <br />

              <lable htmlFor="name">Enter Your Email</lable>
              <br />
              <input type="email" name="name" />
              <br />

              <lable htmlFor="name">Enter Your Password</lable>
              <br />
              <input type="password" name="name" />
              <br />
              <button className="my-2" id ="btn"><a href="/registration">Register</a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
