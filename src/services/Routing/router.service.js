import React from 'react';
import {Routes, Route} from "react-router-dom";
import AuthService from "../Admin/auth.service";

import SiteHomeView from "../../views/Site/site.home.view";

import UserHomeView from "../../views/User/user.home.view";


import AdminHomeView from "../../views/Admin/admin.home.view";

import AdminUserHomeView from "../../views/Admin/User/admin.user.home.view";
import AdminUserListSub from "../../views/Admin/User/sub/admin.user.list.sub";

import AdminUserSingleHomeSub from "../../views/Admin/User/sub/admin.user.single.home.sub";


import AdminUserSingleEditSub from "../../views/Admin/User/sub/admin.user.single.edit.sub";  // todo: modal ?

import AdminUserSingleDeleteSub from "../../views/Admin/User/sub/admin.user.single.delete.sub"; // todo: modal

import LoginHomeView from "../../views/Login/login.home.view";
import CategoryHomeView from "../../views/Product/category.home.view";
import ProductListSub from "../../views/Product/sub/product.list.sub";
import CategoryListSub from "../../views/Product/sub/category.list.sub";
import ProductHomeView from "../../views/Product/product.home.view"; {/* // todo: modal */}


export default function RouterService () {
    return (
        <Routes id="app">s
            <Route path="/" element={<SiteHomeView />}/>
            <Route path="/login" element={<LoginHomeView access={AuthService.IsUnLoggedIn} />} /> {/* // todo: modal */}

            <Route path="/mon-espace" element={<UserHomeView />} />
            <Route path="/category" element={<CategoryHomeView />} >
                <Route path="" element={<CategoryListSub/>} />
                <Route path="all" element={<ProductListSub/>} />
                <Route path=":idCategory" element={<ProductListSub />} />
            </Route>
            <Route path="/product/:idProduct" element={<ProductHomeView/> }/>


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
