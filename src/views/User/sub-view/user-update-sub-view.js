import React, {useEffect} from 'react';
import {useOutletContext} from "react-router-dom";
import UpdateUserForm from "../forms/update-user-form";
import SubViewTpl from "../../../components/_template/sub.view.tpl";

const UserUpdateSubView = () => {
    const user = useOutletContext();





    return (
        <>

            <SubViewTpl titre={`Modifier ${user.username}`}>
                <UpdateUserForm user={user}/>
            </SubViewTpl>
        </>
    );
};

export default UserUpdateSubView;
