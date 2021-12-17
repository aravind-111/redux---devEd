const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    default:
      return state;
    case "DECREMENT":
      return state - 1;
  }
};

export default countReducer;
