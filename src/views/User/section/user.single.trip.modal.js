import React, {useEffect, useState} from 'react';
import TripService from "../../../services/WebService/trip.service";

function UserSingleTripModal({data , closeModal}) {

    const [rsv, setRSV] = useState({})

    useEffect(() => {
        let ac = new AbortController()
        TripService.fetchRSV(data.id).then(res => setRSV(res.rsv)).finally(() => ac.abort())
    }, [data])

    return (
        <div>
            <div className="modal-header bg-dark text-white rounded-0">
                <h5 className="modal-title" id="staticBackdropLabel">Réservations #{rsv.id}</h5>
                <button type="button" className="btn-close text-white" onClick={closeModal}/>
            </div>
            <div className="modal-body rounded-0">
                {JSON.stringify(rsv)}
            </div>

        </div>
    );
}

export default UserSingleTripModal;
