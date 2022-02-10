import React from 'react';

function NavTpl({children, end}) {
    return (
        <div className="row">
            <div className="col nav">{children}</div>
            <nav className="col nav justify-content-end text-end">{end}</nav>
        </div>
    );
}

export default NavTpl;
