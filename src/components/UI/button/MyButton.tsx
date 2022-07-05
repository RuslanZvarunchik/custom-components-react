import React from 'react';
import classes from "./MyButton.module.css";

interface MyButtonParams {
    children: any,
    disabled:  boolean
}

const MyButton = ({children,disabled}:MyButtonParams) => {
    return (
        <button disabled={disabled} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;
