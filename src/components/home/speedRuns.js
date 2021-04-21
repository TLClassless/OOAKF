import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import axios from "axios";

export class speedRuns extends Component {
  constructor() {
    super();
    this.state = {
      runName: [],
      runThumbnail: [],
      runTime: [],
      runPlace: [],
      runLink: [],
    };
  }

  async componentDidMount() {
    let runTimes = [];
    let runPlaces = [];
    let runLinks = [];
    let runNames = [];
    let runThumbnails = [];
    let gameApi = [];

    await axios
      .get("https://www.speedrun.com/api/v1/users/8grze17x/personal-bests")
      .then((response) => {
        const runData = response.data.data;

        runData.forEach((element) => {
          runTimes.push(element.run.times.primary_t);
          runPlaces.push(element.place);
          runLinks.push(element.run.weblink);
        });
        gameApi.push(
          runData.map(function (element) {
            return element.run.links[1].uri;
          })
        );
      });

    const gameApiGet = gameApi[0];

    await gameApiGet.forEach((element) => {
      axios.get(element).then((response) => {
        const gameData = response.data.data;
        console.log(gameData.names.international);
        runNames.push(gameData.names.international);
        runThumbnails.push(gameData.assets["cover-large"].uri);
      });
      // runNames.push(responseData.names.international);
    });
    // .then((response) => {
    //   const runNameUri = response.data.data.map(function (element) {
    //     return element.run.links[1].uri;
    //   });
    //   await axios.get()

    // })

    console.log(runTimes);
    console.log(runNames);
    console.log(runThumbnails);
    console.log(runPlaces);
    console.log(runLinks);

    await this.setState({
      runName: runNames,
      runThumbnail: runThumbnails,
      runTime: runTimes,
      runPlace: runPlaces,
      runLink: runLinks,
    });

    console.log(this.state.runName);
  }

  render() {
    console.log(this.state.runName);
    const URLs = this.state.runLink;
    const Titles = this.state.runName;
    const Thumbnails = this.state.runThumbnail;
    const Position = this.state.runPlace;
    const Time = this.state.runTime;

    return (
      <div className={style.clipsContainer}>
        <div className={style.clipContainer}>
          <a href={URLs[0]}>
            <img
              src={Thumbnails.indexOf[0]}
              alt="thumbnail"
              className={style.thumbnail}
            />
          </a>
          <a href={URLs[0]}>
            <h3 className={style.clipTitle}>Game: {Titles}</h3>
            <h4 className={style.clipViews}>Time: {Time[0]}</h4>
            <h4 className={style.clipViews}>Position: {Position[0]}</h4>
          </a>
        </div>
      </div>
    );
  }
}

export default speedRuns;
