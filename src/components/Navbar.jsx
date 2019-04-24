import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navBar">
      <style jsx>{`
        img {
          height: 22px;
          display: inline-block;
        }
        .navBar {
          padding: 9px 8px 9px 8px;
          display: flex;
          grid-template-columns: 4fr, 3fr;
          //   border-bottom: 1px solid #eeeeee;
          //   width: 100%;
          //   box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.05);
        }
        .block {
          display: inline-block;
        }
        .right {
          display: inline-block;
          position: absolute;
          right: 0px;
          margin-top: -12px;
        }
        .button {
          border: none;
          background-color: white;
          font-size: 15px;
          color: #646f79;
          font-weight: 400;
          font-family: gordita, Helvetica Neue, Helvetica, sans-serif;
          letter-spacing: 0.5px;
          margin-right: 20px;
          display: inline-block;
        }
        button:hover {
          cursor: pointer;
        }
        .buttonPurple {
          background-color: #796eff;
          color: white;
          padding: 10px 17px 10px 17px;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 400;
          font-family: gordita, Helvetica Neue, Helvetica, sans-serif;
          letter-spacing: 0.5px;
          margin-right: 20px;
          border: none;
        }

        .dropdown {
          display: inline-block;
          position: relative;
        }

        .dropdown .dropdown-menu {
          list-style: none;
          position: absolute;
          top: 100%;
          left: 0;
          margin: 0;
          padding-inline-start: 7px;
          display: none;
        }

        .dropdown-menu li a {
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          font-family: gordita, Helvetica Neue, Helvetica, sans-serif;
          letter-spacing: 0.5px;
          color: #777777;
        }

        .dropdown:hover .dropdown-menu {
          display: block;
          width: 150px;
        }

        .dropdown-menu:hover {
          display: block;
          margin-top: 5px;
          width: 150px;
        }
        .chevron {
          font-size: 20px;
          color: #aaaaaa;
        }

        .dropdown-menu li {
          padding-top: 30px;
        }

        .dropdown-menu li a:hover {
          color: #796eff;
        }

        @media only screen and (max-width: 960px) {
        }
      `}</style>
      <div className="block">
        <Link to="/">
          <img src="https://luna1.co/0fc2ef.png" />
        </Link>
      </div>
      <div className="right">
        <button className="button">Templates</button>
        <button className="button">Product</button>
        <button className="button">Pricing</button>
        <div className="dropdown">
          <button className="button">
            Solutions <span className="chevron">⌄</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a href="">Marketing</a>
            </li>
            <li>
              <a href="">Company-wide</a>
            </li>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">HR</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button className="button">
            Contact Sales <span className="chevron">⌄</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a href="">Request Info</a>
            </li>
            <li>
              <a href="">Review Demo</a>
            </li>
          </ul>
        </div>

        <button className="button">Log In</button>
        <button className="buttonPurple">Try for free</button>
      </div>
    </div>
  );
}

export default Navbar;
