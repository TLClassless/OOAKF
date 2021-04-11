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
        console.log(thisData);
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

    const Views = Array.map(function (element) {
      return element.views;
    });

    const Thumbnails = Array.map(function (element) {
      return element.thumbnails.small;
    });

    const URLs = Array.map(function (element) {
      return element.url;
    });

    return (
      <div className={style.clipsContainer}>
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
            <h4 className={style.clipViews}>Views: {Views[0]}</h4>
          </a>
        </div>

        <div className={style.spacer}></div>

        <div className={style.clipContainer}>
          <a href={URLs[1]}>
            <img
              src={Thumbnails[1]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URLs[1]}>
            <h3 className={style.clipTitle}>{Titles[1]}</h3>
            <h4 className={style.clipViews}>Views: {Views[1]}</h4>
          </a>
        </div>

        <div className={style.spacer}></div>

        <div className={style.clipContainer}>
          <a href={URLs[2]}>
            <img
              src={Thumbnails[2]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URLs[2]}>
            <h3 className={style.clipTitle}>{Titles[2]}</h3>
            <h4 className={style.clipViews}>Views: {Views[2]}</h4>
          </a>
        </div>

        <div className={style.spacer}></div>

        <div className={style.clipContainer}>
          <a href={URLs[3]}>
            <img
              src={Thumbnails[3]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URLs[3]}>
            <h3 className={style.clipTitle}>{Titles[3]}</h3>
            <h4 className={style.clipViews}>Views: {Views[3]}</h4>
          </a>
        </div>

        <div className={style.spacer}></div>

        <div className={style.clipContainer}>
          <a href={URLs[4]}>
            <img
              src={Thumbnails[4]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URLs[4]}>
            <h3 className={style.clipTitle}>{Titles[4]}</h3>
            <h4 className={style.clipViews}>Views: {Views[4]}</h4>
          </a>
        </div>
      </div>
    );
  }
}

export default twitchClips;
