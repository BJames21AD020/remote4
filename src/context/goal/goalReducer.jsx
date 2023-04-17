 const GoalReducer= (state, action) => {
    switch (action.type) {
      case "SET_CHART":
        return {
          ...state,
          value: action.payload,
        };

        case "SET_CURRENT":
          return {
            ...state,
            currentGoal: action.payload,
          };
  
  
      case "GET_GOALS":
        return {
          ...state,
          goals: action.payload,
          isLoading: false,
        };
  
  
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "GOAL_ERROR":
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };

  export default GoalReducer
  