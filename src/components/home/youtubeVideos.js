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
      <div>
        <h1>hello</h1>

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
      </div>
    );
  }
}

export default youtubeVideos;
