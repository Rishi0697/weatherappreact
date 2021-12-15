import React, {useState, useEffect} from 'react'

function Login() {
    const [name, setName] = useState({
        name:"",
        password:"",
        phone:"",
        username:"",
        email:""
    })
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleOnChange = (e)=>{
        const {name, value} = e.target;
        setName({...name, [name]:value});
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        setErrors(validate(name));
        setIsSubmit(true);
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmit){
            console.log(errors);
        }
    },[errors]);

    const validate = (values)=>{
        const error = {};
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.name){
            error.name = "name is required";
        }
        // if(!values.password){
        //     error.password = "password is required";
        // }
        // if(!values.phone){
        //     error.phone = "phone is required";
        // }
        // else if(values.phone < 10 || values.phone > 10){
        //     error.phone = "Not a valid phone number";
        // }
        // if(!values.username){
        //     error.username = "username is required";
        // }
        // if(!values.email){
        //     error.email = "email is required";
        // }
        // else if(!regex.test(values.email)){
        //     error.email = "this is not a valid email";
        // }
        return error;
    }

    return (
        <>
              <div className="main_div">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-10 content_div mx-auto my-5">
                <form onSubmit={handleOnSubmit}>
              <lable htmlFor="name">Enter Your Name</lable>
              <br />
              <input type="text" name="name" id="name" onChange={handleOnChange} value={name.name}/>
              <br />
              <p className="text-danger">{errors.name}</p>

              <lable htmlFor="password">Password</lable>
              <br/>
              <input type="password" name="password" id="password" value={name.password}/>
              <br />
              <p className="text-danger">{errors.password}</p>

              <lable htmlFor="phone">Mobile Number</lable>
              <br />
              <input type="tel" name="phone" id="phone" value={name.phone}/>
              <br />
              <p className="text-danger">{errors.phone}</p>
              <lable htmlFor="username">Username</lable>
              <br />
              <input type="text" name="username" id="username" value={name.username}/>
              <br />
              <p className="text-danger">{errors.username}</p>
              <lable htmlFor="email">Email</lable>
              <br />
              <input type="email" name="email" id="email" value={name.email}/>
              <br />
              <p className="text-danger">{errors.email}</p>
              <button type="submit">Validate</button>
              {/* <button className="my-2 mx-4" id ="btn"><a href="/validate">Login</a></button> */}
              {
                  (Object.keys(errors).length === 0 && isSubmit) ?
              
              (<button className="my-2 mx-4" id ="btn"><a href="/validate">Login</a></button>)
              : (<p className="text-primary">plese validate the form</p>)
}
              </form>
              
            </div>
          </div>
        </div>
      </div>
            
        </>
    )
}

export default Login
