import React, { useState } from "react";
// import Button from "../../../UI/Button/Button";

import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchData, setSearchData] = useState("");


  const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log('You clicked submit.');
    console.log('You clicked submit.', searchData);

  }
  const onChangeHandler = (e)=>{
    setSearchData(e.target.value);
  }
  return (
    <div className={classes.searchBar}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={onChangeHandler} placeholder="Search Images..."/>
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </div>
  );
};
export default SearchBar;
