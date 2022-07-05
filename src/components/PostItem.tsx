import React from 'react';
import Counter from "./Counter";

interface PostItemParams {
    id: number,
    title: string,
    description: string
}

const PostItem = ({id, title, description}:PostItemParams):JSX.Element => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{id}. {title}</strong>
                <div>
                    {description}
                </div>
                <div>
                    <Counter/>
                </div>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;
