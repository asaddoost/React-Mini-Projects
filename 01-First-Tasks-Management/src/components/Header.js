import React from 'react';

import Button from './Button';


// import { useLocation } from 'react-router-dom';

const Header = (props) => {
    const {title, onAdd, showAddForm} = props;
   
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
            onClick={onAdd} 
            text={showAddForm ? "Close" : "+ Add new task"}
            color={showAddForm ? "#FF4949" : "#019267"}
            />
        </header>
    );
};

export default Header;
