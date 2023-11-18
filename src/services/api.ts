import axios from "axios";

const apiSpaceX = axios.create({
  baseURL: "https://backend-callix.onrender.com",
});

export default apiSpaceX;
