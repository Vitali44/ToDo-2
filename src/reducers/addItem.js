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
    case "DELETE_ITEM":
      const removeItems = state.items.filter(
        item => item.id !== action.payload
      );
      return {
        ...state,
        items: removeItems
      };
    case "EDIT_ITEM":
      return state.map(item =>
        item.id === action.id ? {
          ...item,
          value: action.value
        } : item
      );
    default:
      return state;
  }
};

export default itemReducer;