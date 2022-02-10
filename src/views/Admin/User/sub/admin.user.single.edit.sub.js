import React, {useEffect, useState} from 'react';
import AdminUserEditForm from "../_forms/admin.user.edit.form";
import SubTpl from "../../../../components/_template/sub.tpl";
import {useParams} from "react-router-dom";
import UserService from "../../../../services/SiteAdmin/user.service";

function AdminUserSingleEditSub () {
    const {idUser} = useParams();
    const [user, setUser] = useState();


    useEffect(() => {
        UserService.fetchUser(idUser).then(res => setUser(res.user))
    }, [idUser])


    return (
        <>
            {user && (
                <SubTpl titreProps={{titre:`Modifier ${idUser}`}}>
                    <AdminUserEditForm user={user}/>
                </SubTpl>
            )}

        </>
    );
};

export default AdminUserSingleEditSub;
