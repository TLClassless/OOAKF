import React, { Component } from "react";
import style from "../../styles/BottomContainer.module.css";
import axios from "axios";

export class speedRuns extends Component {
  constructor() {
    super();
    this.state = {
      gameName: [],
      runThumbnail: [],
      runTime: [],
      runPlace: [],
      runLink: [],
      runCat: [],
      gameApi: [],
      catApi: [],

      runs: [],
    };
  }

  componentDidMount() {
    let runs = [];
    let runTimes = [];
    let runPlaces = [];
    let runLinks = [];
    let gameNames = [];
    let gameThumbs = [];
    let catNames = [];

    axios
      .get("https://www.speedrun.com/api/v1/users/8grze17x/personal-bests")
      .then((response) => {
        const runData = response.data.data;

        console.log("first", runData);

        runData.forEach((element) => {
          runs.push(element.run);
          runPlaces.push(element.place);
        });

        this.setState({ runs: runs });

        console.log("state test", this.state.runs);

        this.state.runs.forEach((element) => {
          runTimes.push(element.times.primary_t);
          runLinks.push(element.weblink);
          gameNames.push(
            axios
              .get(element.links[1].uri)
              .then((response) => response.data.data.names.international)
          );
          gameThumbs.push(
            axios
              .get(element.links[1].uri)
              .then((response) => response.data.data.assets["cover-large"].uri)
          );
          catNames.push(
            axios
              .get(element.links[2].uri)
              .then((response) => response.data.data.name)
          );
        });

        console.log("runTimes", runTimes);
        console.log("gamenames maybe", gameNames);
        console.log("catnames maybe", catNames);
        console.log("gameThumbs maybe", gameThumbs[0]);
      });

    this.setState({
      gameName: gameNames,
    });
  }

  render() {
    // console.log(this.state.runCats);
    // const URLs = this.state.runLink;
    const Titles = this.state.runName;
    const Thumbnails = this.state.runThumbnail;
    // const Position = this.state.runPlace;
    // const Time = this.state.runTime;
    const Category = this.state.runCat;
    // console.log(Titles);
    // console.log(Category);
    // console.log(Position);

    return (
      <div className={style.clipsContainer}>
        {/* <div className={style.runContainer}>
          <a href={URLs[0]}>
            <img
              src={Thumbnails[0]}
              alt="thumbnail"
              className={style.speedRunThumbnail}
            />
          </a>
          <a href={URLs[0]}>
            <h3 className={style.clipTitle}>Game: {Titles[0]}</h3>
            <h3 className={style.clipViews}>Category: {Category[0]}</h3>
            <h4 className={style.clipViews}>Time: {Time[0]}</h4>
            <h4 className={style.clipViews}>Position: {Position[0]}</h4>
          </a>
        </div>

        <div className={style.runContainer}>
          <a href={URLs[1]}>
            <img
              src={Thumbnails[1]}
              alt="thumbnail"
              className={style.speedRunThumbnail}
            />
          </a>
          <a href={URLs[1]}>
            <h3 className={style.clipTitle}>Game: {Titles[1]}</h3>
            <h3 className={style.clipViews}>Category: {Category[1]}</h3>
            <h4 className={style.clipViews}>Time: {Time[1]}</h4>
            <h4 className={style.clipViews}>Position: {Position[1]}</h4>
          </a>
        </div>

        <div className={style.runContainer}>
          <a href={URLs[2]}>
            <img
              src={Thumbnails[2]}
              alt="thumbnail"
              className={style.speedRunThumbnail}
            />
          </a>
          <a href={URLs[0]}>
            <h3 className={style.clipTitle}>Game: {Titles[2]}</h3>
            <h3 className={style.clipViews}>Category: {Category[2]}</h3>
            <h4 className={style.clipViews}>Time: {Time[2]}</h4>
            <h4 className={style.clipViews}>Position: {Position[2]}</h4>
          </a>
        </div>

        <div className={style.runContainer}>
          <a href={URLs[3]}>
            <img
              src={Thumbnails[3]}
              alt="thumbnail"
              className={style.speedRunThumbnail}
            />
          </a>
          <a href={URLs[0]}>
            <h3 className={style.clipTitle}>Game: {Titles[3]}</h3>
            <h3 className={style.clipViews}>Category: {Category[3]}</h3>
            <h4 className={style.clipViews}>Time: {Time[3]}</h4>
            <h4 className={style.clipViews}>Position: {Position[3]}</h4>
          </a>
        </div>

        <div className={style.runContainer}>
          <a href={URLs[4]}>
            <img
              src={Thumbnails[4]}
              alt="thumbnail"
              className={style.speedRunThumbnail}
            />
          </a>
          <a href={URLs[4]}>
            <h3 className={style.clipTitle}>Game: {Titles[4]}</h3>
            <h3 className={style.clipViews}>Category: {Category[4]}</h3>
            <h4 className={style.clipViews}>Time: {Time[4]}</h4>
            <h4 className={style.clipViews}>Position: {Position[4]}</h4>
          </a>
        </div>

        <div className={style.runContainer}>
          <a href={URLs[5]}>
            <img
              src={Thumbnails[5]}
              alt="thumbnail"
              className={style.speedRunThumbnail}
            />
          </a>
          <a href={URLs[5]}>
            <h3 className={style.clipTitle}>Game: {Titles[5]}</h3>
            <h3 className={style.clipViews}>Category: {Category[5]}</h3>
            <h4 className={style.clipViews}>Time: {Time[5]}</h4>
            <h4 className={style.clipViews}>Position: {Position[5]}</h4>
          </a>
        </div>

        <div className={style.runContainer}>
          <a href={URLs[6]}>
            <img
              src={Thumbnails[6]}
              alt="thumbnail"
              className={style.speedRunThumbnail}
            />
          </a>
          <a href={URLs[6]}>
            <h3 className={style.clipTitle}>Game: {Titles[6]}</h3>
            <h3 className={style.clipViews}>Category: {Category[6]}</h3>
            <h4 className={style.clipViews}>Time: {Time[6]}</h4>
            <h4 className={style.clipViews}>Position: {Position[6]}</h4>
          </a>
        </div> */}
      </div>
    );
  }
}

export default speedRuns;
