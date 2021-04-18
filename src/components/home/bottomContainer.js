import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import Clips from "./twitchClips.js";
import Youtube from "./youtubeVideos.js";
const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_API_SECRET;

export class bottomContainer extends Component {
  render() {
    console.log(YOUTUBE_KEY);
    return (
      <main className={style.container}>
        <h1>Most Viewed Twitch Clips</h1>
        <Clips />
        <h1>The Lie in Podcast</h1>
        <Youtube />
        <div className={style.youtube}>youtube</div>
        <div className={style.vods}>vods</div>
      </main>
    );
  }
}

export default bottomContainer;
