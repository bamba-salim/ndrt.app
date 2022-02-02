import React, {Component} from 'react';
import {Routes, Route} from "react-router-dom";
import HomeView from "../../views/Site/home-view";


import UserUpdateSubView from "../../views/Admin/User/user-update-sub-view";
import LoginView from "../../views/Login/login-view";
import AuthService from "./auth.service";
import AdminHomeView from "../../views/Admin/admin.home.view";
import GestionTripHomeView from "../../views/Admin/Trip/gestion.trip.home.view";
import EditTripSubView from "../../views/Admin/Trip/edit.trip.sub.view";
import TripListSubView from "../../views/Admin/Trip/trip.list.sub.view";
import GestionUserHomeView from "../../views/Admin/User/gestion.user.home.view";
import UserListSubView from "../../views/Admin/User/user.list.sub.view";
import GestionSingleUserSubView from "../../views/Admin/User/gestion.single.user.sub.view";
import GestionSingleTripSubView from "../../views/Admin/Trip/gestion.single.trip.sub.view";
import UserDeleteSubView from "../../views/Admin/User/user.delete.sub.view";
import UserSwitchRoleSubView from "../../views/Admin/User/user.switch.role.sub.view";
import AddTripSubView from "../../views/Admin/Trip/add.trip.sub.view";


export default class RouterService extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/login" element={<LoginView access={AuthService.IsUnLoggedIn}/>}/>

                {/* admin routes */}
                <Route path="/admin" element={<AdminHomeView access={AuthService.IsAdmin}/>}/>

                <Route path="/gestion-trip" element={<GestionTripHomeView/>}>
                    <Route path="" element={<TripListSubView/>}/>
                    <Route path=":id" element={<GestionSingleTripSubView/>}/>
                    <Route path=":id/edit" element={<EditTripSubView/>}/>
                    {/* todo: ajouter trip et city */}
                    <Route path="add" element={<AddTripSubView />}/>
                </Route>
                <Route path="/gestion-user" element={<GestionUserHomeView access={AuthService.IsAdmin}/>}>
                    <Route path="" element={<UserListSubView/>}/>
                    <Route path=":idUser" element={<GestionSingleUserSubView/>}/>
                    <Route path=":idUser/edit" element={<UserUpdateSubView/>}/>
                    <Route path=":idUser/delete" element={<UserDeleteSubView/>}/>
                    <Route path=":idUser/switch-role" element={<UserSwitchRoleSubView/>}/>
                </Route>

            </Routes>
        );
    }
}

export const MenuLink = () => {

}
