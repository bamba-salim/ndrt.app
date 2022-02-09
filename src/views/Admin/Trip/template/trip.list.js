import React from 'react';
import ICON from "../../../../ressources/utils/icon.utils";
import DateUtils from "../../../../ressources/utils/date.utils";
import {Link, useNavigate} from "react-router-dom";

const TripList = ({list}) => {
    const navigate = useNavigate();

    function join_cities(cities) {
        var finale = [];
        cities.map(city => finale.push(city.name))
        return finale.join(', ')
    }

    return (
        <>
            {list && list.map((trip, index) => (
                    <div className="row row-cols-1 row-cols-md-2 border mb-3 mx-auto p-3 justify-content-between" key={index}>
                        <div className="col-12 col-md-11 m-0 row row-cols-2 mb-3 mb-md-0">
                            <div className="col mb-1 w-100"># {trip.id} - {trip.name}</div>
                            <div className="col mb-1">Début: {DateUtils.formatedDDMMYYYY(trip.dateStart)}</div>
                            <div className="col mb-1">Fin: {DateUtils.formatedDDMMYYYY(trip.dateEnd)}</div>
                            <div className="col mb-1 w-100 py-1">Etapes:
                                <div className="border w-100 p-1">
                                    <em >{join_cities(trip.cities)}</em>
                                </div>
                            </div>
                            <div className="col mb-1">Prix: {trip.reservations.price}</div>
                            <div className="col mb-1">Réservations: {trip.reservations.reservationTotal} </div>
                            <div className="col mb-1 w-100">
                                Ticket:
                                <div className="row border w-100 mx-auto p-1">
                                    <div className="col-4">Total: {trip.reservations.ticketTotal}</div>
                                    <div className="col-4">Taken: {trip.reservations.ticketTaken}</div>
                                    <div className="col-4">Left: {trip.reservations.ticketLeft}</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-1 h-100 mb-3 mb-md-0">
                            <div className="btn-group p-0 d-flex flex-row flex-md-column ">
                                <button className="btn btn-outline-dark" onClick={()=> navigate(`${trip.id}`)}>{ICON.USER}</button>
                                <button className="btn btn-outline-dark" onClick={()=> navigate(`${trip.id}/edit`)}>{ICON.EDIT}</button>
                                <button className="btn btn-outline-dark" onClick={()=> navigate(`${trip.id}/edit`)}>{ICON.DELETE}</button>
                            </div>

                        </div>

                    </div>

                    //
                    // <div className="col">{DateUtils.formated(trip.dateStart)}</div>
                    // <div className="col">{DateUtils.formated(trip.dateEnd)}</div>
                    // <div className="col">{trip.cities.length}</div>
                    // <div className="col">{trip.reservations.reservationTotal }</div>
                    // {/*<div className="col">{trip.reservations}</div>*/}
                    // {/*<div className="col">{trip.reservations}</div>*/}
                    // <div className="col text-end ">
                    //
                    //
                    // </div>
            ))}
        </>
    );
};

export default TripList;
