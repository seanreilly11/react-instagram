export default (state, action) => {
    switch (action.type) {
        case "DELETE":
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload),
            };
        case "ADD":
            return {
                ...state,
                posts: [action.payload, ...state.posts],
            };
        default:
            return state;
    }
};
