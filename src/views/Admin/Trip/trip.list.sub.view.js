import React, {useEffect, useState} from 'react';
import NOTIFY from "../../../components/atoms/toast.tpl";
import TripService from "../../../services/SiteAdmin/trip.service";
import ListTpl from "../../../components/_template/list.tpl";
import TripList from "./template/trip.list";

const TripListSubView = () => {

    const[trips, setTriipList] = useState();

    const[pastTrips, setPassTrips] = useState([]);
    const[currentTrips, setCurrentTrips] = useState([])
    const[nextTrips, setNextTrips] = useState([])

    useEffect(() => {
        TripService.fetchAllTrip().then(res => setTriipList(res.tripList))
        NOTIFY.SUCCESS();

    }, [])
    return (
        <div>
            list de tous les tripd
            <ListTpl component={TripList} list={trips} />
        </div>
    );
};

export default TripListSubView;
