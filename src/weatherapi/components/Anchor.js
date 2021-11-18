import React from "react";

const Anchor = (props) => {
    const { href, text } = props;
    return (
        <a style={{color:'white',fontSize:'30px'}} target="_blank" rel="noopener noreferrer" href={href}>{text}</a>
    );
};

export default Anchor;