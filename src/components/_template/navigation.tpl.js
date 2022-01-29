import React, {Component} from 'react';

class NavigationTpl extends Component {
    render() {
        return (
            <div className="row">
                <nav className="col nav">
                    {this.props.children}
                </nav>
            </div>
        );
    }
}

export default NavigationTpl;
