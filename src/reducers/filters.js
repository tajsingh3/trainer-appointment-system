import moment from "moment";

const initialState = {
  myStartDate: moment().startOf("month"),
  myEndDate: moment().endOf("month"),
  availableStartDate:null,
  availableEndDate:null
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AVAILABLE_START_DATE":
      return { ...state, availableStartDate: action.startDate };
    case "SET_AVAILABLE_END_DATE":
      return { ...state, availableEndDate: action.endDate };
    case "SET_MY_START_DATE":
      return { ...state, myStartDate: action.startDate };
    case "SET_MY_END_DATE":
      return { ...state, myEndDate: action.endDate };
    default:
      return state;
  }
};

export default filtersReducer;
