import logo from './logo.svg';
import './App.css';
import React,{ useState,ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';

import { API_SERVER_URI } from './constant';
import axios from 'axios';
function Signup() {

 const navigate = useNavigate();

  //Hook is ready
  const  [signup,setSignup]=useState({username:'',password:'',email:'',gender:'Male'});
  const  [emessage,setEmessage]=useState('');
       const updateFormState= (event)=> {
         const {name,value}= event.target;
         setSignup({...signup,[name]:value});
       }

       const submitData = (event)=> {
            event.preventDefault();
            console.log(signup);
            //Make REST API CALL
            //http://localhost:9090/v5/signups
            //METHOD  = POST
            //Request Payload
             axios.post(`${API_SERVER_URI}/signups`,signup).then(response=> {
              console.log(response);
              //{
              ///   "code": "C0194",
             // "message": "resource is created"
            //}
              if(response.status==200){
                   setEmessage("Signup is done successfully");
                   //setSignup({username:'',password:'',email:'',gender:'Male'});
                   document.getElementById("tclear").click();
              } else{
                   setEmessage(response.data.message);
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
        <h2>Signup Page!!!!!!!!!!!</h2>
        <hr/>
        <img id="img1" style={{height: "120px"}} src="https://tse2.mm.bing.net/th?id=OIP.kKIoNZb1w8VL4H0aDiF5uwHaHs&pid=Api&P=0&h=180"/>
    <img id="img2" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
    <img id="img3" style={{height: "120px"}} src="https://tse2.mm.bing.net/th?id=OIP.kKIoNZb1w8VL4H0aDiF5uwHaHs&pid=Api&P=0&h=180"/>
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

         <div className="form-group">
         <label style={{fontWeight:"bold"}}>Email</label>
               <input  onChange={updateFormState} type='email' name="email" className="form-control" style={{width:"50%"}}/>
         </div>

         <div className="form-group">
         <label style={{fontWeight:"bold"}}>Gender</label>
               <select  onChange={updateFormState} name="gender" className="form-control" style={{width:"50%"}}>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                </select>    
         </div>

         <div className="form-group">
          <br/> 
         <button  type="submit"  className="btn btn-primary">Singup</button>
         <button id="tclear"   type="reset"  className="btn btn-info mx-2">Clear</button>
         
         <button onClick={()=>{navigate('/login')}}  type="button"  className="btn btn-danger mx-2">Login</button>

         <button  type="button"  className="btn btn-danger mx-2">Signups</button>

         </div>
      </form>
    
    </div>
  
 </div>);
}

export default Signup;
