import React from 'react';
import {Link, Outlet} from "react-router-dom";
import ViewsTpl from "../../../components/_template/views.tpl";
import NavTpl from "../../../components/_template/nav.tpl";

function AdminTripHomeView({access}) {
    return (
        <ViewsTpl className="container" titre={`Gestion séjours`} access={access}>
            <NavTpl>
                <Link className="nav-link" to={``}>Séjours</Link>
                <Link className="nav-link" to={`cities`}>Villes</Link>
                <Link className="nav-link" to={`add-trip`}>Ajouter circuit</Link>
            </NavTpl>
            <Outlet/>
        </ViewsTpl>
    );
}

export default AdminTripHomeView;
