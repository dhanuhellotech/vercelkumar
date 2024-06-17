import React, { useEffect, useState,Suspense } from "react";
import { Button, Grid, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Route, Routes } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import Home from "../ProtectedRoutes/Home";
import {useSelector,useDispatch} from "react-redux"
import { openMenu,closeMenu } from "../Redux/MenuSlice";
import Neworder from "../ProtectedRoutes/Neworder/Neworder";
import Services from "../ProtectedRoutes/Services/Services";
import Reviews from "../ProtectedRoutes/Reviews/Reviews";
import OfferPage from "../ProtectedRoutes/OfferPage/OfferPage";



const DashboardLayout = ({ children,showMenu}) => {
  const dispatch = useDispatch()
  const [setnewDisplay, setsetNewDisplay] = useState(false)

  const displayData = useSelector(state=>state.menu.value.display)

  useEffect(()=>{
    console.log(displayData)
  },[displayData])
 
  return (
    <Grid container height="100%">
      <Grid
        item
        xs={12}
        sm={0}
        sx={{
          display: { xs: displayData ? "block" : "none", sm: "none" },

      // for responsive mobile view
          backgroundColor: "#b3e0ff",


          height: "100vh",
          boxShadow:"2px 2px 2px 0.3 black"
        }}
      >
        <Button onClick={()=>dispatch(closeMenu())}>
          <CloseIcon />
        </Button>
        {children}
      </Grid>
      <Grid
        item
        xs={0}
        sm={3}
        lg={2}
        sx={{
          backgroundColor: "#4CAF50",color:"black",fontFamily:"Gill Sans MT",
          height: "100vh",
          display: { xs: "none", sm: "block" },
        }}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={12}
        sm={9}
        lg={10}
        direction="column"
        sx={{ display: { xs: displayData ? "none" : "block", sm: "block" } }}
      >
        <Grid
          item
          sx={{
            height: { xs: "60px", sm: "0px" },
            display: { xs: displayData ? "none" : "block", sm: "none" },
          }}
        >
          <Box width="100%" height="100%" justifyContent="center">
            <Button onClick={()=>dispatch(openMenu())}>
              <MenuIcon />
            </Button>
          </Box>
        </Grid>
        <Grid item p={2}height={'100vh'}sx={{overflowY:'scroll'}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
{/*   
            <Route path="/post" element={<Postnewjob/>}/>
            <Route path="/prot" element={<Protfolia/>}/> */}
            <Route path="/reviews" element={<Reviews/>}/>    
            <Route path="/neworder" element={<Neworder/>}/>
            <Route path="/serv" element={<Services/>}/>
            <Route path="/newoffers" element={<OfferPage/>}/>
         

          </Routes>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
