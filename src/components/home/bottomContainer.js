import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import ReactDOM from "react-dom";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const TWITCH_SECRET = process.env.REACT_APP_API_SECRET;

export class bottomContainer extends Component {
  componentDidMount() {
    console.log(CLIENT_ID, TWITCH_SECRET);
    const headers = {
      "Client-ID": CLIENT_ID,
      Accept: "application/vnd.twitchtv.v5+json",
    };
    axios
      .get(
        "https://api.twitch.tv/kraken/clips/top?limit=10&channel=moonmoon_ow",
        { headers: headers }
      )
      .then(function (response) {
        console.log(response);
      });
  }

  render() {
    return (
      <main className={style.container}>
        <div className={style.clips}>clips</div>
        <div className={style.youtube}>youtube</div>
        <div className={style.vods}>vods</div>
      </main>
    );
  }
}

export default bottomContainer;
