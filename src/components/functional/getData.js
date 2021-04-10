import React from "react";
import axios from "axios";

export default function getData() {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const TWITCH_SECRET = process.env.REACT_APP_API_SECRET;

  console.log(CLIENT_ID, TWITCH_SECRET);

  const headers = {
    "Client-ID": CLIENT_ID,
    Accept: "application/vnd.twitchtv.v5+json",
  };

  const getData = () => {
    axios
      .get(
        "https://api.twitch.tv/kraken/clips/top?limit=10&period=all&channel=OOAKF",
        {
          headers: headers,
        }
      )
      .then((response) => {
        const thisData = response.data.clips[{}];
        console.log(response);
        console.log(thisData);
      });
  };
}
