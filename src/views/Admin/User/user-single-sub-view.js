import React from 'react';
import {useOutletContext} from "react-router-dom";
import ViewsTpl from "../../../components/_template/views-tpl";

const UserSingleSubView = () => {

    const user = useOutletContext()

    return (
        <ViewsTpl titre={user.username} {...this.props}>
            {JSON.stringify(user)}
        </ViewsTpl>
    );
};

export default UserSingleSubView;
