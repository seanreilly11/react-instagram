import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart as fasHeart,
    faComment as fasComment,
    faPaperPlane as fasPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
    faHeart as farHeart,
    faComment as farComment,
    faPaperPlane as farPlane,
} from "@fortawesome/free-regular-svg-icons";
// import { GlobalContext } from "../context/GlobalState";
export const Posts = ({ post }) => {
    const { username, image, caption, likes, avatar } = post;
    const [heart, setHeart] = useState(true);
    const [comment, setComment] = useState(true);
    const [plane, setPlane] = useState(true);
    return (
        <div className="post">
            <div className="post-header">
                <img src={avatar} alt="" />
                <h4 className="post-user">{username}</h4>
            </div>
            <div className="post-image">
                <img src={image} alt="" />
            </div>
            <div className="post-icons">
                <div className="post-icon-heart">
                    <FontAwesomeIcon
                        className={
                            heart === true
                                ? "post-icon post-icon-heart-reg show-icon"
                                : "post-icon post-icon-heart-reg hide-icon"
                        }
                        icon={farHeart}
                        onClick={() => setHeart(!heart)}
                    />
                    <FontAwesomeIcon
                        className={
                            heart === false
                                ? "post-icon post-icon-heart-solid show-icon"
                                : "post-icon post-icon-heart-solid hide-icon"
                        }
                        icon={fasHeart}
                        onClick={() => setHeart(!heart)}
                    />
                </div>
                <div className="post-icon-comment">
                    <FontAwesomeIcon
                        className={"post-icon post-icon-comment-reg"}
                        icon={farComment}
                        onClick={() => setComment(!comment)}
                    />
                    <FontAwesomeIcon
                        className={"post-icon post-icon-comment-solid"}
                        icon={fasComment}
                        onClick={() => setComment(!comment)}
                    />
                </div>
                <div className="post-icon-plane">
                    <FontAwesomeIcon
                        className={"post-icon post-icon-plane-reg"}
                        icon={farPlane}
                        onClick={() => setPlane(!plane)}
                    />
                    <FontAwesomeIcon
                        className={"post-icon post-icon-plane-solid"}
                        icon={fasPlane}
                        onClick={() => setPlane(!plane)}
                    />
                </div>
            </div>
            <p className="post-likes">{likes} likes</p>
            <p className="post-caption">
                <span className="post-user-cap">{username} </span>
                {caption}
            </p>
        </div>
    );
};
