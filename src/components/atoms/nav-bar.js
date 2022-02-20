import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import ICON from "../../ressources/utils/icon.utils";
import AuthService from "../../services/Routing/auth.service";


function NavBar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.setItem('info', 'Vous avez été déconnecté !')

        navigate('/')
        window.location.reload()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">Home</Link>
                    </div>

                    <nav className="col navbar-nav nav justify-content-lg-end justify-content-between">
                        <Link className={`nav-link active ` + AuthService.ShowIf(AuthService.IsLoggedIn)} to="/mon-espace">{ICON.USER}</Link>
                        <Link className={"nav-link active " + AuthService.ShowIf(AuthService.IsAdmin)} to="/admin">{ICON.SETTINGS}</Link>
                        <Link className={`nav-link active ` + AuthService.ShowIf(AuthService.IsUnLoggedIn)} to="/login">{ICON.LOGIN}</Link>
                        <Link className={`nav-link active ` + AuthService.ShowIf(AuthService.IsLoggedIn)} to="#" onClick={logout}>{ICON.LOGOUT}</Link>
                    </nav>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;
