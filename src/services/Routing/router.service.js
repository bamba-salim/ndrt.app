import React from 'react';
import {Routes, Route} from "react-router-dom";
import AuthService from "./auth.service";

import SiteHomeView from "../../views/Site/site.home.view";

import UserHomeView from "../../views/User/user.home.view";


import AdminHomeView from "../../views/Admin/admin.home.view";

import AdminUserHomeView from "../../views/Admin/User/admin.user.home.view";
import AdminUserListSub from "../../views/Admin/User/sub/admin.user.list.sub";

import AdminTripHomeView from "../../views/Admin/Trip/admin.trip.home.view";
import AdminUserSingleHomeSub from "../../views/Admin/User/sub/admin.user.single.home.sub";
import AdminTripListSubView from "../../views/Admin/Trip/sub/admin.trip.list.sub";
import AdminCityGestionSub from "../../views/Admin/Trip/sub/admin.city.gestion.sub";
import AdminTripAddSub from "../../views/Admin/Trip/sub/admin.trip.add.sub";

import AdminRsvHomeView from "../../views/Admin/Reservation/admin.rsv.home.view";
import AdminRsvListSub from "../../views/Admin/Reservation/sub/admin.rsv.list.sub";

import AdminTripSingleEditSub from "../../views/Admin/Trip/sub/admin.trip.single.edit.sub"; // todo: modal ?
import AdminTripSingleHomeSub from "../../views/Admin/Trip/sub/admin.trip.single.home.sub"; // todo: modal ?
import AdminUserSingleEditSub from "../../views/Admin/User/sub/admin.user.single.edit.sub";  // todo: modal ?

import AdminUserSingleDeleteSub from "../../views/Admin/User/sub/admin.user.single.delete.sub"; // todo: modal
import AdminTripSingleDeleteSub from "../../views/Admin/Trip/sub/admin.trip.single.delete.sub"; // todo: modal
import LoginHomeView from "../../views/Login/login.home.view"; {/* // todo: modal */}


export default function RouterService () {
    return (
        <Routes>
            <Route path="/" element={<SiteHomeView />}/>
            <Route path="/login" element={<LoginHomeView access={AuthService.IsUnLoggedIn} />} /> {/* // todo: modal */}

            <Route path="/mon-espace" element={<UserHomeView />} />

            {/* admin routes */}
            <Route path="/admin" element={<AdminHomeView access={AuthService.IsAdmin}/>}/>
            <Route path="/gestion-reservations" element={<AdminRsvHomeView access={AuthService.IsAdmin}/>} >
                <Route path="" element={<AdminRsvListSub />}/>
            </Route>

            <Route path="/gestion-trip" element={<AdminTripHomeView access={AuthService.IsAdmin}/>}>
                <Route path="" element={<AdminTripListSubView />} />
                <Route path=":id" element={<AdminTripSingleHomeSub/>} />
                <Route path=":id/edit" element={<AdminTripSingleEditSub/>} />
                <Route path=":id/delete" element={<AdminTripSingleDeleteSub />} /> {/* // todo: modal */}
                <Route path="add-trip" element={<AdminTripAddSub />} />
                <Route path="cities" element={<AdminCityGestionSub />} />
            </Route>
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
