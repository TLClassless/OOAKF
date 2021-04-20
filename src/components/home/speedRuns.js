import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import axios from "axios";

export class speedRuns extends Component {
  constructor() {
    super();
    this.state = {
      gameName: [],
      gameThumbnail: [],
      runTime: [],
      runPlace: [],
      runLink: [],
    };
  }

  async componentDidMount() {
    let runTimes = [];
    let runPlaces = [];
    let runLinks = [];
    let gameNames = [];
    let gameThumbnails = [];

    await axios
      .get("https://www.speedrun.com/api/v1/users/8grze17x/personal-bests")
      .then((response) => {
        const thisData = response.data.data;

        thisData.forEach((element) => {
          runTimes.push(element.run.times.primary_t);
          runPlaces.push(element.place);
          runLinks.push(element.run.weblink);
        });
        const gameNameUri = thisData.map(function (element) {
          return element.run.links[1].uri;
        });

        gameNameUri.forEach((element) =>
          axios.get(element).then((response) => {
            gameNames.push(response.data.data.names.international);
            gameThumbnails.push(response.data.data.assets["cover-large"].uri);
          })
        );

        console.log(runTimes);
        console.log(gameNames);
        console.log(gameThumbnails);
        console.log(runPlaces);
        console.log(runLinks);
      });

    await this.setState({
      gameName: gameNames,
      gameThumbnail: gameThumbnails,
      runTime: runTimes,
      runPlace: runPlaces,
      runLink: runLinks,
    });
  }

  render() {
    console.log(this.state.gameName);
    return <div></div>;
  }
}

export default speedRuns;
