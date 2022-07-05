import React from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    return (
        <div className="App">
            <form>
                <MyInput type={"text"} placeholder={"Post title"}/>
                <MyInput type={"text"} placeholder={"Post description"}/>
                <MyButton disabled={false}>Create post</MyButton>
            </form>
            <PostList title={"Posts list"}/>
        </div>
    );
}

export default App;
