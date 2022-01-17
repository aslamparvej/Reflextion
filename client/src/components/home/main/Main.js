import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Card from "../../UI/Card/Card";
import classes from "./Main.module.css";

const Main = ()=>{
    return(
        <div className={classes.main}>
            <SearchBar />
        </div>
    );
}
export default Main;