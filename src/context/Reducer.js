const Reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_CART":
            const user_data = { ...state.user_basket, ...action.user_data };

            return {
                ...state,

                user_data: user_data,
            };
        default:
            return state;
    }
};

export default Reducer;
