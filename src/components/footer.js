import React, { Component } from "react";
import style from "../styles/Footer.module.css";
import {
  FaTwitch,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTrophy,
} from "react-icons/fa";

export class footer extends Component {
  render() {
    return (
      <div className={style.container}>
        <h3>© OOAKF 2021</h3>
        <div className={style.socials}>
          <a href="https://twitch.tv/ooakf">
            <FaTwitch />
          </a>
          <a href="https://youtube.com/theoneofakindfilms">
            <FaYoutube />
          </a>
          <a href="https://twitter.com/ooakf">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/one_of_a_kind_films">
            <FaInstagram />
          </a>
          <a href="https://www.speedrun.com/user/OOAKF">
            <FaTrophy />
          </a>
        </div>
      </div>
    );
  }
}

export default footer;
