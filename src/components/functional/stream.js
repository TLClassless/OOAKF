import React, { Component } from "react";
import style from "../../styles/StreamContainer.module.css";
const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

class Stream extends Component {
  componentDidMount() {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", EMBED_URL);
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
    });
    document.body.appendChild(script);
  }

  render() {
    return (
      <div id={this.props.targetID} className={style.StreamComponent}></div>
    );
  }
}

Stream.defaultProps = {
  targetID: "twitch-embed",
  width: "100%",
  height: "100%",
  channel: "ooakf",
};

export default Stream;
