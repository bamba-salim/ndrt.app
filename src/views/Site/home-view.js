import React, {Component} from 'react';
import ViewsTpl from "../../components/_template/views-tpl";
import {ViewTitre} from "../../components/atoms/view-titre";
import BlockCmn from "../../components/_commons/block-cmn";


class HomeView extends Component {


    render() {
        return (
            <ViewsTpl classname="container" {...this.props}>
                <ViewTitre titre={`Bienvenue sur ${process.env.REACT_APP_SITE_NAME}`}/>

                <BlockCmn>
                </BlockCmn>
            </ViewsTpl>
        );
    }
}

export default HomeView;
