import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    posts: [],
};

// creat context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getData = async () => {
        const response = await fetch(
            "https://my.api.mockaroo.com/instagram.json?key=c527bcb0"
        );
        const res = await response.json();
        res.forEach((data) => {
            addPost(data);
        });
    };

    useEffect(() => {
        getData();
    });

    // actions
    // function deleteTrans(id) {
    //     dispatch({
    //         type: "DELETE",
    //         payload: id,
    //     });
    // }

    function addPost(post) {
        dispatch({
            type: "ADD",
            payload: post,
        });
    }

    return (
        <GlobalContext.Provider value={{ posts: state.posts }}>
            {children}
        </GlobalContext.Provider>
    );
};
