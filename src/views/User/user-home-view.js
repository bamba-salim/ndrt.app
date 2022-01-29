import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {ViewTitre} from "../../components/atoms/view-titre";
import BlockCmn from "../../components/_commons/block-cmn";
import UserService from "../../services/SiteAdmin/user.service";
import ViewsTpl from "../../components/_template/views-tpl";
import NavigationTpl from "../../components/_template/navigation.tpl";
import SiteUtils from "../../ressources/utils/site.utils";
import AuthService from "../../services/Routing/auth.service";

function UserHomeView() {
    const {idUser} = useParams()
    const [user, setUser] = useState({});
    useEffect(() => {
        if(!SiteUtils.isNumeric(idUser)) alert("mauvais argument")
        UserService.fetchUser(idUser).then(res => setUser(res.user))
    }, [idUser])
    return (
        <ViewsTpl classname="container" access={AuthService.IsUserOrAdmin(idUser)}>
            {
                user && (
                    <>
                        <ViewTitre titre={`${user.username}`}/>
                        <NavigationTpl>
                            <Link className="nav-link" to={`${idUser}`}>{user.username}</Link>
                            <Link className="nav-link" to={`${idUser}/update`}>Modifier</Link>
                        </NavigationTpl>
                        <BlockCmn classname="border p-3">

                            <Outlet context={user}/>

                        </BlockCmn>
                    </>

                )
            }
        </ViewsTpl>


    );
}

export default UserHomeView;
