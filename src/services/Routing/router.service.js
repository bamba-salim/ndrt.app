import React from 'react';
import {Routes, Route} from "react-router-dom";
import AuthService from "../auth.service";

import SiteHomeView from "../../views/Site/site.home.view";

import UserHomeView from "../../views/User/user.home.view";


import AdminHomeView from "../../views/Admin/admin.home.view";

import AdminUserHomeView from "../../views/Admin/User/admin.user.home.view";
import AdminUserListSub from "../../views/Admin/User/sub/admin.user.list.sub";

import AdminUserSingleHomeSub from "../../views/Admin/User/sub/admin.user.single.home.sub";


import AdminUserSingleEditSub from "../../views/Admin/User/sub/admin.user.single.edit.sub";  // todo: modal ?

import AdminUserSingleDeleteSub from "../../views/Admin/User/sub/admin.user.single.delete.sub"; // todo: modal

import LoginHomeView from "../../views/Login/login.home.view"; {/* // todo: modal */}


export default function RouterService () {
    return (
        <Routes id="app">s
            <Route path="/" element={<SiteHomeView />}/>
            <Route path="/login" element={<LoginHomeView access={AuthService.IsUnLoggedIn} />} /> {/* // todo: modal */}

            <Route path="/mon-espace" element={<UserHomeView />} />

            {/* admin routes */}
            <Route path="/admin" element={<AdminHomeView access={AuthService.IsAdmin}/>}/>



            <Route path="/gestion-user" element={<AdminUserHomeView access={AuthService.IsAdmin}/>}>
                <Route path="" element={<AdminUserListSub />} />
                <Route path=":idUser" element={<AdminUserSingleHomeSub />} />
                <Route path=":idUser/edit" element={<AdminUserSingleEditSub />} />
                <Route path=":idUser/delete" element={<AdminUserSingleDeleteSub />} /> {/* // todo: modal */}
            </Route>

        </Routes>
    );
}

export const MenuLink = () => {

}
