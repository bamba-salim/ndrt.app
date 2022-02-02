import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import AddCityTripForm from "./add.city.trip.form";
import TripService from "../../../../services/SiteAdmin/trip.service";
import {ShowIf} from "../../../../services/Routing/auth.service";
import DateUtils from "../../../../ressources/utils/date.utils";

const AddTripForm = () => {

    const onAddCity = (citys) => {
        formik.values.cities = citys
    }

    const initialValues = {
        name: '',
        tickets: '',
        price: '',
        dateDebut: '',
        dateFin: '',
        cities: []
    }
    const onSubmit = values => {

        TripService.createTrip(values).then(res => console.log(res))


    }


    const validationSchema = Yup.object({
        name: Yup.string().required('requis'),
        tickets: Yup.number().min(1, "requis").required('requis'),
        price: Yup.number().min(0.5).required('requis'),
        dateDebut: Yup.date().required(),
        dateFin: Yup.date().required(),
        cities: Yup.array().min(1, "Veuillez ajouter au moins 1 étape !").required()
    })
    const formik = useFormik({
        initialValues, onSubmit, validationSchema
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className={`col mb-3 w-100 ${(formik.errors.name && formik.touched.name) && 'has-error'}`}>
                        <label htmlFor="name" className="form-label">Titre du séjour *</label>
                        <input type="text" className="form-control" id="name" name="name"
                               placeholder="Titre du séjour" onChange={formik.handleChange}
                               value={formik.values.name} onBlur={formik.handleBlur}/>
                        <p>{(formik.errors.name && formik.touched.name) && formik.errors.name}</p>
                    </div>
                    <div className={`col mb-3 ${(formik.errors.tickets && formik.touched.tickets) && 'has-error'}`}>
                        <label htmlFor="tickets" className="form-label">Place disponible *</label>
                        <input type="number" className="form-control" id="tickets" name="tickets"
                               placeholder="Place disponible"
                               onChange={formik.handleChange} value={formik.values.tickets} onBlur={formik.handleBlur}/>
                        <p>{(formik.errors.tickets && formik.touched.tickets) && formik.errors.tickets}</p>
                    </div>
                    <div className={`col mb-3 ${(formik.errors.price && formik.touched.price) && 'has-error'}`}>
                        <label htmlFor="price" className="form-label">Prix *</label>
                        <input type="text" className="form-control" id="price" name="price"
                               placeholder="Prix"
                               onChange={formik.handleChange} value={formik.values.price}
                               onBlur={formik.handleBlur}/>
                        <p>{(formik.errors.price && formik.touched.price) && formik.errors.price}</p>
                    </div>
                    <div className={`col mb-3 ${(formik.errors.dateDebut && formik.touched.dateDebut) && 'has-error'}`}>
                        <label htmlFor="dateDebut" className="form-label">Début du circuit</label>
                        <input type="date" className="form-control" id="dateDebut" name="dateDebut"
                               onChange={formik.handleChange} value={formik.values.dateDebut}
                               min={DateUtils.now()}
                               max={formik.values.dateFin}
                               onBlur={formik.handleBlur}/>
                        <p>{(formik.errors.dateDebut && formik.touched.dateDebut) && formik.errors.dateDebut}</p>
                    </div>
                    <div className={`col mb-3 ${(formik.errors.dateFin && formik.touched.dateFin) && 'has-error'}`}>
                        <label htmlFor="dateFin" className="form-label">Fin du circuit</label>
                        <input type="date" className="form-control" id="dateFin" name="dateFin"
                               min={formik.values.dateDebut}
                               onChange={formik.handleChange} value={formik.values.dateFin}
                               onBlur={formik.handleBlur}/>
                        <p>{(formik.errors.dateFin && formik.touched.dateFin) && formik.errors.dateFin}</p>
                    </div>
                    <div className="col mb-3 w-100">
                        {formik.values.dateFin && formik.values.dateDebut && (
                            <AddCityTripForm date={{debut: formik.values.dateDebut, fin: formik.values.dateFin}}
                                             setCities={onAddCity} citiesErrors={formik.errors.cities}/>)}
                    </div>
                    <div className="mb-3 w-100 nav justify-content-end">
                        <input hidden type="text" name="cities" id="cities" defaultValue={formik.values.cities}/>

                    </div>
                </div>

                <div className="mb-3 w-100 nav justify-content-end">
                    <button type="submit" className="btn btn-gold">envoyer</button>
                </div>
            </form>
        </>
    );
};

export default AddTripForm;
