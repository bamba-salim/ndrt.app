import React, {Component} from 'react';
import {Routes, Route} from "react-router-dom";
import HomeView from "../views/Site/home-view";
import LinksView from "../views/Links/links-view";
import AddLinkSubView from "../views/Links/add-link-sub-view";
import LinkListByTypeSubView from "../views/Links/link-list-by-type-sub-view";

export default class Rooter extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/liens-utiles" element={<LinksView/>}>
                    <Route path=":id" element={<LinkListByTypeSubView/>}/>
                    <Route path="ajouter-liens" element={<AddLinkSubView/>}/>
                </Route>
            </Routes>
        );
    }
}

export const MenuLink =  () => {

}
