import React from 'react';
import {Routes, Route} from "react-router-dom";
import AuthService from "./auth.service";



import AdminUserSingleEditSub from "../../views/Admin/User/sub/admin.user.single.edit.sub";
import LoginHomeView from "../../views/Login/login.home.view";
import AdminHomeView from "../../views/Admin/admin.home.view";
import SiteHomeView from "../../views/Site/site.home.view";

import AdminTripHomeView from "../../views/Admin/Trip/admin.trip.home.view";
import AdminTripSingleEditSub from "../../views/Admin/Trip/sub/admin.trip.single.edit.sub";
import TripListSubView from "../../views/Admin/Trip/sub/admin.trip.list.sub";
import AdminUserHomeView from "../../views/Admin/User/admin.user.home.view";
import AdminUserListSub from "../../views/Admin/User/sub/admin.user.list.sub";
import AdminUserSingleHomeSub from "../../views/Admin/User/sub/admin.user.single.home.sub";
import AdminTripSingleHomeSub from "../../views/Admin/Trip/sub/admin.trip.single.home.sub";
import AdminUserSingleDeleteSub from "../../views/Admin/User/sub/admin.user.single.delete.sub";
import AdminUserSingleSwitchRoleSub from "../../views/Admin/User/sub/admin.user.single.switch.role.sub";
import AdminTripAddSub from "../../views/Admin/Trip/sub/admin.trip.add.sub";
import AdminTripSingleDeleteSub from "../../views/Admin/Trip/sub/admin.trip.single.delete.sub";
import AdminCityGestionSub from "../../views/Admin/Trip/sub/admin.city.gestion.sub";
import UserHomeView from "../../views/User/user.home.view";


export default function RouterService () {
    return (
        <Routes>
            <Route path="/" element={<SiteHomeView />}/>
            <Route path="/login" element={<LoginHomeView access={AuthService.IsUnLoggedIn}/>}/>

            <Route path="/mon-esapce" element={<UserHomeView/>}/>

            {/* admin routes */}
            <Route path="/admin" element={<AdminHomeView access={AuthService.IsAdmin}/>}/>

            <Route path="/gestion-trip" element={<AdminTripHomeView access={AuthService.IsAdmin}/>}>
                <Route path="" element={<TripListSubView/>}/>
                <Route path=":id" element={<AdminTripSingleHomeSub/>}/>
                <Route path=":id/edit" element={<AdminTripSingleEditSub/>}/>
                <Route path=":id/delete" element={<AdminTripSingleDeleteSub/>}/>
                <Route path="add-trip" element={<AdminTripAddSub />}/>
                {/*list cities */}
                <Route path="cities" element={<AdminCityGestionSub/>}/>
            </Route>
            <Route path="/gestion-user" element={<AdminUserHomeView access={AuthService.IsAdmin}/>}>
                <Route path="" element={<AdminUserListSub/>}/>
                <Route path=":idUser" element={<AdminUserSingleHomeSub/>}/>
                <Route path=":idUser/edit" element={<AdminUserSingleEditSub/>}/>
                <Route path=":idUser/delete" element={<AdminUserSingleDeleteSub/>}/>
                <Route path=":idUser/switch-role" element={<AdminUserSingleSwitchRoleSub/>}/>
            </Route>

        </Routes>
    );
}

export const MenuLink = () => {

}
