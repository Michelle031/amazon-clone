import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          //me
          const user = userCredential.user;
          navigate("/");
      })
      .catch((e) => alert(e.message))
  }
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        //created
        const user = userCredential.user;
        navigate("/");
    })
    .catch((e) => alert(e.message))
  }
  return (
    <div className='login'>
        <Link to="/">
            <img 
            className="login__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>
        <div className="login__container">
            <h1>Sign in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
                <h5>Password</h5>
                <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                <button className="login__signin" type='submit' onClick={login}>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
            </p>
            <button className="login__register" onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login