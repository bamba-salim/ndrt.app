import React, {useEffect} from 'react';
import {ToastTpl} from "../../../components/atoms/toast.tpl";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {FormikControl} from "../../../ressources/utils/forms.utils";
import TripService from "../../../services/SiteAdmin/trip.service";
import {useNavigate} from "react-router-dom";

function TripRsvModal({closeModal, data}) {

    const navigate = useNavigate()
    const user = data.user
    const trip = data.trip

    const validation = Yup.object({
        ticket: Yup.number().min(1).max(trip.reservations.ticketLeft).required()
    })

    const confirmer = values => {

        values.totalPrice = values.ticket * trip.reservations.price

        TripService.addRSV(values).then(res => {
            if (res.ERROR) alert(res.ERROR.message)
            if (res.SUCCESS) {
                closeModal()

                localStorage.setItem('success', res.SUCCESS.description)
                navigate('/mon-esapce')
            }
        })
    }

    return (
        <Formik initialValues={{ticket: 0, user: user.id, trip: trip.id}} onSubmit={confirmer} validationSchema={validation}>
            <Form>
                <div className="modal-header bg-dark text-white rounded-0">
                    <h5 className="modal-title" id="staticBackdropLabel">{trip.name}</h5>
                    <button type="button" className="btn-close text-white" onClick={closeModal}/>
                </div>
                <div className="modal-body rounded-0">
                    {JSON.stringify(trip)}
                </div>
                <div className="modal-footer rounded-0 bg-gold">
                    <FormikControl control='input' type="number" name="ticket" label="Nombre de place"/>
                </div>
                <div className="modal-footer rounded-0">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    <button type="submit" className="btn btn-primary" >envoyer</button>
                </div>
            </Form>

        </Formik>
    );
}

export default TripRsvModal;
