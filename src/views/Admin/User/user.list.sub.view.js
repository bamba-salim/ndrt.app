import React, {useEffect, useState} from 'react';
import UserService from "../../../services/SiteAdmin/user.service";
import ListTpl from "../../../components/_template/list.tpl";
import UserList from "./template/user-list";
import SubViewTpl from "../../../components/_template/sub.view.tpl";

const UserListSubView = () => {

    const [users, setUsers] = useState();

    useEffect(() => {
        UserService.fetchAllUsers().then(res => setUsers(res.userList))
    }, [])

    return (
        <div>
            <SubViewTpl titre={'Les utilisateurs'}>
                <ListTpl component={UserList} list={users}/>
            </SubViewTpl>
        </div>
    );
};

export default UserListSubView;
