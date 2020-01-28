import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const NavbarWhite = () => {
    return (
        <div>
            <NavLink to={ROUTES.home}>Home</NavLink> 
            <NavLink to={ROUTES.races}>Kies een race</NavLink> 
        </div>
    )
}


export default NavbarWhite