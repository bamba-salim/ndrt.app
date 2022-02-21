import React, {useEffect, useState} from 'react';
import AdminCityEditForm from "../_forms/admin.city.edit.form";
import TripService from "../../../../services/WebService/trip.service";
import {ToastTpl} from "../../../../components/atoms/toast.tpl";

function AdminCityList({list, setList}) {
    const [isEdit, setIsEdit] = useState(false);
    const [isDel, setIsDel] = useState(false);
    const [countries, setCountries] = useState([]);
    const switchShowEdit = (id) => {
        setIsDel(false)
        isEdit === id ? setIsEdit(false) : setIsEdit(id)
    }
    const switchShowDel = (id) => {
        setIsEdit(false)
        isDel === id ? setIsDel(false) : setIsDel(id)
    }
    useEffect(() => {
        let ac = new AbortController()
        TripService.fetchAllCountries().then(res => setCountries(res.countriesList)).finally(() => ac.abort())
    }, [])

    function _delete(id) {
        TripService.deleteCity(id).then(res => {
            if(res.ERROR) ToastTpl.ERROR(res.ERROR.description)
            if(res.SUCCESS){
                ToastTpl.SUCCESS(res.SUCCESS.description)
                TripService.fetchAllCities().then(res => setList(res.citiesList))
            }
        })

    }

    return (<div className="row row-cols-2 row-cols-md-3 g-4">

        {list && list.map((city, index) => (
            <div key={index} className="col">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title my-0">#{city.id} - {city.name} | <em>{city.country}</em></h5>
                    </div>
                    {
                        isEdit === city.id && (
                            <div className="card-body">
                                <AdminCityEditForm city={city} isEdit={isEdit} countries={countries}/>
                            </div>
                        )
                    }
                    {
                        (isDel === city.id && city.usedTrips === 0  ) && (
                            <div className="card-body">
                                <p className="text-danger text-center">Êtes-vous sur de vouloir suprimer cette ville ?</p>
                                <div className="d-flex justify-content-evenly w-100">
                                    <button className="btn border bg-dark text-white" onClick={() => setIsDel(false)} >Non</button>
                                    <button className="btn btn-danger" onClick={() => _delete(city.id)} >oui</button>
                                </div>
                            </div>
                        )
                    }

                    <div className="card-footer bg-dark border-0 btn-group w-100 p-0">
                        <button className="btn btn-outline-primary" onClick={() => switchShowEdit(city.id)}>edit</button>
                        {city.usedTrips === 0 && (<button className="btn btn-outline-danger" onClick={() => switchShowDel(city.id)}>delete</button>)}
                    </div>
                </div>
            </div>
        ))}
    </div>);
}

export default AdminCityList;
