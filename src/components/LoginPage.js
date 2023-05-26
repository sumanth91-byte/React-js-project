import React from 'react'
import { Link } from 'react-router-dom'
import lback from './lBack.png'

import '../App.css'
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${lback})`,
    // background: "#5acdcb",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
}


export default function SignInPage() {
    return (
        <header style={ HeaderStyle }>
        <div className='container'>
            <h1 style={{backgroundColor:"lightblue"}}>Please Login </h1>
            <div className="text-center mt-5">

                <form action="/home" align="center">
                    <p>
                        <label>Username or email address</label><br/>
                        <input type="text" name="first_name" required />
                    </p>
                    <p>
                        <label>Password</label>
                        <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                        <br/>
                        <input type="password" name="password" required />
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Login</button>
                    </p>
                </form>
            </div>
        </div>
        </header>
    )
    
}