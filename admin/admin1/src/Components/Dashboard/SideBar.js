import React from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CloseIcon from "@mui/icons-material/Close";
import ButtonLink from "./ButtonLink";
import { useNavigate } from "react-router-dom";
const SideBar = ({ closemenu }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <Grid
      container
      height="100%"
      width="100%"
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ overflowY: "scroll", paddingTop: "20px" }}
    >
      <Grid
        item
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="25%"
      >
        {/* <img src="assets/images/Logo 2 (1).png"  width="25%" style={{borderRadius:"15px",marginBottom:"10px"}}/> */}
        <img
          src="assets\images\WhatsApp Image 2024-06-05 at 6.14.05 PM.jpeg"
          width="80px" height="80px"
          style={{ borderRadius: "15px", marginBottom: "10px" }}
        />
        {/* <Typography
          variant="h6"
          style={{ fontSize: "16px", fontFamily: "Gill Sans MT" }}
        >
       ADMIN PANEL
        </Typography> */}
      </Grid>
      <Grid
        item
        direction="column"
        height="75%"
        width="100%"
        paddingLeft={1}
        paddingRight={1}
      >
        <ButtonLink path="/" text="HOME" />
        {/* <ButtonLink path="/dyn" text="Update Contact" /> */}
        <ButtonLink path="/serv" text="ADD PRODUCTS" />
        <ButtonLink path="/neworder" text="NEW ORDERS" />
        <ButtonLink path="/reviews" text="REVIEWS" />
        <ButtonLink path="/newoffers" text="OFFER" />
       
        {/* <ButtonLink path="/serv" text="contact" /> */}
{/*       
        <ButtonLink path="/apply" text="Applications" />
        <ButtonLink path="/appo" text="Appointment" />
        <ButtonLink path="/prot" text="Portfolio" />
        <ButtonLink path="/gall" text="Gallery" />
        <ButtonLink path="/serv" text="Services" />
        <ButtonLink path="/whatsapp" text="Whatsapp" />
        <ButtonLink path="/cont" text="Contact" /> */}

        {/* <ButtonLink path="/admission" text="Admission"/>
        <ButtonLink  path="/calendar" text="Calendar"/>
             <ButtonLink  path="/contact" text="Contact"/>
             <ButtonLink  path="/enquiry" text="Enquiry"/>
             <ButtonLink  path="/franchise" text="Franchise"/>
             <ButtonLink  path="/class" text="Class"/>
             <ButtonLink  path="/teacher" text="Teacher"/>
             <ButtonLink  path="/timeTable" text="Timetable"/>
             <ButtonLink  path="/top" text="Tobbar"/> */}

        <button
          onClick={logout}
          style={{
            display: "block",
            margin: "auto",
            color: "white", // Change text color
            backgroundColor: "#004d80", // Change background color
            borderRadius: "5px", // Add rounded corners
            padding: "10px 20px", // Add padding
            border: "none", // Remove border
            cursor: "pointer", // Change cursor on hover
          }}
        >
          Logout
        </button>
      </Grid>
    </Grid>
  );
};

export default SideBar;
