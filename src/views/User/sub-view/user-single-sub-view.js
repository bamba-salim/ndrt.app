import React from 'react';
import {useOutletContext} from "react-router-dom";
import SubViewTpl from "../../../components/_template/sub.view.tpl";

const UserSingleSubView = () => {

    const user = useOutletContext()

    return (
        <SubViewTpl titre={user.username}>
            {JSON.stringify(user)}
        </SubViewTpl>
    );
};

export default UserSingleSubView;
