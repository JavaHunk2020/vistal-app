import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashbaord from "./ListSignups";

function AppRouter(){

    return (

        <BrowserRouter>
        <Routes>
             <Route path='/' element={<Login/>}/>
             <Route path='login' element={<Login/>}/>
             <Route path='/signup' element={<Signup/>}/>
             <Route path='/dashboard' element={<Dashbaord/>}/>
        </Routes>
  </BrowserRouter>     

    );

}   


export default AppRouter;