import React, { Component } from "react";
import style from "../styles/Header.module.css";
import { FaTwitch, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export class header extends Component {
  render() {
    return (
      <div className={style.navbar}>
        <div className={style.branding}>
          <h1>OOAKF</h1>
          {/* <h3>Call me Oak</h3> */}
        </div>
        <ul className={style.navigation}>
          <li>About</li>
          <li>Donate</li>
          <li>Subscribe</li>
          <li>
            <FaTwitch />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
      </div>
    );
  }
}

export default header;
