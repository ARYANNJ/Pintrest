import React, { useState } from "react";
import { useSelector } from "react-redux";
import Blogs from "./Blogs";
import img1 from "./pin.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
  const [value, setValue] = useState();
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div>
      <nav className="navBar">
        <img className="img1" src={img1} />
        {isLoggedIn && (
          <Box display={"flex"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
              <Tab LinkComponent={Link} to="/blog/add" label="Add Blog" />
            </Tabs>
          </Box>
        )}
        {isLoggedIn && (
          <input className="searchBar" type="text" placeholder="Search" />
        )}

        <div className="btn">
          {!isLoggedIn && (
            <div>
              <a href="./auth">
                <button className="loginBtn">Login</button>
              </a>
              <a href="./auth">
                <button className="loginBtn">signup</button>
              </a>
            </div>
          )}
          {isLoggedIn && (
            <a href="./Login">
              <button
                className="loginBtn"
                onClick={() => dispath(authActions.logout)}
              >
                LOGOUT
              </button>
            </a>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
