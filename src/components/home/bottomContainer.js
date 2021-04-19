import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import Clips from "./twitchClips.js";
// import VODs from "./twitchVods.js";
import Youtube from "./youtubeVideos.js";
import SpeedRun from "./speedRuns.js";
const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_API_SECRET;

export class bottomContainer extends Component {
  render() {
    console.log(YOUTUBE_KEY);
    return (
      <main className={style.container}>
        <h1 className={style.titleLeftAligned}>
          <a href="https://www.twitch.tv/ooakf/videos?filter=clips&range=all">
            Most Viewed Twitch Clips
          </a>
        </h1>

        <Clips />
        {/* <h1 className={style.titleLeftAligned}>Recent Twitch VOD's</h1>
        <VODs /> */}
        <h1 className={style.titleLeftAligned}>
          <a href="https://www.youtube.com/playlist?list=PL1Iie15gC15gNHozS35CbOelNb5ZbhQvx">
            The Lie in Podcast
          </a>
        </h1>
        <Youtube />
        <h1 className={style.titleLeftAligned}>Personal Best Speed Runs</h1>
        <SpeedRun />
      </main>
    );
  }
}

export default bottomContainer;
