import React from "react";

function BottomFooterItem(props){
    return(
        <div className="clickable" onClick={e => console.log("Clicked", props.text)}>{props.text}</div>
        );
}

export default BottomFooterItem;