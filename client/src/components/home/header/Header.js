import React from "react";
import Logo from "./Logo";
import SignIcon from "./SignIcon";
import classes from "./Header.module.css";

const Header = () =>{
    return <div className={classes.header}>
        <Logo />
        <SignIcon />
    </div>
}
export default Header;