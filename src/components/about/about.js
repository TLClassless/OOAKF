import React, { Component } from "react";
import style from "../../styles/About.module.css";
import Picture from "../../ooakf_portrait.jpg";

export class about extends Component {
  render() {
    return (
      <div className={style.topContainer}>
        <div className={style.aboutContainer}>
          <div className={style.aboutText}>
            <h1>Hi, I'm Cameron!</h1>
            <p>
              Welcome to my site, let me introduce myself. I'm a Twitch variety
              streamer, I play games like Valorant, Minecraft, League and
              Resident Evil, I've also been known to dabble in speedrunning,
              mostly in Portal, but I also hold a solidly average time on the
              Overwatch Tutorial 3.0. Along side this I draw some beautiful™
              works of art on stream for my viewers (for the right price).
              <br /> <br />
              Outside of streaming, I'm 25, studying Film at Salford University
              in Manchester and a master of Spag Bol (thanks Ben), for any
              business enquiries feel free to{" "}
              <a href="mailto:oneofakindfilmscameron@gmail.com">
                email me
              </a> or <a href="https://twitter.com/ooakf">DM me on Twitter</a>
              <br /> <br />
              Thanks for watching and supporting!
              <br /> <br />- Cameron
            </p>
          </div>

          <img className={style.profilePicture} src={Picture} alt="Cameron!" />
        </div>
      </div>
    );
  }
}

export default about;
