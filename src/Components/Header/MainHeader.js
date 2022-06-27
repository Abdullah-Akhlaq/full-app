import React, { useState } from "react";
import classes from "./MainHeader.module.css";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Dashboard from "../Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { toggleAction } from "../../Store/Toggle";
import CardButton from "../UI/Card/CardButton";
import PropsDrilling from "../PropsDrilling/PropsDrilling";
import LiftMain from "../LiftingState/LiftMain";

const MainHeader = () => {
  return (
    <div>
      <header className={classes.header}>
        <nav>
          <ul>
            {
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
            }
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/SignUp">Sign Up</Link>
            </li>
            <li>
              <Link to="/SignIn">Sign In</Link>
            </li>
            <li>
              <Link to="/PropsDrill"> PropsDrill</Link>
            </li>
            <li>
              <Link to="/LiftingState"> LiftingState</Link>
            </li>
            <li>
              <CardButton />
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/PropsDrill" element={<PropsDrilling />}></Route>
          <Route path="/LiftingState" element={<LiftMain />}></Route>
        </Routes>
      </div>
    </div>
  );
};
export default MainHeader;
