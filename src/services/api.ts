import axios from "axios";

const apiSpaceX = axios.create({
  baseURL: "https://backend-callix.herokuapp.com",
});

export default apiSpaceX;
