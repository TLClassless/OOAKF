import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import Clips from "./twitchClips.js";

export class bottomContainer extends Component {
  render() {
    return (
      <main className={style.container}>
        <h1>Most Viewed Twitch Clips</h1>
        <Clips />
        <div className={style.youtube}>youtube</div>
        <div className={style.vods}>vods</div>
      </main>
    );
  }
}

export default bottomContainer;
