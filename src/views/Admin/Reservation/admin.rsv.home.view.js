import React from 'react';
import ViewsTpl from "../../../components/_template/views.tpl";
import NavTpl from "../../../components/_template/nav.tpl";
import {Link, Outlet} from "react-router-dom";

function AdminRsvHomeView(props) {
    return (
        <ViewsTpl {...props} titre="Getsion des Réservations" className="container">
            <NavTpl>
                <Link className="nav-link" to={`/admin`}>Retour</Link>
                <Link className="nav-link" to={``}>Home</Link>
            </NavTpl>
            <Outlet/>
        </ViewsTpl>
    );
}

export default AdminRsvHomeView;
