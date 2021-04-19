import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import axios from "axios";

export class speedRuns extends Component {
  constructor() {
    super();
    this.state = {
      runs: [],
    };
  }

  async componentDidMount() {
    await axios
      .get("https://www.speedrun.com/api/v1/users/8grze17x/personal-bests")
      .then((response) => {
        const thisData = response.data.data;
        const gameNameUri = thisData.map(function (element) {
          return element.run.links[1].uri;
        });
        console.log(gameNameUri);
        axios.get(gameNameUri[0]).then((response) => {
          console.log(response.data);
          const gameName = response.data.data.names.international;
          const gameThumbnail = response.data.data.assets["cover-large"].uri;
          console.log(gameName, gameThumbnail);
        });
      });
  }
  render() {
    return <div></div>;
  }
}

export default speedRuns;
