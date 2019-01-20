import axios from "axios";

const KEY = process.env.REACT_APP_DS_APIKEY;

//example https://api.darksky.net/forecast/[key]/[latitude],[longitude]

export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${KEY}`
});
