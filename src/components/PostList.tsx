import React from 'react';
import PostItem from "./PostItem";

interface PostListParams {
    id: number;
    title: string;
    description: string;
}

const PostList = (props:{posts:PostListParams[]}):JSX.Element => {
    const {posts} = props;
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Posts list</h1>
                {posts.map(post => <PostItem key={post.id} id={post.id} title={post.title} description={post.description}/>)}
            </div>
        );
}

export default PostList;
