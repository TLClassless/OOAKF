import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import ReactDOM from "react-dom";
import axios from "axios";

axios.componentDidMount(){
  console.log(CLIENT_ID)
}

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const TWITCH_SECRET = process.env.REACT_APP_API_SECRET;

export class bottomContainer extends Component {
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
