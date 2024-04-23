import logo from './logo.svg';
import './App.css';
import React,{ useState,ChangeEvent, useEffect } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API_SERVER_URI } from './constant';
import axios from 'axios';
function ResetPassword() {

    const navigate = useNavigate();

      //Hook is ready
      const  [usernameEmail,setUsernameEmail]=useState('');

      const  [showForgotPassScreen,setShowForgotPassScreen]=useState(true);
  
      const  [emessage,setEmessage]=useState('');

      const  [emailUsername,setEmailUsername]=useState('');

      const [searchParams, setSearchParams] = useSearchParams();
       
      const updateFormState= (event)=> {
         const value= event.target.value;
         setUsernameEmail(value);
       }

        //WHEN WE WANTED TO PERFORM SOME ACTION AT THE TIME OF LOADING PAGE
    useEffect(()=> {
      validateEmailAndCode();
   },[]);

   const validateEmailAndCode =()=>{
      //logic to fetch data
      let email=searchParams.get("email");
      let code=searchParams.get("code");
      console.log("email= "+email);
      console.log("code= "+code);
      //nagen@synergisticit.com&code=KKfxQd
      ///v5/
      let urlPattern=`validate/code/${email}/${code}`;

      axios.get(`${API_SERVER_URI}/${urlPattern}`).then(res => {
         console.log(res.data);
         setEmailUsername(email);
         if(res.data.code==='200'){
            setShowForgotPassScreen(true);
         }else{
            setShowForgotPassScreen(false);
         }
       }).catch((ex)=>{
            console.error(ex);
       });
 
  }



      

  return (<div>
    <header className="SHeader">
    </header>
    <div className="container">
        <h2>Reset Password Page!!!!!!!!!!!</h2>
        <hr/>
        <img id="img1" style={{height: "120px"}} src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg"/>
    <img id="img2" style={{height: "120px"}} src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg"/>
    <img id="img3" style={{height: "120px"}} src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg"/>
    <hr/>
    <span className="Message">{emessage}</span>

    { showForgotPassScreen ?
   <div>
      <form >
         <div className="form-group">
               <label style={{fontWeight:"bold"}}>Username/Email</label>
               <input  onChange={updateFormState}  value={emailUsername} readOnly  type='text'  name="usernameEmail" className="form-control" style={{width:"50%"}}/>
         </div>
          <br/>
          <div className="form-group">
               <label style={{fontWeight:"bold"}}>New Password</label>
               <input  onChange={updateFormState}   type='text'  name="newPassword" className="form-control" style={{width:"50%"}}/>
         </div>
          <br/>
          <div className="form-group">
               <label style={{fontWeight:"bold"}}>Confirm Password</label>
               <input  onChange={updateFormState}   type='text'  name="confirmPassword" className="form-control" style={{width:"50%"}}/>
         </div>
          <br/>
        <div>
          <br/> 
         <button  type="button"  className="btn btn-primary">Update Password</button>
         <button id="tclear"   type="reset"  className="btn btn-info mx-2">Clear</button>
         <button onClick={()=>{navigate('/login')}}  type="button"  className="btn btn-danger mx-2">Login</button>
         </div>
      </form>
     </div> 
     :"Sorry this url seems to be not valid!!!!!!!!!!!!!!!!"
}
    </div>

  
 </div>);
}

export default ResetPassword;
