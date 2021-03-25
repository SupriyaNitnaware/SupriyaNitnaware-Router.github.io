import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

function Register()
{
    // create hook
    const {register,handleSubmit, errors}=useForm();

    //create a function
    const onSubmit =(data)=> {
        console.log(data);
    }

    return(
        <div className="App">
            <h1>Registration Page</h1>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="column">
                            <div className="card">   
                                <label>Enter Your First name</label><br/>
                                <input type="text" placeholder="Enter Your First Name" name="FName" ref={register({required:"First Name Required"})}></input><br/><br/>
                                {errors.FName && <p>{errors.FName.message }</p>}

                                <label>Enter Your Last name</label><br/>
                                <input type="text" placeholder="Enter Your Last Name" name="LName" ref={register({required:"Last Name Required"})}></input><br/><br/>
                                {errors.LName && <p>{errors.LName.message }</p>}

                                <label>Enter Your Email</label><br/>
                                <input type="text" placeholder="Enter Email" name="email" ref={register({required:"Email Required"})}></input><br/><br/>
                                {errors.email && <p>{errors.email.message }</p>}

                                <label>Enter Your Password</label><br/>
                                <input type="password" placeholder="Enter Password" name="password" ref={register({required:"Password Required"})}></input><br/><br/>
                                {errors.password && <p>{errors.password.message }</p>}

                                <input type="submit" name="submit" id="submit" value="SUBMIT"></input>
                                <p></p><Link to="/Login" className="navstyle">Back</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;