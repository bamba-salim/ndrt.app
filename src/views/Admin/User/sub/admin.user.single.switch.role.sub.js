import React, {useEffect, useState} from 'react';
import SubTpl from "../../../../components/_template/sub.tpl";
import {useParams} from "react-router-dom";
import UserService from "../../../../services/WebService/user.service";

function AdminUserSingleSwitchRoleSub() {
    const {idUser} = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        getUSer()
    })

    const switchUserole = () => {
        UserService.switchUserRole(idUser, !user.isAdmin).then(res => {
            if (res.ERROR) alert(res.ERROR.message)
            if (res.SUCCESS) {
                // todo: getUser()
            }
        })
    }

    const getUSer = () => {
        UserService.fetchUser(idUser).then(res => setUser(res.user))
    }

    return (
        <SubTpl titreProps={{titre:"Changer de role"}}>
            <button type="button" className="btn btn-secondary">Annuler</button>
            <button type="button" className="btn btn-primary" onClick={switchUserole}>Changert de role</button>
        </SubTpl>
    );
};

export default AdminUserSingleSwitchRoleSub;
