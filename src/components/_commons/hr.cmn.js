import React from 'react';

function HrCmn ({w = '75', h= 0.15, className='' }) {
    return (
        <hr className={`my-3 mx-auto w-${w} ${className}`} style={{height: `${h}rem`}}/>
    );
};

export default HrCmn;
