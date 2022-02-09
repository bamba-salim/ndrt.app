import React, {Component} from 'react';
import {SubViewTitre} from "../atoms/view-titre";

class SubViewTpl extends Component {
    render() {
        return (
            <div className={`row row-cols-1 ${this.props.photo ? 'flex-md-column': 'flex-md-row'}`}>
                <div className={` ${this.props.photo ? "d-block" : 'd-none'} `}>picture</div>
                <div className={`p-3 my-3  ${!this.props.photo ? "d-block" : 'd-none'} `}>
                    <SubViewTitre {...this.props}/>
                </div>
                <div className={`col ${this.props.childrenClassname}`}>{this.props.children}</div>
            </div>
        );
    }
}

export default SubViewTpl;
