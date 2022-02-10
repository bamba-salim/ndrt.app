import React from 'react';

function BlockCmn({className ='',children}) {
    return (
        <div className={`card-akb  ${className}`}>
            {children}
        </div>
    );
}

export default BlockCmn;
