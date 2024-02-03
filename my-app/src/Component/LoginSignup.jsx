import React, { useState } from 'react'
import './LoginSignup.css'
const Loginsignup = () => {

    const [action, setAction] = useState("Sign Up");
    return (
        <div className='container'>
            <form>
                <div className='header' >
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {action==="Login"?<div></div>:
                      <div className='input'>
                      <label>Enter Name</label> <br />
                      <input placeholder='Enter Name' type='text' />
                  </div>}
                    <div className='input'>
                        <label>Enter Email</label> <br />
                        <input placeholder='Enter Email' type='email' />
                    </div>
                    <div className='input'>
                        <label>Enter Password</label> <br />
                        <input placeholder='Enter password' type='password' />
                    </div>
                </div>
                {action==="Sign Up" ? <div></div>:
                <div className='forgot-password'> Lost Password? <span>Click Here!</span></div>}
                <div className='submit-container'>
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                </div>
            </form>
        </div>
    );
}
export default Loginsignup