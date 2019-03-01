const initialState = {
  cities: [],
  tempdata: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_LOCATION":
      return { ...state, cities: state.cities.concat(action.payload) };
    case "FETCH_WEATHER":
      return { ...state, tempdata: state.tempdata.concat(action.payload) };
    default:
      return state;
  }
};
