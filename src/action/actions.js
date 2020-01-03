const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const EDIT_ITEM = "EDIT_ITEM";

export const addItemAction = (item) => (dispatch) => {
    return dispatch({
        type: ADD_ITEM,
        payload: item,
    });
};

export const removeItemAction = (id) => (dispatch) => {
    return dispatch({
        type: DELETE_ITEM,
        payload: id
    });

};
export const editItemAction = (value, id) => (dispatch) => {
    return dispatch({
        type: EDIT_ITEM,
        value,
        id
    });
};