import React from 'react';

export default function Heading(props) {
    return(
        <div className="columns has-text-centered">
            <div className="column">
                {props.children}
            </div>
        </div>
    );
};