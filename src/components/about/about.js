import React, { Component } from "react";
import style from "../../styles/About.module.css";

export class about extends Component {
  render() {
    return (
      <div className={style.topContainer}>
        <div className={style.aboutContainer}>
          <h1>Hello World</h1>
          <p>Lorem ipsum dolar solomet</p>
        </div>
      </div>
    );
  }
}

export default about;
