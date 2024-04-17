
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_SERVER_URI } from './constant';

function Dashbaord() {


    const [signups,setSignups]=useState([]);

    //WHEN WE WANTED TO PERFORM SOME ACTION AT THE TIME OF LOADING PAGE
    useEffect(()=> {
        fetchSignup();
     },[]);


     const fetchSignup =()=>{
             //logic to fetch data
             axios.get(`${API_SERVER_URI}/signups`).then(res => {
                console.log(res.data);
                setSignups(res.data);
              }).catch((ex)=>{
                   console.error(ex);
              });

     }
   

    return (
         <div>
               <header className="SHeader">
              </header>
              <div className="container">
              <img id="img1" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
       <img id="img2" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
       <img id="img3" style={{height: "120px"}} src="https://cdn-icons-png.flaticon.com/512/7022/7022927.png"/>
       <hr/>
       <h3>Signups</h3>

       <table className="table table-striped">
    <thead>
      <tr className="headerColor">
        <th>Username</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Password</th>
        <th>DOE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
         {
            signups.map((data,index)=>(
                    <tr key={index}>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.gender}</td>
                        <td>{data.password}</td>
                        <td>TOO</td>
                        <td> <button  type="button"  className="btn btn-danger mx-2">DEL</button><button  type="button"  className="btn btn-success mx-2">EDT</button></td>
                        
                    </tr>
            ))
         }
           
      </tbody>  

</table>


              </div>
         </div>

    );
}   

export default Dashbaord;