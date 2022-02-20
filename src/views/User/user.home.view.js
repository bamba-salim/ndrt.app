import React, {useEffect, useState} from 'react';
import ViewsTpl from "../../components/_template/views.tpl";
import AuthService from "../../services/Routing/auth.service";
import BlockCmn from "../../components/_commons/block.cmn";
import UserService from "../../services/WebService/user.service";
import TripService from "../../services/WebService/trip.service";
import UserSingleListSection from "./section/user.single.list.section";
import ListSingleTpl from "../../components/_template/list.single.tpl";

function UserHomeView() {

    const [user, setUser] = useState(AuthService.User)
    const [reservations, setReservations] = useState([])

    useEffect(() => {
        UserService.fetchUser(user.id).then(res => setUser(res.user))
        TripService.fetchUserRSVs(user.id).then(res => setReservations(res.rsvs))
    }, [])

    return (
        <ViewsTpl titre="Mon Espace" className="container">
            <BlockCmn className="shadow-sm my-3">
                <p>todo: recuper info profile</p>
                {JSON.stringify(user)}
            </BlockCmn>
            <ListSingleTpl titre="Mes Réservations" className="shadow-sm my-3" list={reservations} component={UserSingleListSection}/>
        </ViewsTpl>
    );
}

export default UserHomeView;
