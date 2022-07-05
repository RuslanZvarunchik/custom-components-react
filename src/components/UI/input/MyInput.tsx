import React from 'react';
import classes from "./MyInput.module.css";

interface MyInputParams {
    type: string,
    placeholder: string
}

const MyInput = ({type,placeholder}:MyInputParams) => {
    return (
        <input className={classes.myInput} type={type} placeholder={placeholder}/>
    );
};

export default MyInput;
