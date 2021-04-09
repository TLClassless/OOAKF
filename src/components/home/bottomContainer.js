import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import Clips from "./twitchClips.js";

export class bottomContainer extends Component {
  render() {
    return (
      <main className={style.container}>
        <Clips />
        <div className={style.clips}>clips</div>
        <div className={style.youtube}>youtube</div>
        <div className={style.vods}>vods</div>
      </main>
    );
  }
}

export default bottomContainer;
