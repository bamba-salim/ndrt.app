import React from 'react';
import {ViewTitre} from "../../components/atoms/view.titre";
import ViewsTpl from "../../components/_template/views.tpl";
import BlockCmn from "../../components/_commons/block.cmn";
import LoginSignInForm from "./forms/login.sign.in.form";
import LoginSignUpForm from "./forms/login.sign-up.form";


function LoginHomeView ({access}) {
        return (
        <ViewsTpl className="container" access={access} titre="Connexion / inscription">
            <BlockCmn className="p-3 border my-3">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <LoginSignInForm/>
                    </div>
                    <div className="col">
                        <LoginSignUpForm/>
                    </div>
                </div>
            </BlockCmn>
        </ViewsTpl>
    );
}

export default LoginHomeView;
