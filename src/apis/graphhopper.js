//TODO: Switch to http://www.geonames.org/ api
import axios from "axios";

const KEY = process.env.REACT_APP_GH_APIKEY;

//example https://graphhopper.com/api/1/geocode?q=berlin&locale=de&debug=true&key=[YOUR_KEY]

export default axios.create({
  baseURL: "https://graphhopper.com/api/1/geocode",
  params: {
    key: KEY,
    locale: "en"
  }
});
