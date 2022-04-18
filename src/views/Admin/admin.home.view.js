import React from 'react';
import ViewsTpl from "../../components/_template/views.tpl";
import {Link, Outlet} from "react-router-dom";
import NavTpl from "../../components/_template/nav.tpl";

function AdminHomeView ({access}) {
    return (
        <ViewsTpl className="container" titre={'Gestion du Site'} access={access} >
            <NavTpl>
                <Link className="nav-link" to={`/admin`}>Admin Home</Link>
                <Link className="nav-link" to={`/gestion-user`}>Utilisateurs</Link>
            </NavTpl>
            <Outlet/>
        </ViewsTpl>
    );
}

export default AdminHomeView;
