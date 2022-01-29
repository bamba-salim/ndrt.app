import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import ICON from "../../ressources/utils/icon.utils";
import AuthService, {
    IsAdmin,
    IsLoggedIn,
    IsUnLoggedIn,
    ShowIf
} from "../../services/Routing/auth.service";


const NavBar = () => {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('user');
        navigate('/')
        window.location.reload()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">


                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">Home</Link>
                        <Link className={"nav-link active " + ShowIf(AuthService.IsAdmin)} to="/users">Les Utilisateurs</Link>

                    </div>

                    <nav className="col nav justify-content-end text-end">
                        <Link className={`nav-link active ` + ShowIf(IsUnLoggedIn) } to="/login">{ICON.LOGIN}</Link>
                        <Link to="#" className={`btn nav-link active ` + ShowIf(IsLoggedIn)} onClick={() => logout()}>{ICON.LOGOUT}</Link>


                    </nav>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;
