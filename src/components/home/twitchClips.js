import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const TWITCH_SECRET = process.env.REACT_APP_API_SECRET;

export class twitchClips extends Component {
  componentDidMount() {
    console.log(CLIENT_ID, TWITCH_SECRET);

    const headers = {
      "Client-ID": CLIENT_ID,
      Accept: "application/vnd.twitchtv.v5+json",
    };

    axios
      .get(
        "https://api.twitch.tv/kraken/clips/top?limit=10&period=all&channel=OOAKF",
        {
          headers: headers,
        }
      )
      .then((response) => {
        const thisData = response.data.clips;
        console.log(thisData);
        console.log(thisData[0].title);
        console.log(thisData[0].url);
        console.log(thisData[0].thumbnails.small);
      })
      .catch((error) => console.error("Error"));
  }

  render() {
    return (
      <div>
        <div className={style.clipContainer}>
          <img
            src="https://clips-media-assets2.twitch.tv/41523515292-offset-4512-preview-260x147.jpg"
            alt="thumbnail"
            className={style.thumbnail}
          />
          <h3 className={style.clipTitle}>{}</h3>
        </div>
      </div>
    );
  }
}

export default twitchClips;
