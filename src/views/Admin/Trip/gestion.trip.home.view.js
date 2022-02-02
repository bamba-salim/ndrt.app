import React from 'react';
import {Link, Outlet} from "react-router-dom";
import ViewsTpl from "../../../components/_template/views-tpl";
import {ViewTitre} from "../../../components/atoms/view-titre";
import NavigationTpl from "../../../components/_template/navigation.tpl";

function GestionTripHomeView(props) {
    return (
        <ViewsTpl classname="container"  {...props}>
            <ViewTitre titre="Gestion séjours"/>
            <NavigationTpl>
                <Link className="nav-link" to={``}>Séjours</Link>
                <Link className="nav-link" to={`add`}>Ajouter circuit</Link>
                <Link className="nav-link" to={`/gestion-user`}>Utilisateurs</Link>
            </NavigationTpl>
            <Outlet/>
        </ViewsTpl>
    );
}

export default GestionTripHomeView;
