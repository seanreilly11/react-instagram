import React from "react";
// import { GlobalContext } from "../context/GlobalState";

export const Posts = ({ post }) => {
    const { username, image, caption, likes } = post;
    return (
        <div className="post">
            <h4 className="post-user">{username}</h4>
            <div className="post-image">
                <img src={image} alt="" />
            </div>
            <p className="post-likes">{likes} likes</p>
            <p className="post-caption">
                <span className="post-user-cap">{username} </span>
                {caption}
            </p>
        </div>
    );
};
