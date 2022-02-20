import React, {useEffect, useState} from 'react';
import UserService from "../../../../services/WebService/user.service";
import ListTpl from "../../../../components/_template/list.tpl";
import AdminUsersList from "../_template/admin.users.list";
import SubTpl from "../../../../components/_template/sub.tpl";

function AdminUserListSub () {

    const [users, setUsers] = useState();

    useEffect(() => {
        UserService.fetchAllUsers().then(res => setUsers(res.userList))
    }, [])

    return (
        <div>
            <SubTpl titreProps={{titre: 'Les utilisateurs'}}>
                <ListTpl component={AdminUsersList} list={users}/>
            </SubTpl>
        </div>
    );
};

export default AdminUserListSub;
