import React from 'react';
import {Form, useFormik, Formik} from "formik";
import * as Yup from "yup";
import AddCityTripForm from "./add.city.trip.form";
import TripService from "../../../../services/SiteAdmin/trip.service";
import DateUtils from "../../../../ressources/utils/date.utils";
import FormsUtils, {FormikControl} from "../../../../ressources/utils/forms.utils";
import {useNavigate} from "react-router-dom";

const AddTripForm = () => {
    const navigate = useNavigate();
    const onAddCity = (citys) => {
        formik.values.cities = citys
    }

    const initialValues = {
        name: '',
        tickets: '',
        price: '',
        description: '',
        dateDebut: '',
        dateFin: '',
        cities: [],
        image: ''
    }
    const onSubmit = values => {
        var data = new FormData();
        // data.append("data",values)
        data.append("file",values.image)
        // data.file = values.image
        // data.Data = values

        // console.log(data)

        console.group("formfdata")
        for(let date of data){
            console.log(date)
        }
console.groupEnd()

        TripService.createTrip(data).then(res => {


            console.log(res)
            // if (res.ERROR) alert(res.ERROR.message)
            // if (res.SUCCESS) {
            //     localStorage.setItem('success', res.SUCCESS.description)
            //     navigate('/gestion-trip')
            // }
        })


    }


    const validationSchema = Yup.object({
        name: Yup.string().required(FormsUtils.required),
        tickets: Yup.number().min(1, "Veuillez être plus précis !").required(FormsUtils.required),
        price: Yup.number().min(0.5).required(FormsUtils.required),
        description: Yup.string().min(5, "Veuillez être plus précis !"),
        dateDebut: Yup.date().required("Veuillez indiquez la date du début !"),
        dateFin: Yup.date().required("Veuillez indiquez la date de fin !"),
        // cities: Yup.array().min(1, "Veuillez ajouter au moins 1 étape !").required(),
        // file: Yup.mixed().nullable().test(
        //     "FILE_FORMAT",
        //     FormsUtils.invalid_file_formats,
        //     (value) => !value || (value && FormsUtils.supported_formats.includes(value?.type))
        // )
    })
    const formik = useFormik({
        initialValues, onSubmit, validationSchema
    })
    return (
        <>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => {
                        return <Form>
                            <div className="row row-cols-1 row-cols-md-2">
                                <FormikControl className={"col mb-3 w-100"} control={"input"} type={"text"} name={"name"} label="Titre du séjour *" />
                                <FormikControl className={"col mb-3"} control={"input"} type={"number"} name={"tickets"} label="Place disponible *" />
                                <FormikControl className={"col mb-3"} control={"input"} type={"text"} name={"price"} label="Prix *" />
                                <FormikControl className={"col mb-3 w-100"} control={"textarea"} rows="2" name={"description"} label="Description" />
                                <FormikControl className={"col mb-3"} control={"date"}  name={"dateDebut"} label="Début du séjour" min={DateUtils.now()} max={formik.values.dateFin} />
                                <FormikControl className={"col mb-3"} control={"date"} name={"dateFin"} label="Fin du séjour"  min={formik.values.dateDebut ? formik.values.dateDebut : DateUtils.now()} />


                                <div className={`col mb-3 w-100`}>
                                    {/*<label htmlFor="image" className="form-label">Image</label>*/}


                                    {/*<input type="file" name="image" id="image" className="form-control"*/}
                                    {/*       onChange={(e) => formik.setFieldValue('image', e.target.files[0])}/>*/}
                                </div>
                                <div className={`col mb-3 w-100 ${((formik.values.dateFin && formik.values.dateDebut) || (formik.errors.cities && formik.submitCount > 0)) && "border"}  m-0 p-0`}>
                                    {formik.values.dateFin && formik.values.dateDebut && (
                                        <AddCityTripForm date={{debut: formik.values.dateDebut, fin: formik.values.dateFin}}
                                                         setCities={onAddCity}/>
                                    //  todo: put the code here afte push on git hub
                                    )}
                                    <div
                                        className={`mb-3 w-100 nav justify-content-end px-3 ${(formik.errors.cities && formik.submitCount > 0) && 'has-error'}`}>
                                        <p>{(formik.errors.cities && formik.submitCount >= 1 && !(formik.errors.dateFin || formik.errors.dateDebut)) && formik.errors.cities}</p>
                                        <p>{(formik.errors.cities && formik.submitCount > 0 && (formik.errors.dateFin || formik.errors.dateDebut)) && "Veuillez rensigner la date du début et celle de la fin du séjour afin de rajouter des étape !"}</p>
                                        <input hidden type="number" name="cities" id="cities" defaultValue={formik.values.cities}/>
                                    </div>
                                </div>

                            </div>
                            <div className="mb-3 w-100 nav justify-content-end">
                                <button type="submit" className="btn btn-gold">Créer</button>
                            </div>
                        </Form>
                    }
                }
            </Formik>
        </>
    );
};

export default AddTripForm;
