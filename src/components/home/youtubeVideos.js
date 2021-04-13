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
    const response = await youtube.get("/search", {
      params: {
        q: "boobies",
      },
    });
    console.log(response);
    //     this.setState({
    // 	    videos: response.data
    //     })
  }

  render() {
    return <div></div>;
  }
}

export default youtubeVideos;
