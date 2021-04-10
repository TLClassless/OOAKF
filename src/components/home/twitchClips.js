import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import { getData } from "../functional/getData.js";

export class twitchClips extends Component {
  render() {
    getData();

    return (
      <div>
        <div className={style.clipContainer}>
          <img
            src={thisData.thumbnails.small}
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
