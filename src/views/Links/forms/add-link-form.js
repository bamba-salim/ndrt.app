import React, {useEffect, useState} from "react";
import {withFormik} from "formik";
import * as Yup from "yup";
import {RegexUtils} from "../../../ressources/utils/regex-utils";
import DateUtils from "../../../ressources/utils/date-utils";
import LinksService from "../../../services/Links/links-service";

function AddLinkForm(props) {
    const [domaineList, setDomaineList] = useState([]);
    const [typeList, setTypeList] = useState([]);

    useEffect(() => {
        LinksService.initAddLinksData().then(res => {
            setDomaineList(res.linksDomaineList)
            setTypeList(res.linksTypeList)
        })
    }, [])

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div className="row my-3">
                    <div className="col-12 col-md-6 d-none d-md-block">
                    </div>
                    <div className="col-12 col-md-6">

                        <div className={`row row-cols-1 row-cols-md-2`}>
                            <div className={`col mb-3  ${(props.errors.name && props.touched.name) && 'has-error'}`}>
                                <label className="form-label" htmlFor="name">Nom</label> {/* name */}
                                <input className="form-control" type="text" id="name" placeholder="Name" name="name"
                                       onChange={props.handleChange} value={props.values.name}
                                       onBlur={props.handleBlur}/>
                                <p>{(props.errors.name && props.touched.name) && props.errors.name}</p>
                            </div>
                            <div className={`col mb-3  ${(props.errors.url && props.touched.url) && 'has-error'}`}>
                                <label className="form-label" htmlFor="url">Url</label>{/* url */}
                                <input className="form-control" type="text" id="url" placeholder="Url" name="url"
                                       onChange={props.handleChange} value={props.values.url}
                                       onBlur={props.handleBlur}/>
                                <p>{(props.errors.url && props.touched.url) && props.errors.url}</p>
                            </div>
                            <div
                                className={`col mb-3  ${(props.errors.domain && props.touched.domain) && 'has-error'}`}>
                                <label className="form-label" htmlFor="domain">Domaine</label> {/* domaine */}
                                <select className="form-select" id="domain" name="domain" onChange={props.handleChange}
                                        value={props.values.domain} onBlur={props.handleBlur}>
                                    <option defaultValue value="">Open this select menu</option>
                                    {domaineList && domaineList.map((domaine, index) => (
                                        <option key={index} value={domaine.id}>{domaine.name}</option>
                                    ))}
                                </select>
                                <p>{(props.errors.domain && props.touched.domain) && props.errors.domain}</p>
                            </div>

                            <div className={`col mb-3  ${(props.errors.type && props.touched.type) && 'has-error'}`}>
                                <label className="form-label" htmlFor="type">Type</label> {/* Type */}
                                <select className="form-select" id="type" name="type" onChange={props.handleChange}
                                        value={props.values.type} onBlur={props.handleBlur}>
                                    <option defaultValue value="">Open this select menu</option>
                                    {typeList && typeList.map((domaine, index) => (
                                        <option key={index} value={domaine.id}>{domaine.name}</option>
                                    ))}
                                </select>
                                <p>{(props.errors.type && props.touched.type) && props.errors.type}</p>
                            </div>
                            <div
                                className={`col mb-3 w-100 ${(props.errors.description && props.touched.description) && 'has-error'}`}>
                                <label className="form-label"
                                       htmlFor="description">Description</label> {/* description */}
                                <textarea className="form-control" rows={1} id="description"
                                          placeholder="Description" name="description" onChange={props.handleChange}
                                          value={props.values.description} onBlur={props.handleBlur}/>
                                <p>{(props.errors.description && props.touched.description) && props.errors.description}</p>
                            </div>
                        </div>

                        <div className="nav justify-content-end align-items-center w100">
                            <button type="submit" className="btn btn-success">Ajouter</button>
                        </div>
                    </div>

                </div>

            </form>
        </>
    )

}

export default withFormik({
    mapPropsToValues: () => ({
        name: "",
        url: "",
        domain: "",
        type: "",
        description: "",

    }),
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(3, "Le nom doit aovir plus de 3 carractères")
            .required("Le nom est obligatoire !"),
        url: Yup.string()
            .matches(RegexUtils.URL, "Le format d'url est invalide !")
            .required("L'url est obligatoire !"),
        domain: Yup.mixed()
            .required("Veuillez selectionner un domaine !"),
        type: Yup.mixed()
            .required("Veuillez selectionner un type !"),
        description: Yup.string()
            .min(5, "La description doit avoir au moins 5 carractères")
            .max(250, "La description doit avoir maximum 200 carractères")
    }),
    handleSubmit: (values, {props}) => {
        let date = DateUtils.now()
        values.createdDate = date;
        values.updatedDate = date;
        values.user = 1; // todo: set dynamicly
        props.submitLink(values)
    }
})(AddLinkForm);
