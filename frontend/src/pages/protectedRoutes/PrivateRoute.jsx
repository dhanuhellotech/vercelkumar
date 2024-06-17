import { Outlet,Navigate } from "react-router-dom";
import React, {useContext} from "react";
import { AuthContext } from "../context/Authcontext";

const PrivateRoutes = ()=>{
const {isAuthenticated} = useContext(AuthContext);
return isAuthenticated ? <Outlet/> :<Navigate to='/login' replace/>
}

export default PrivateRoutes