import React, {Component} from 'react';
import ViewsTpl from "../../components/_template/views-tpl";
import {ViewTitre} from "../../components/atoms/view-titre";


class HomeView extends Component {
    render() {
        return (
            <ViewsTpl classname="container">
                <ViewTitre titre="Bienvenue sur Alkebulabz"/>
            </ViewsTpl>
        );
    }
}

export default HomeView;
