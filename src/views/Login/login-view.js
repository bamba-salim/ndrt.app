import React, {Component} from 'react';
import {ViewTitre} from "../../components/atoms/view-titre";
import ViewsTpl from "../../components/_template/views-tpl";
import BlockCmn from "../../components/_commons/block-cmn";
import SignInForm from "./forms/sign-in-form";
import SignUpForm from "./forms/sign-up-form";


class LoginView extends Component {

    render() {

        return (
            <ViewsTpl classname="container" {...this.props}>
                <ViewTitre titre="Connexion / inscription"/>
                <BlockCmn classname="p-3 border my-3">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <SignInForm/>
                        </div>
                        <div className="col">
                            <SignUpForm/>
                        </div>
                    </div>
                </BlockCmn>
            </ViewsTpl>
        );
    }
}

export default LoginView;
