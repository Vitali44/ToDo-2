const initialState = {
  items: []
};

const addItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: [...state.item, action.payload]
      };
    default:
      return state;
  }
};

export default addItemReducer;
