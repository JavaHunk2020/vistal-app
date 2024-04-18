import logo from './logo.svg';
import './App.css';
import React,{ useState,ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { API_SERVER_URI } from './constant';
import axios from 'axios';
function Login() {

    const navigate = useNavigate();

  //Hook is ready
  const  [login,setLogin]=useState({username:'',password:''});
  const  [emessage,setEmessage]=useState('');
       const updateFormState= (event)=> {
         const {name,value}= event.target;
         setLogin({...login,[name]:value});
       }

       const submitData = (event)=> {
            event.preventDefault();
            console.log(login);
            //Make REST API CALL
            //http://localhost:9090/v5/signups
            //METHOD  = POST
            //Request Payload
             axios.post(`${API_SERVER_URI}/cauth`, {email:login.username,password:login.password} ).then(response=> {
                console.log(response);
             if(response.status===200) {
                 navigate('/dashboard');
             }
          }).catch((e) => {
               console.log(e);
               setEmessage(e.response.data.message);
          });
       }


  return (<div>
    <header className="SHeader">
    </header>
    <div className="container">
        <h2>Login Page!!!!!!!!!!!</h2>
        <hr/>
        <img id="img1" style={{height: "120px"}} src="https://icon-library.com/images/admin-login-icon/admin-login-icon-4.jpg"/>
    <img id="img2" style={{height: "120px"}} src="https://icon-library.com/images/admin-login-icon/admin-login-icon-4.jpg"/>
    <img id="img3" style={{height: "120px"}} src="https://icon-library.com/images/admin-login-icon/admin-login-icon-4.jpg"/>
    <hr/>
    <span className="Message">{emessage}</span>
      <form onSubmit={submitData}>
         <div className="form-group">
               <label style={{fontWeight:"bold"}}>Username</label>
               <input onChange={updateFormState}   type='text'  name="username" className="form-control" style={{width:"50%"}}/>
         </div>
          <br/>
         <div className="form-group">
         <label style={{fontWeight:"bold"}}>Password</label>
               <input   onChange={updateFormState}  type='password' name="password" className="form-control" style={{width:"50%"}}/>
         </div>
        <div>
          <br/> 
         <button  type="submit"  className="btn btn-primary">Login</button>
         <button id="tclear"   type="reset"  className="btn btn-info mx-2">Clear</button>
         
         <button onClick={()=>{navigate('/signup')}}  type="button"  className="btn btn-danger mx-2">Signup</button>

         </div>
      </form>
    
    </div>
  
 </div>);
}

export default Login;
