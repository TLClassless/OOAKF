import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import youtube from "../../api/youtube";
const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_API_SECRET;

export class youtubeVideos extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }

  async componentDidMount() {
    console.log(YOUTUBE_KEY);
    const response = await youtube.get("/playlistItems", {
      params: {
        playlistId: "PL1Iie15gC15gNHozS35CbOelNb5ZbhQvx",
      },
    });
    await this.setState({
      videos: response.data.items,
    });
  }

  render() {
    console.log(this.state.videos);

    const Array = this.state.videos;

    const Titles = Array.map(function (element) {
      return element.snippet.title;
    });

    const Thumbnails = Array.map(function (element) {
      return element.snippet.thumbnails.medium.url;
    });

    const URLs = Array.map(function (element) {
      return element.snippet.resourceId.videoId;
    });

    const URL = "https://youtube.com/" + URLs[0];

    return (
      <div className={`${style.clipsContainer} ${style.half} ${style.halfL}`}>
        <div className={style.clipContainer}>
          <a href={URL[1]}>
            <img
              src={Thumbnails[1]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URL[1]}>
            <h3 className={style.clipTitle}>{Titles[1]}</h3>
            {/* <h4 className={style.clipViews}>Views: {Views[2]}</h4> */}
          </a>
        </div>

        <div className={style.clipContainer}>
          <a href={URL[2]}>
            <img
              src={Thumbnails[2]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URL[2]}>
            <h3 className={style.clipTitle}>{Titles[2]}</h3>
            {/* <h4 className={style.clipViews}>Views: {Views[2]}</h4> */}
          </a>
        </div>

        <div className={style.clipContainer}>
          <a href={URL[3]}>
            <img
              src={Thumbnails[3]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URL[3]}>
            <h3 className={style.clipTitle}>{Titles[3]}</h3>
            {/* <h4 className={style.clipViews}>Views: {Views[2]}</h4> */}
          </a>
        </div>

        <div className={style.clipContainer}>
          <a href={URL[4]}>
            <img
              src={Thumbnails[4]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URL[4]}>
            <h3 className={style.clipTitle}>{Titles[4]}</h3>
            {/* <h4 className={style.clipViews}>Views: {Views[2]}</h4> */}
          </a>
        </div>

        <div className={style.clipContainer}>
          <a href={URL[5]}>
            <img
              src={Thumbnails[5]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URL[5]}>
            <h3 className={style.clipTitle}>{Titles[5]}</h3>
            {/* <h4 className={style.clipViews}>Views: {Views[2]}</h4> */}
          </a>
        </div>

        <div className={style.clipContainer}>
          <a href={URL[6]}>
            <img
              src={Thumbnails[6]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URL[6]}>
            <h3 className={style.clipTitle}>{Titles[6]}</h3>
            {/* <h4 className={style.clipViews}>Views: {Views[2]}</h4> */}
          </a>
        </div>

        <div className={style.clipContainer}>
          <a href={URL[7]}>
            <img
              src={Thumbnails[7]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URL[7]}>
            <h3 className={style.clipTitle}>{Titles[7]}</h3>
            {/* <h4 className={style.clipViews}>Views: {Views[2]}</h4> */}
          </a>
        </div>
      </div>
    );
  }
}

export default youtubeVideos;
