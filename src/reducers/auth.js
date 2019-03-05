const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, uid: action.uid };
    case "LOGOUT":
      return {};
    case "IS_TRAINER":
      return { ...state, isTrainer: action.isTrainer };
    default:
      return state;
  }
};

export default authReducer;
