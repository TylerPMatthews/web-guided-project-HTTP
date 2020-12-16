import React from 'react';

const Popup = (props)=> {
    const handleYesClick = ()=>{
        props.onYes();
    }

    const handleNoClick = ()=>{
        props.onNo();
    }

    return (<div className="popup">
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
        <button onClick={handleYesClick}>Yes</button>
        <button onClick={handleNoClick}>No</button>
    </div>);
}

export default Popup;