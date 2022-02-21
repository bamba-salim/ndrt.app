import React, {useEffect, useState} from 'react';
import TripService from "../../../../services/WebService/trip.service";
import ListTpl from "../../../../components/_template/list.tpl";
import AdminCityList from "../section/admin.city.list";
import SubTpl from "../../../../components/_template/sub.tpl";
import NavTpl from "../../../../components/_template/nav.tpl";
import ICON from "../../../../ressources/utils/icon.utils";
import BlockCmn from "../../../../components/_commons/block.cmn";
import AdminCityAddForm from "../_forms/admin.city.add.form";

function AdminCityGestionSub() {

    const [cities, setCities] = useState([]);
    const [addCity, setAddCity] = useState() // todo: ???

    const switchAddCityBtn = () => addCity ? setAddCity(false) : setAddCity(true)

    const endLink = () => {
        return (<>
            <button className="nav-link btn" onClick={switchAddCityBtn}>{ICON.ADD} Ville</button>
        </>)
    }

    useEffect(() => {
        let ac = new AbortController()
        TripService.fetchAllCities().then(res => setCities(res.citiesList)).finally(() => ac.abort())
    }, [])
    return (
        <SubTpl titreProps={{titre: 'Les villes'}}>
            <NavTpl end={endLink()}/>
            {
                addCity && (<>
                    < BlockCmn className="my-3 p-3 border">
                        <AdminCityAddForm/>
                        <button onClick={switchAddCityBtn}>Annuler</button>
                    </BlockCmn>
                </>)
            }

            <ListTpl list={cities} setList={setCities} component={AdminCityList} item_per_page={9} />
        </SubTpl>
    );
}

export default AdminCityGestionSub;
