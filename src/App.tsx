import React from 'react';
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <div className="post">
                <div className="post__content">
                    <strong>1. JavaScript</strong>
                    <div>
                        JavaScript is programming language
                    </div>
                </div>
                <div className="post__btns">
                    <button>Delete</button>
                </div>
            </div>
            <Counter/>
        </div>
    );
}

export default App;
