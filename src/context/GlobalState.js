import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    posts: [
        {
            id: 1,
            username: "cskoyles0",
            image: "http://dummyimage.com/470x470.jpg/dddddd/000000",
            caption: "congue diam id ornare imperdiet sapien urna",
            likes: 81,
            avatar:
                "https://robohash.org/aliquamestrerum.jpg?size=50x50&set=set1",
        },
        {
            id: 2,
            username: "clangcastle1",
            image: "http://dummyimage.com/470x470.jpg/cc0000/ffffff",
            caption: "lorem vitae mattis nibh ligula nec sem duis",
            likes: 63,
            avatar:
                "https://robohash.org/estdoloremarchitecto.jpg?size=50x50&set=set1",
        },
        {
            id: 3,
            username: "eplace2",
            image: "http://dummyimage.com/470x470.jpg/5fa2dd/ffffff",
            caption: "tristique est et tempus semper",
            likes: 3,
            avatar:
                "https://robohash.org/maioresexplicaboquia.jpg?size=50x50&set=set1",
        },
        {
            id: 4,
            username: "jsheeres3",
            image: "http://dummyimage.com/470x470.jpg/ff4444/ffffff",
            caption: "turpis sed ante vivamus tortor duis mattis egestas",
            likes: 10,
            avatar:
                "https://robohash.org/magnamsedquos.jpg?size=50x50&set=set1",
        },
        {
            id: 5,
            username: "bwaldrum4",
            image: "http://dummyimage.com/470x470.jpg/cc0000/ffffff",
            caption:
                "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam",
            likes: 79,
            avatar:
                "https://robohash.org/necessitatibusautcupiditate.jpg?size=50x50&set=set1",
        },
        {
            id: 6,
            username: "kflisher5",
            image: "http://dummyimage.com/470x470.jpg/dddddd/000000",
            caption:
                "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum",
            likes: 63,
            avatar: "https://robohash.org/eteaaut.jpg?size=50x50&set=set1",
        },
        {
            id: 7,
            username: "flyptrit6",
            image: "http://dummyimage.com/470x470.jpg/cc0000/ffffff",
            caption:
                "nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
            likes: 60,
            avatar:
                "https://robohash.org/sitdoloremenim.jpg?size=50x50&set=set1",
        },
        {
            id: 8,
            username: "chinkens7",
            image: "http://dummyimage.com/470x470.jpg/ff4444/ffffff",
            caption:
                "venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien",
            likes: 93,
            avatar:
                "https://robohash.org/perspiciatisvoluptatemlaboriosam.jpg?size=50x50&set=set1",
        },
        {
            id: 9,
            username: "ncapron8",
            image: "http://dummyimage.com/470x470.jpg/dddddd/000000",
            caption:
                "molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
            likes: 49,
            avatar:
                "https://robohash.org/nihilnemoquasi.jpg?size=50x50&set=set1",
        },
        {
            id: 10,
            username: "cworham9",
            image: "http://dummyimage.com/470x470.jpg/cc0000/ffffff",
            caption:
                "ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin",
            likes: 43,
            avatar:
                "https://robohash.org/distinctiosuntmagni.jpg?size=50x50&set=set1",
        },
        {
            id: 11,
            username: "mfarrara",
            image: "http://dummyimage.com/470x470.jpg/ff4444/ffffff",
            caption:
                "sapien in sapien iaculis congue vivamus metus arcu adipiscing",
            likes: 41,
            avatar:
                "https://robohash.org/quisadipiscinon.jpg?size=50x50&set=set1",
        },
    ],
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
        // console.log(res);
        res.forEach((data) => {
            addPost(data);
        });
    };

    // useEffect(() => {
    //     getData();
    // }, []);

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
