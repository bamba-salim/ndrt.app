import React, {Component} from 'react';
import {I_CLOSE} from "../../ressources/utils/icon.utils";

class ModalTpl extends Component {


    render() {

        let modelStyle = {
            display: this.props.show ? 'block' : 'none',
            backgroundColor: 'rgb(0,0,0,0.8)'
        }

        return (
            <div>
                <div className="modal show fade" style={modelStyle}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalTpl;
