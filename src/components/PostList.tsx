import React, {useState} from 'react';
import PostItem from "./PostItem";

interface PostListParams {
    title: string;
}

const PostList = ({title}: PostListParams):JSX.Element => {
        const [posts, setPosts] = useState([
            {id: 1, title: "JavaScript", description: "JS is a programming language"},
            {id: 2, title: "TypeScript", description: "TS is a programming language"}
        ]);
        return (
            <div>
                <h1 style={{textAlign: "center"}}>{title}</h1>
                {posts.map(post => <PostItem key={post.id} id={post.id} title={post.title} description={post.description}/>)}
            </div>
        );
}

export default PostList;
