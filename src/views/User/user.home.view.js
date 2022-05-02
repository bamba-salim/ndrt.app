import React, {useEffect, useState} from 'react';
import ViewsTpl from "../../components/_template/views.tpl";
import AuthService from "../../services/Admin/auth.service";
import BlockCmn from "../../components/_commons/block.cmn";
import UserService from "../../services/WebService/user.service";


function UserHomeView() {

    const [user, setUser] = useState(AuthService.User)

    useEffect(() => {
        let ac = new AbortController()
        UserService.fetchUser(user.id).then(res => setUser(res.user)).finally(() => ac.abort())
    }, [user.id])

    return (
        <ViewsTpl titre="Mon Espace" className="container">
            <BlockCmn className="shadow-sm my-3">
                <p>todo: recuper info profile</p>
                {JSON.stringify(user)}
            </BlockCmn>
        </ViewsTpl>
    );
}

export default UserHomeView;
