import React, {useEffect, useState} from 'react';
import NOTIFY from "../../../../components/atoms/toast.tpl";
import TripService from "../../../../services/SiteAdmin/trip.service";
import ListTpl from "../../../../components/_template/list.tpl";
import AdminTripsList from "../_template/admin.trips.list";
import SubTpl from "../../../../components/_template/sub.tpl";

function TripListSubView() {

    const [trips, setTrips] = useState([]);

    const [pastTrips, setPassTrips] = useState([]);
    const [currentTrips, setCurrentTrips] = useState([])
    const [nextTrips, setNextTrips] = useState([])
    const [currentBtn, setCurrentBtn] = useState('btn-gold');
    const [pastBtn, setPastBtn] = useState('');
    const [nextBtn, setNextBtn] = useState('');

    useEffect(() => {
        TripService.fetchAllTrip().then(res => {
            setPassTrips(res.trips.past);
            setCurrentTrips(res.trips.current);
            setNextTrips(res.trips.next);
            setTrips(res.trips.current)
        })
        NOTIFY.SUCCESS();

    }, [])


    const swithTripList = (list) => {
        switch (list) {
            case 'current':
                setTrips(currentTrips)
                setCurrentBtn('btn-gold')
                setNextBtn('btn-outline-secondary')
                setPastBtn('btn-outline-secondary')
                break;
            case 'next':
                setTrips(nextTrips)
                setCurrentBtn('btn-outline-secondary')
                setNextBtn('btn-gold')
                setPastBtn('btn-outline-secondary')
                break;
            case 'past':
            default:
                setTrips(pastTrips)
                setCurrentBtn('btn-outline-secondary')
                setNextBtn('btn-outline-secondary')
                setPastBtn('btn-gold')

        }
    }
    return (
        <SubTpl titreProps={{titre: "Les séjours"}}>
            <div className="w-100 btn-group">
                <button className={`btn ${currentBtn}`} onClick={() => swithTripList('current')}>Current</button>
                <button className={`btn ${nextBtn}`} onClick={() => swithTripList("next")}>next</button>
                <button className={`btn ${pastBtn}`} onClick={() => swithTripList('past')}>past</button>
            </div>
            <ListTpl component={AdminTripsList} list={trips} item_per_page={3}/>
        </SubTpl>
    );

}

export default TripListSubView;
