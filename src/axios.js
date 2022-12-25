import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//instance.get('/foo-bar'); -- will add foo-bar in the end of baseurl
export default instance;