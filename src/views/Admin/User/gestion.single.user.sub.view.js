import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import NavigationTpl from "../../../components/_template/navigation.tpl";
import SubViewTpl from "../../../components/_template/sub.view.tpl";
import UserService from "../../../services/SiteAdmin/user.service";
import AuthService, {ShowIf} from "../../../services/Routing/auth.service";
import ICON from "../../../ressources/utils/icon.utils";

const GestionSingleUserSubView = () => {
    const {idUser} = useParams();
    const [user,setUser] = useState();

    useEffect(() => {

        UserService.fetchUser(idUser).then(res => setUser(res.user))

    }, [idUser])

    return (
        <>
            {user && (

                <SubViewTpl  titre={user.username}>

                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col w-100"><p><span className={ShowIf(user.isAdmin)}>{ICON.ADMIN} </span>{user.email}</p></div>
                        <div className={"col " + ShowIf(user.firstname)}><p >{user.firstname || ' - '}</p></div>
                        <div className="col"><p>{user.lastname}</p></div>
                        <div className="col"><p>{user.createDate}</p></div>
                        <div className="col"><p>{user.updateDate}</p></div>
                    </div>
                    <div className="nav justify-content-end">
                        <Link to={'switch-role'} className={`btn btn-dark ${ShowIf(AuthService.IsAdmin)}`}>{ICON.ADMIN} Changer de role</Link>
                        <Link to={'edit'} className="btn btn-primary">{ICON.EDIT} Modifier</Link>
                    </div>
                </SubViewTpl>
            )}
        </>


    );
};

export default GestionSingleUserSubView;
