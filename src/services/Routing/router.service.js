import React, {Component} from 'react';
import {Routes, Route} from "react-router-dom";
import HomeView from "../../views/Site/home-view";
import UsersView from "../../views/User/users-view";
import UserHomeView from "../../views/User/user-home-view";
import UserSingleSubView from "../../views/User/sub-view/user-single-sub-view";
import UserUpdateSubView from "../../views/User/sub-view/user-update-sub-view";
import LoginView from "../../views/Login/login-view";
import AuthService, {IsAdmin, IsUnLoggedIn} from "./auth.service";

export default class RouterService extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/users" element={<UsersView />}/>
                <Route path="/user" element={<UserHomeView/>}>
                    <Route path=":idUser" element={<UserSingleSubView/>}/>
                    <Route path=":idUser/update" element={<UserUpdateSubView/>}/>
                </Route>
                <Route path="/login" element={<LoginView />}/>


            </Routes>
        );
    }
}

export const MenuLink = () => {

}
