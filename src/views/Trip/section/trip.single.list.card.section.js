import React, {useEffect, useState} from 'react';
import SiteUtils from "../../../ressources/utils/site.utils";
import DateUtils from "../../../ressources/utils/date.utils";
import {ToastTpl} from "../../../components/atoms/toast.tpl";
import AuthService from "../../../services/Routing/auth.service";
import TripRsvModal from "../template/trip.rsv.modal";
import ModalTpl from "../../../components/_template/modal.tpl";

function TripSingleListCardSection({trip}) {

    const [isNext, setIsNext] = useState(true)
    const [user, setUser] = useState(AuthService.User)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        setIsNext(DateUtils.now() < DateUtils.formatedYYYYLLDD(trip.dateStart))
    }, [trip])

    const _reserve = () => {
        if (!AuthService.IsLoggedIn) {
            ToastTpl.ERROR("Veuillez vous connectez pour reserver un séjours !")
        } else {
            setOpenModal(true)
        }
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <>
            <div className="card-header bg-dark text-gold row w-100 mx-auto rounded-0">
                <h3 className="d-block col-8">{trip.name}</h3>
                <em className="d-block col text-end">{trip.reservations.price} €</em>
            </div>
            <div className="card-body">
                <p className="card-text fst-italic text-center">Du {DateUtils.formatedDDMMYYYY(trip.dateStart)} au {DateUtils.formatedDDMMYYYY(trip.dateEnd)}</p>
                <p className="card-text text-center fst-italic">{SiteUtils.join_cities(trip.cities)}</p>

                {trip.description && (<p className="card-text">{trip.description}</p>)}
                {/*{JSON.stringify(trip)}*/}

            </div>
            <div className="card-footer d-flex justify-content-center bg-dark rounded-0 align-content-center">
                {(trip.reservations.ticketLeft > 0 && isNext) && (<button className="btn btn-gold" onClick={() => _reserve()}>Réserver</button>)}
                {(trip.reservations.ticketLeft === 0 && isNext) && (<h3 className="text-danger disabled">!! Sold OUT !!</h3>)}
                {!isNext && (<p className="text-white d-block">TOO LATE</p>)}
            </div>

            <ModalTpl isOpen={openModal} component={TripRsvModal} size="lg" closeModal={closeModal} data={{trip: trip, user: user}} />
        </>
    );
}

export default TripSingleListCardSection;
