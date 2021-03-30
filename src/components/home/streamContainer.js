import React, { Component } from "react";
import Stream from "../functional/stream.js";
import style from "../../styles/StreamContainer.module.css";

export class streamContainer extends Component {
  render() {
    return (
      <div className={style.topContainer}>
        <div className={style.streamContainer}>
          <Stream />
        </div>
      </div>
    );
  }
}

export default streamContainer;
