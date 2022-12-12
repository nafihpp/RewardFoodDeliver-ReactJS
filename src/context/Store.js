import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
    user_basket: [
        {
            name: "watermelon",
            price: 29,
        },
        {
            name: "done",
            price: 40,
        },
        {
            name: "apple",
        },
    ],
};
const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export const StoreContext = createContext(initialState);

export default Store;
