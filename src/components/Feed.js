import React, { useContext } from "react";
import { Posts } from "./Posts";
import { GlobalContext } from "../context/GlobalState";

export const Feed = () => {
    const { posts } = useContext(GlobalContext);

    return (
        <div className="feed">
            {posts.map((post) => (
                <Posts key={post.id} post={post} />
            ))}
        </div>
    );
};
