import React, {useRef, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", description: "JS is a programming language"},
        {id: 2, title: "TypeScript", description: "TS is a programming language"}
    ]);
    function addNewPost(e:any)
    {
        e.preventDefault();
        const newPost = {
            id:Date.now(),
            title,
            description:body
        }
        setPosts([...posts,newPost])
    }

    function changeTitle(e:any)
    {
        setTitle(e.target.value)
    }

    function changeBody(e:any)
    {
        setBody(e.target.value)
    }
    return (
        <div className="App">
            <form>
                <MyInput value={title} onChange={changeTitle} type={"text"} placeholder={"Post title"}/>
                <MyInput value={body} onChange={changeBody} type={"text"} placeholder={"Post description"}/>
                <MyButton disabled={false} onClick={addNewPost}>Create post</MyButton>
            </form>
            <PostList posts={posts}/>
        </div>
    );
}

export default App;
