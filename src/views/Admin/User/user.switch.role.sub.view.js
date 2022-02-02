import React, {useEffect, useState} from 'react';
import SubViewTpl from "../../../components/_template/sub.view.tpl";
import {useParams} from "react-router-dom";
import UserService from "../../../services/SiteAdmin/user.service";

const UserSwitchRoleSubView = () => {
    const {idUser} = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        getUSer()
    })

    function switchUserole() {
        UserService.switchUserRole(idUser, !user.isAdmin).then(res => {
            if(res.error) alert(res.error.message)
            if(res.SUCCESS) {
                // todo: getUser()
            }
        })
    }

    function getUSer(){
        UserService.fetchUser(idUser).then(res => setUser(res.user))
    }

    return (
        <SubViewTpl titre="Changer de role">
            <button type="button" className="btn btn-secondary">Annuler</button>
            <button type="button" className="btn btn-primary" onClick={switchUserole}>Changert de role</button>
        </SubViewTpl>
    );
};

export default UserSwitchRoleSubView;
