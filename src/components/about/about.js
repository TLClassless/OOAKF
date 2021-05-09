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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br /> <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
              <br /> <br />
              Thanks for watching!
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
