import React from 'react';
import ICON from "../../../../ressources/utils/icon.utils";
import DateUtils from "../../../../ressources/utils/date.utils";
import {Link} from "react-router-dom";

const TripList = ({list}) => {
    return (
        <div>
            {JSON.stringify(list)}
            <div className="row fw-bolder ">
                <div className="col">username</div>
                <div className="col">email</div>
                <div className="col">firstname</div>
                <div className="col">lastname</div>
                <div className="col">isAdmin</div>
                <div className="col">createDate</div>
                <div className="col">updateDate</div>
                <div className="col text-end">Action</div>
            </div>
            <hr className="fw-bolder my-0"/>
            {list && list.map((trip, index) => (
                <div className="row" key={index}>
                    <div className="col"># {trip.id}</div>
                    <div className="col">{trip.name}</div>
                    <div className="col">{DateUtils.formated(trip.dateStart)}</div>
                    <div className="col">{DateUtils.formated(trip.dateEnd)}</div>
                    <div className="col">{trip.cities.length}</div>
                    <div className="col">{trip.reservations.reservationTotal }</div>
                    {/*<div className="col">{trip.reservations}</div>*/}
                    {/*<div className="col">{trip.reservations}</div>*/}
                    <div className="col text-end ">
                        <Link className="mx-1" to={`${trip.id}`}><span className="text-black">{ICON.USER}</span></Link>
                        <Link className="mx-1" to={`${trip.id}/edit`}><span className="text-black">{ICON.EDIT}</span></Link>
                        <Link className="mx-1" to={`${trip.id}/delete`}><span className="text-black">{ICON.DELETE}</span></Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TripList;
