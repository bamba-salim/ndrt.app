import React, {useEffect, useState} from 'react';
import UpdateUserForm from "./forms/update-user-form";
import SubViewTpl from "../../../components/_template/sub.view.tpl";
import {useParams} from "react-router-dom";
import UserService from "../../../services/SiteAdmin/user.service";

const UserUpdateSubView = () => {
    const {idUser} = useParams();
    const [user, setUser] = useState();


    useEffect(() => {
        UserService.fetchUser(idUser).then(res => setUser(res.user))
    }, [idUser])


    return (
        <>
            {user && (
                <SubViewTpl titre={`Modifier ${idUser}`}>
                    <UpdateUserForm user={user}/>
                </SubViewTpl>
            )}

        </>
    );
};

export default UserUpdateSubView;
