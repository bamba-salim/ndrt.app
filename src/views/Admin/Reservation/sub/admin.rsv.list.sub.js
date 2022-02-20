import React, {useEffect, useState} from 'react';
import SubTpl from "../../../../components/_template/sub.tpl";
import ListSingleTpl from "../../../../components/_template/list.single.tpl";
import TripService from "../../../../services/WebService/trip.service";
import AdminRsvSingleListSection from "../section/admin.rsv.single.list.section";

function AdminRsvListSub() {

    const [rsvs, setRSVs] = useState()

    useEffect(() => {
        TripService.fetchAllRsv().then(res => setRSVs(res.rsvs))
    }, [])


    return (
        <SubTpl titreProps={{titre: "Liste des réservations"}}>
            <ListSingleTpl list={rsvs} component={AdminRsvSingleListSection}/>
        </SubTpl>
    );
}

export default AdminRsvListSub;
