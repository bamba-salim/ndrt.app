import React, {useEffect, useState} from 'react';
import {Form, Formik, FieldArray} from "formik";
import * as Yup from "yup";
import TripService from "../../../../services/WebService/trip.service";
import DateUtils from "../../../../ressources/utils/date.utils";
import FormsUtils, {FormikControl, TextError} from "../../../../ressources/utils/forms.utils";
import {useNavigate} from "react-router-dom";
import SiteUtils from "../../../../ressources/utils/site.utils";
import CreatableSelect from "react-select/creatable";
import ICON from "../../../../ressources/utils/icon.utils";
import BlockCmn from "../../../../components/_commons/block.cmn";
import HrCmn from "../../../../components/_commons/hr.cmn";

export default function AdminTripAddForm() {

    const [citiesList, setCitiesLiest] = useState();

    const [countriesList, setCountriesList] = useState();

    const navigate = useNavigate();


    useEffect(() => {
        TripService.fetchAllCountries().then(res => setCountriesList(res.countriesList))
        TripService.fetchAllSelectCities().then(res => setCitiesLiest(res.citiesList))
    }, [])

    const initialValues = {
        name: '',
        tickets: '',
        price: '',
        description: '',
        dateDebut: '',
        dateFin: '',
        cities: [],
        image: '',
    }

    const onSubmit = values => {
        TripService.createTrip(values).then(res => {
            if (res.ERROR) alert(res.ERROR.message)
            if (res.SUCCESS) {
                localStorage.setItem('success', res.SUCCESS.description)
                navigate('/gestion-trip')
            }
        })


    }


    const validationSchema = Yup.object({
        name: Yup.string().required(FormsUtils.required),
        tickets: Yup.number().min(1, "Veuillez être plus précis !").required(FormsUtils.required),
        price: Yup.number().min(0.5).required(FormsUtils.required),
        description: Yup.string().min(5, "Veuillez être plus précis !"),
        dateDebut: Yup.date().required("Veuillez indiquez la date du début !"),
        dateFin: Yup.date().required("Veuillez indiquez la date de fin !"),
        cities: Yup.array(Yup.object({
            name: Yup.string().required(FormsUtils.required),
            country: Yup.string().required(FormsUtils.required)

        })).min(1, "Veuillez ajouter au moins 1 étape !").required(),
        image: Yup.mixed().nullable().test("FILE_FORMAT", FormsUtils.invalid_file_formats, (value) => !value || (value && FormsUtils.supported_formats.includes(value?.type)))
    })

    // const formik = useFormik({
    //     initialValues, onSubmit, validationSchema
    // })

    return (
        <>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    ({values, errors, handleBlur,touched}) => {
                        return <Form>
                            <div className="row row-cols-1 row-cols-md-2">
                                <div className="col row row-cols-1 row-cols-md-2">
                                    <FormikControl label="Titre du séjour *" control={"input"} className={"col mb-3 w-100"}
                                                   type={"text"} name={"name"}/>
                                    <FormikControl label="Place disponible *" control={"input"} className={"col mb-3"}
                                                   type={"number"} name={"tickets"}/>
                                    <FormikControl label="Prix *" control={"input"} className={"col mb-3"} type={"text"}
                                                   name={"price"}/>
                                    <FormikControl label="Description" control={"textarea"} className={"col mb-3 w-100"}
                                                   rows="2" name={"description"}/>
                                    <FormikControl label="Illustration du séjour" control="file" name="image"
                                                   className={"col mb-3 w-100"}/>
                                    <FormikControl label="Début du séjour" control={"date"} className={"col mb-3"}
                                                   name={"dateDebut"} min={DateUtils.now()} max={values.dateFin}/>
                                    <FormikControl label="Fin du séjour" control={"date"} className={"col mb-3"}
                                                   name={"dateFin"}
                                                   min={values.dateDebut ? DateUtils.addDays(values.dateDebut, 2) : DateUtils.now()}/>
                                </div>

                                <div className="col row row-cols-1 mx-auto"
                                     disabled={!(values.dateFin && values.dateDebut)}>
                                    <HrCmn className="d-md-none" />
                                    <BlockCmn className={`col w-100 mb-3 p-3`}>
                                        <FieldArray name="cities">
                                            {({push, remove, move, form}) => {
                                                const {cities} = form.values
                                                const handleAddCity = (city) => {
                                                    let newCity = {
                                                        name: city.label,
                                                        country: city.country,
                                                        description: ''
                                                    }
                                                    if (SiteUtils.isNumeric(city.value)) {
                                                        newCity.id = city.value
                                                    } else {
                                                        newCity.isNew = true
                                                    }
                                                    push(newCity)
                                                }
                                                return (
                                                    <>
                                                        <h3 className="mb-3 text-decoration-underline text-end text-uppercase">Les étapes du séjour</h3>
                                                        <div className="mb-3">
                                                            <CreatableSelect onChange={(e) => handleAddCity(e)} options={citiesList} className="w-100" isSearchable isClearable placeholder="Ajouter une étape" onBlur={handleBlur}/>
                                                            {(errors.cities && touched.cities) && <TextError>{errors.cities}</TextError> }
                                                        </div>
                                                        {cities.length > 0 && ( <HrCmn />)}
                                                        {
                                                            cities && cities.map((city, i) => (
                                                                <div   key={i}>
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-10  order-md-first row row-cols-1 row-cols-md-2">
                                                                            <FormikControl label="Ville" control={"input"} name={`cities[${i}].name`} type="text" className={"col mb-3"} readOnly={!city.isNew}/>

                                                                            { city.isNew ? ( <FormikControl label="Pays" control="select" name={`cities[${i}].country`} className={"col mb-3"} options={countriesList} readOnly={!city.isNew}/>)
                                                                                : (<FormikControl label="Pays" control={"input"} name={`cities[${i}].country`} type="text" className={"col mb-3"} readOnly={true}/>)
                                                                            }
                                                                            <FormikControl label={"Description"} control={"textarea"} row={3} name={`cities[${i}].description`} className={'col w-100 mb-3'} />
                                                                        </div>
                                                                        <div className="col-12 d-flex btn-group justify-content-between col-md order-first flex-row flex-md-column">
                                                                            <button type="button" className="btn btn-outline-primary" onClick={() => move(i,  i-1)} disabled={i === 0}>{ICON.NAV_UP}</button>
                                                                            <button type="button" className="btn btn-outline-danger" onClick={() => remove(i)}>{ICON.DELETE}</button>
                                                                            <button type="button" className="btn btn-outline-primary" onClick={() => move(i,  i+1)} disabled={i + 1 === cities.length}  >{ICON.NAV_DOWN}</button>
                                                                        </div>
                                                                    </div>
                                                                    {i + 1 < cities.length && ( <HrCmn />)}

                                                                </div>



                                                            ))
                                                        }

                                                    </>
                                                )
                                            }}
                                        </FieldArray>
                                    </BlockCmn>
                                </div>


                                <div className="mb-3 w-100 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-gold">Créer</button>
                                </div>
                            </div>
                        </Form>
                    }
                }
            </Formik>
        </>
    );
};


