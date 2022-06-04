import React, {useState} from 'react';

const Counter = () => {
    const [likes, setLikes] = useState(0);

    function increaseLikes() {
        setLikes(likes + 1);
    }

    function decreaseLikes() {
        setLikes(likes - 1);
    }

    return (
        <div>
            <h1>Likes {likes}</h1>
            <button onClick={increaseLikes}>Increase</button>
            <button onClick={decreaseLikes}>Decrease</button>
        </div>
    );
};

export default Counter;
