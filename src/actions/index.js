import darksky from "../apis/darksky";
import graphhopper from "../apis/graphhopper";

export const signIn = userId => {
  return null;
};

export const signOut = () => {
  return null;
};

export const searchLocation = location => async dispatch => {
  const response = await graphhopper.get("", {
    params: { q: location }
  });

  dispatch({ type: "SEARCH_LOCATION", payload: response.data.hits[0] });
};

export const fetchWeather = (lat, lng) => async dispatch => {
  const response = await darksky.get(
    `/${lat},${lng}?exclude=flags,alerts,minutely`
  );

  dispatch({ type: "FETCH_WEATHER", payload: response.data });
};
