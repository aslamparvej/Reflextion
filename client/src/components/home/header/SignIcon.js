import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./SignIcon.module.css";

const SignIcon = () =>{
    return (
    <div className={classes.signIcon}>
        <button className={classes.signUp}>Sign Up</button>
        <button className={classes.signIn}>Sign In</button>
        <Button className={classes.upload}>Upload</Button>
    </div>
    );
}
export default SignIcon;