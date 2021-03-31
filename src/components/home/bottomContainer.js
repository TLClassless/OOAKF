import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";

export class bottomContainer extends Component {
  render() {
    return (
      <main className={style.container}>
        <div className={style.clips}>clips</div>
        <div className={style.youtube}>youtube</div>
        <div className={style.vods}>vods</div>
        <div className={style.insta}>insta</div>
        <div className={style.tweets}>tweets</div>
      </main>
    );
  }
}

export default bottomContainer;
