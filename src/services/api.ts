import axios from "axios";

const apiSpaceX = axios.create({
  baseURL: "https://api.spacexdata.com/",
});

export default apiSpaceX;
