import logo from './logo.svg';
import './App.css';
import React,{ useState,ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { API_SERVER_URI } from './constant';
import axios from 'axios';
function ForgotPassword() {

    const navigate = useNavigate();

      //Hook is ready
      const  [usernameEmail,setUsernameEmail]=useState('');

      const  [showForgotPassScreen,setShowForgotPassScreen]=useState(true);
  
      const  [emessage,setEmessage]=useState('');
       
      const updateFormState= (event)=> {
         const value= event.target.value;
         setUsernameEmail(value);
       }

       const submitData = (event)=> {
            event.preventDefault();
            //Make REST API CALL
            //http://localhost:9090/v5/signups
            //METHOD  = POST
            //Request Payload
            //?unameEmail = naghe@gmail.com
             axios.post(`${API_SERVER_URI}/forgotPassword`, {},{params: {
                unameEmail:usernameEmail
              }}).then(response=> {
                console.log(response);
             if(response.status===200) {
                setShowForgotPassScreen(false);
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
        <h2>Forgot Password Page!!!!!!!!!!!</h2>
        <hr/>
        <img id="img1" style={{height: "120px"}} src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg"/>
    <img id="img2" style={{height: "120px"}} src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg"/>
    <img id="img3" style={{height: "120px"}} src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg"/>
    <hr/>
    <span className="Message">{emessage}</span>
    { showForgotPassScreen ?<div>
      <form onSubmit={submitData}>
         <div className="form-group">
               <label style={{fontWeight:"bold"}}>Username/Email</label>
               <input onChange={updateFormState}   type='text'  name="usernameEmail" className="form-control" style={{width:"50%"}}/>
         </div>
          <br/>
        
        <div>
          <br/> 
         <button  type="submit"  className="btn btn-primary">Forgot Password</button>
         <button id="tclear"   type="reset"  className="btn btn-info mx-2">Clear</button>
         <button onClick={()=>{navigate('/login')}}  type="button"  className="btn btn-danger mx-2">Login</button>
         </div>
      </form>
     </div> : "<h2>Forget Password link has been sent to your email id</h2>"}
     
    </div>

  
 </div>);
}

export default ForgotPassword;
