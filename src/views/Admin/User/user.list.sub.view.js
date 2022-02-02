import React, {useEffect, useState} from 'react';
import UserService from "../../../services/SiteAdmin/user.service";
import ListTpl from "../../../components/_template/list.tpl";
import UserList from "./template/user-list";

const UserListSubView = () => {

    const [users, setUsers] = useState();

    useEffect(() => {
        UserService.fetchAllUsers().then(res => {
            setUsers(res.userList)
        })
    }, [])

    return (
        <div>
            <ListTpl component={UserList} list={users}/>
        </div>
    );
};

export default UserListSubView;
