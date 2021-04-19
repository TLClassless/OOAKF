import axios from "axios";
const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_API_SECRET;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: YOUTUBE_KEY,
  },
});
