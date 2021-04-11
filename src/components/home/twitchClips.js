import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const TWITCH_SECRET = process.env.REACT_APP_API_SECRET;

export class twitchClips extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    console.log(CLIENT_ID, TWITCH_SECRET);

    const headers = {
      "Client-ID": CLIENT_ID,
      Accept: "application/vnd.twitchtv.v5+json",
    };

    await axios
      .get(
        "https://api.twitch.tv/kraken/clips/top?limit=10&period=all&channel=OOAKF",
        {
          headers: headers,
        }
      )
      .then((response) => {
        const thisData = response.data.clips;
        this.setState({
          data: thisData,
        });
      })

      .catch((error) => console.error("Error"));
  }

  render() {
    const Array = this.state.data;

    // Array.forEach((element) => console.log(element.title));
    // Array.forEach((element) => console.log(element.thumbnails.small));
    // Array.forEach((element) => console.log(element.url));

    const Titles = Array.map(function (element) {
      return element.title;
    });

    const Thumbnails = Array.map(function (element) {
      return element.thumbnails.small;
    });

    const URLs = Array.map(function (element) {
      return element.url;
    });

    return (
      <div>
        <div className={style.clipContainer}>
          <a href={URLs[0]}>
            <img
              src={Thumbnails[0]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URLs[0]}>
            <h3 className={style.clipTitle}>{Titles[0]}</h3>
          </a>
        </div>
      </div>
    );
  }
}

export default twitchClips;
