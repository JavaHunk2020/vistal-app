import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashbaord from "./ListSignups";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

function AppRouter(){

    return (

        <BrowserRouter>
        <Routes>
             <Route path='/' element={<Login/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/dashboard' element={<Dashbaord/>}/>
             <Route path='/forgotPassword' element={<ForgotPassword/>}/>
             <Route path='/resetPassword' element={<ResetPassword/>}/>
             
        </Routes>
  </BrowserRouter>     

    );

}   


export default AppRouter;