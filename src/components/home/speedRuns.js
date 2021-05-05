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
      runCat: [],
      gameApi: [],
      catApi: [],

      runs: [],
    };
  }

  async componentDidMount() {
    let runNames = [];
    let runThumbnails = [];
    let runTimes = [];
    let runPlaces = [];
    let runLinks = [];
    let runCats = [];
    let gameApi = [];
    let catApi = [];

    await axios
      .get("https://www.speedrun.com/api/v1/users/8grze17x/personal-bests")
      .then((response) => {
        const runData = response.data.data;

        console.log("first", runData);

        runData.forEach((element) => {
          runTimes.push(element.run.times.primary_t);
          runPlaces.push(element.place);
          runLinks.push(element.run.weblink);
          gameApi.push(element.run.links[1].uri);
          catApi.push(element.run.links[2].uri);
        });

        console.log(gameApi, catApi);

        this.setState({
          runTime: runTimes,
          runPlace: runPlaces,
          runLink: runLinks,
          gameApi: gameApi,
          catApi: catApi,
        });

        const gameApiGet = gameApi;
        const catApiGet = catApi;

        var i = 0;
        var n = 0;

        var ii = 0;
        var nn = 0;

        var bar = new Promise((resolve, reject) => {
          gameApiGet.forEach((element) => {
            n++;
            console.log("el", element, n);

            axios.get(element).then((response) => {
              const gameData = response.data.data;
              console.log(gameData, i);
              i++;
              runNames.push(gameData.names.international);
              runThumbnails.push(gameData.assets["cover-large"].uri);

              console.log(gameData.names.international);

              console.log("len", gameApiGet.length);
              console.log("i", i, gameData.names.international);
              if (i === 7) resolve();
            });
          });
        });

        var foo = new Promise((resolve, reject) => {
          catApiGet.forEach((element) => {
            nn++;
            console.log("el", element, nn);

            axios.get(element).then((response) => {
              const catData = response.data.data;
              runCats.push(catData.name);
              console.log(catData.name, ii);
              ii++;
              console.log("fakeii", ii);
              if (ii === 7) resolve();
              // this.setState({
              //   runCat: runCats,
              //   iikey: ii,
              // });
            });
          });
        });

        Promise.all([bar, foo]).then((data) => {
          console.log("All done!", i, ii);
          console.log("foo", runNames);
          console.log("bar", runCats);
          this.setState({
            runName: runNames,
            runThumbnail: runThumbnails,
            ikey: i,
            runCat: runCats,
            iikey: ii,
          });
        });

        // this.setState({
        //   runName: runNames,
        //   runThumbnail: runThumbnails,
        //   ikey: i,
        // });
      });
  }

  render() {
    // console.log(this.state.runCats);
    const URLs = this.state.runLink;
    const Titles = this.state.runName;
    const Thumbnails = this.state.runThumbnail;
    const Position = this.state.runPlace;
    const Time = this.state.runTime;
    const Category = this.state.runCat;

    console.log("ii", Category);
    console.log("i", Titles);
    console.log("i", Thumbnails);
    // console.log(Titles);
    // console.log(Category);
    // console.log(Position);

    return (
      <div className={style.clipsContainer}>
        <div className={style.runContainer}>
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
        </div>
      </div>
    );
  }
}

export default speedRuns;
