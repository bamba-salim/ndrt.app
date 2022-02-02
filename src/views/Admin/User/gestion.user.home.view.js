import React from 'react';
import {Link, Outlet} from "react-router-dom";
import SubViewTpl from "../../../components/_template/sub.view.tpl";
import ViewsTpl from "../../../components/_template/views-tpl";
import {ViewTitre} from "../../../components/atoms/view-titre";
import NavigationTpl from "../../../components/_template/navigation.tpl";

const GestionUserHomeView = (props) => {
    return (
        <ViewsTpl classname="container" {...props}>
            <ViewTitre titre={"Gestion des utilisateurs"}/>
            <NavigationTpl>
                <Link className="nav-link" to={``}>Gestion User</Link>
            </NavigationTpl>
            <Outlet/>
        </ViewsTpl>
    );
};

export default GestionUserHomeView;
