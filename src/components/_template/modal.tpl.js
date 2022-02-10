import React from 'react';

function ModalTpl({children}) {

    const modelStyle = {
        display: this.props.show ? 'block' : 'none',
        backgroundColor: 'rgb(0,0,0,0.8)'
    }

    return (
        <div>
            <div className="modal show fade" style={modelStyle}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalTpl;
