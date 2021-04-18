import React, { Component } from "react";
import style from "../styles/Header.module.css";
import {
  FaTwitch,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTrophy,
} from "react-icons/fa";

export class header extends Component {
  render() {
    return (
      <div className={style.navbar}>
        <div className={style.branding}>
          <a href="/">
            <h1>OOAKF</h1>
          </a>
          {/* <h3>Call me Oak</h3> */}
        </div>
        <ul className={style.navigation}>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="https://streamlabs.com/ooakf/tip">Donate</a>
          </li>
          <li>
            <a
              className={style.subscribe}
              href="https://www.twitch.tv/products/ooakf"
            >
              Subscribe
            </a>
          </li>
          <li>
            <a href="https://twitch.tv/ooakf">
              <FaTwitch />
            </a>
          </li>
          <li>
            <a href="https://youtube.com/theoneofakindfilms">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ooakf">
              <FaTwitter />
            </a>{" "}
          </li>
          <li>
            <a href="https://instagram.com/one_of_a_kind_films">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.speedrun.com/user/OOAKF">
              <FaTrophy />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default header;
