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
    case "DELETE_CITY":
      return {
        ...state,
        cities: state.cities.filter((_, i) => i !== action.payload),
        tempdata: state.tempdata.filter((_, j) => j !== action.payload)
      };
    default:
      return state;
  }
};
