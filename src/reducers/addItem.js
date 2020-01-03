const initialState = {
  items: []
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case "REMOVE_ITEM":
      const removeItems = state.items.filter(
        item => item !== action.payload
      );
      return {
        ...state,
        items: removeItems
      };
    default:
      return state;
  }
};

export default itemReducer;
