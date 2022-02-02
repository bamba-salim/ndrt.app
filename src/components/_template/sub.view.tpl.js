import React, {Component} from 'react';
import {SubViewTitre} from "../atoms/view-titre";

class SubViewTpl extends Component {
    render() {
        return (
            <div className="row row-cols-1 row-cols-md-2">
                <div className={` ${this.props.photo ? "d-block" : 'd-none'} `}>picture</div>
                <div className={` ${!this.props.photo ? "d-block" : 'd-none'} `}>
                    <SubViewTitre classname={this.props.titreClassname} titre={this.props.titre}/>
                </div>
                <div className={`col ${this.props.childrenClassname}`}>{this.props.children}</div>
            </div>
        );
    }
}

export default SubViewTpl;
