import React, {Component} from 'react';

class BlockCmn extends Component {
    render() {
        return (
            <div className={`card-akb  ${this.props.classname}`}>
                {this.props.children}
            </div>
        );
    }
}

export default BlockCmn;
