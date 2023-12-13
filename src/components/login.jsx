import './login.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faAddressBook,faSynagogue } from '@fortawesome/free-solid-svg-icons';
import { faContactBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';
const Login = () => {
  const {ff}=useSearchParams()
  console.log(ff)
  const [user, setUser] = useState({
    myname: "",
    password: ""
  });

  function loging(e) {
const {name,value}=e.target;
setUser({...user,[name]:value})
    // Your login logic here
  }

  return (
    <div>
      <div className="logo">
        <img src="./src/logo.jpg" alt="" />
        <h1 className="mytext">
          <i> Please type your password and username to login </i>
        </h1>
        <img src="./src/flag.png" alt="loading image" />
      </div>
      <form className="myform">
        <h1 className="loginhead">Are you a member of us?</h1><br />
        Username: <br />
        <div className='merge'><i><FontAwesomeIcon icon={faContactBook} /> </i>
        <input
          type="text"
          name="myname"
          id="username"
          className="log"
          placeholder="Type your username"
          value={user.myname}
          onChange={loging}
        /></div>


        <br /><br />
        Password: <br />
        <div className='merge'>
          <i><FontAwesomeIcon icon={faUnlockKeyhole} /></i>
        <input
          type="password"
          placeholder="Type your password"
          className="log"
          name="password"
          id="password"
          value={user.pss}
          onChange={loging}
        />
        </div>
         <br /><br /><br />
          <button className='loglog'>login</button>
        
        <br /><br /><br />
        <Link to='/register'>forget password</Link>
        
      </form>
    </div>
  );
};

export default Login;