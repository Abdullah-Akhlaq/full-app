import React from "react";
import classes from "./MainHeader.module.css";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

const MainHeader = () => {
  return (
    <div>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/SignUp">Sign Up</Link>
            </li>
            <li>
              <Link to="/SignIn">Sign In</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Routes>
        <Route path='/SignUp' element={ <SignUp/>}>
           
        </Route>
        <Route path='/SignIn' element={ <SignIn/>}>
           
        </Route>
        </Routes>
     </div>
    </div>
  );
};
export default MainHeader;
