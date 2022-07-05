import React, {useState} from 'react';

const Counter = () => {
    const [likes, setLikes] = useState(0);
    const [dislike, setDislikes] = useState(0);

    function increaseLikes() {
        setLikes(likes + 1);
    }

    function decreaseLikes() {
        setDislikes(dislike + 1);
    }

    return (
        <div>
            <button onClick={increaseLikes}>Like</button>{likes}
            <button onClick={decreaseLikes}>Dislike</button>{dislike}
        </div>
    );
};

export default Counter;
