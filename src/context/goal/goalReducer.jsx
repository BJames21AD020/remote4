export default (state, action) => {
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
  
      // case "ADD_GOAL":
      //   return {
      //     ...state,
      //     goals: [...state.goals, action.payload],
      //     isLoading: false,
      //   };
  
      case "GET_GOALS":
        return {
          ...state,
          goals: action.payload,
          isLoading: false,
        };
  
      // case "UPDATE_GOALS":
      //   return {
      //     ...state,
      //     goals: state.goals.map((goal) =>
      //       goal._id === action.payload._id ? action.payload : goal
      //     ),
      //     isLoading: false,
      //   };
      // case "DELETE_GOALS":
      //   return {
      //     ...state,
      //     goals: state.goals.filter((goal) => goal._id !== action.payload),
      //     isLoading: false,
      //   };
  
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
  