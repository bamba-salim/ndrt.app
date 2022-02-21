import React, {useEffect, useState} from 'react';
import UserService from "../../../../services/WebService/user.service";
import AdminUserSinlgeListSection from "../section/admin.user.sinlge.list.section";
import SubTpl from "../../../../components/_template/sub.tpl";
import ListSingleTpl from "../../../../components/_template/list.single.tpl";

function AdminUserListSub () {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let ac = new AbortController()
        UserService.fetchAllUsers().then(res => setUsers(res.userList)).finally(() => ac.abort())
    }, [])

    return (
        <div>
            <SubTpl titreProps={{titre: 'Les utilisateurs'}}>
                <ListSingleTpl component={AdminUserSinlgeListSection} list={users}/>
            </SubTpl>
        </div>
    );
};

export default AdminUserListSub;
