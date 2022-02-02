import React, {Component} from 'react';
import ViewsTpl from "../../components/_template/views-tpl";
import {Link, Outlet} from "react-router-dom";
import NavigationTpl from "../../components/_template/navigation.tpl";
import {ViewTitre} from "../../components/atoms/view-titre";

class AdminHomeView extends Component {
    render() {
        return (
            <ViewsTpl classname="container" titre={'Gestion du Site'} {...this.props}>
                <ViewTitre titre={'Gestion du Site'}/>
                <NavigationTpl>
                    <Link className="nav-link" to={`/admin`}>Admin Home</Link>
                    <Link className="nav-link" to={`/gestion-trip`}>Séjours</Link>
                    <Link className="nav-link" to={`/gestion-user`}>Utilisateurs</Link>
                </NavigationTpl>
                <Outlet/>
            </ViewsTpl>
        );
    }
}

export default AdminHomeView;
