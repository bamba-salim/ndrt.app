import React, {Component} from 'react';
import NavBar from "../atoms/nav-bar";
import {Navigate} from "react-router-dom";
import LodashUtils from "../../ressources/utils/lodash.utils";

class ViewsTpl extends Component {

    render() {
       if (LodashUtils.isset(this.props.access)? !this.props.access : false) return <Navigate to={LodashUtils.isset(this.props.target) ? this.props.target : '/' }/>;
        return (
            <>
                <header>
                    <NavBar/>
                </header>
                <main className={`py-3 ${this.props.classname}`}>
                    {this.props.children}
                </main>
                <footer>
                    FOOTER
                </footer>
            </>
        );
    }
}

export default ViewsTpl;
