import React, {Component} from 'react';
import ViewsTpl from "../../components/_template/views.tpl";
import {ViewTitre} from "../../components/atoms/view.titre";
import BlockCmn from "../../components/_commons/block.cmn";


function SiteHomeView() {
    return (
        <ViewsTpl className="container" titre={`Bienvenue sur ${process.env.REACT_APP_SITE_NAME}`}   >
            <BlockCmn>
            </BlockCmn>
        </ViewsTpl>
    );
}

export default SiteHomeView;
