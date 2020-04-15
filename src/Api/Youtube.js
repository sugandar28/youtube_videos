import axios from "axios";

const KEY = "AIzaSyArZTaDDytT8pTAP7JrYf-PYib8JIXDDqM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});
