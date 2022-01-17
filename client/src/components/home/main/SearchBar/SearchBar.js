import React from "react";
import Button from "../../../UI/Button/Button";

import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.searchBar}>
      <form>
        <input type="text" placeholder="Search Images..."/>
      </form>
    </div>
  );
};
export default SearchBar;
