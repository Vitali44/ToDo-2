export const addItemAction = (item) => (dispatch) => {
    return dispatch ({
        type: 'ADD_ITEM',
        payload: item
        });
};
