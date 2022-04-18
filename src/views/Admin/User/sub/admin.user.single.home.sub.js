import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import SubTpl from "../../../../components/_template/sub.tpl";
import UserService from "../../../../services/WebService/user.service";
import AuthService from "../../../../services/Routing/auth.service";
import ICON from "../../../../ressources/utils/icon.utils";

function AdminUserSingleHomeSub(){
    const {idUser} = useParams();
    const [user,setUser] = useState({});

    useEffect(() => {
let ac = new AbortController()
        UserService.fetchUser(idUser).then(res => setUser(res.user)).finally(() => ac.abort())

    }, [idUser])

    return (
        <>
            {user && (

                <SubTpl titreProps={{titre : user.username}}>

                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col w-100"><p><span className={AuthService.ShowIf(user.isAdmin)}>{ICON.ADMIN} </span>{user.email}</p></div>
                        <div className={"col " + AuthService.ShowIf(user.firstname)}><p >{user.firstname || ' - '}</p></div>
                        <div className="col"><p>{user.lastname}</p></div>
                        <div className="col"><p>{user.createDate}</p></div>
                        <div className="col"><p>{user.updateDate}</p></div>
                    </div>
                    <div className="nav justify-content-end">
                        <Link to={'switch-role'} className={`btn btn-dark ${AuthService.ShowIf(AuthService.IsAdmin)}`}>{ICON.ADMIN} Changer de role</Link>
                        <Link to={'edit'} className="btn btn-primary">{ICON.EDIT} Modifier</Link>
                    </div>
                </SubTpl>
            )}
        </>


    );
};

export default AdminUserSingleHomeSub;
