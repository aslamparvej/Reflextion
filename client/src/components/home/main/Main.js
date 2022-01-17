import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import classes from "./Main.module.css";

const Main = ()=>{
    return(
        <div className={classes.main}>
            <SearchBar />
        </div>
    );
}
export default Main;