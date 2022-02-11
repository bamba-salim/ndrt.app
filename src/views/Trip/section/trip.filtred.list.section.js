import React, {useEffect, useState} from 'react';
import BlockCmn from "../../../components/_commons/block.cmn";
import ListTpl from "../../../components/_template/list.tpl";
import TripService from "../../../services/SiteAdmin/trip.service";
import TripFiltredList from "../template/trip.filtred.list";
import {TripFilterBean} from "../../../ressources/bean/trip.filter.bean";
import DateUtils from "../../../ressources/utils/date.utils";

function TripFiltredListSection(props) {
    const [filtredTrips, setFiltredTrips] = useState([]);
    const [filters, setFilters] = useState(new TripFilterBean());
    useEffect(() => {
        filters.cities = [2];

        // todo get filtred List
        TripService.fetchFiltredTrips(filters).then(res => {
            console.log(res)
            setFiltredTrips(res.list)
        })

    }, [])

    return (

        <BlockCmn className="row my-3">
            <div className="col-12 col-md-3 border">
                {/* filters nav */}
            </div>
            <div className="col border">
                <ListTpl list={filtredTrips} component={TripFiltredList}
                         emptyMessage={"Aucun séjours n'a été trouvé !"}/>
            </div>
        </BlockCmn>
    );
}

export default TripFiltredListSection;
