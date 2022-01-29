import React, {useEffect, useState} from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import UserService from "../../../services/SiteAdmin/user.service";


function UpdateUserForm({user}) {

    const initialValues = user

    const onSubmit = values => {
        UserService.updateUser(values).then(res => {
            values.log(formik)
        })
        console.log("form data", values)
    }
    const validationSchema = Yup.object({
        username: Yup.string().required('requis'),
        email: Yup.string().email('Invalid email format').required('requis'),
        firstname: Yup.string(),
        lastname: Yup.string().required('requis')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <>
            {JSON.stringify(user)}
            <form onSubmit={formik.handleSubmit}>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-3">
                        <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
                        <input type="text" className="form-control" id="username" name="username" placeholder="Nom d'utilisateur"
                        onChange={formik.handleChange} value={formik.values.username}
                        />
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Adresse email"
                               onChange={formik.handleChange} value={formik.values.email}/>
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="firstname" className="form-label">Prénom</label>
                        <input type="text" className="form-control" id="firstname" name="firstname" placeholder="Prénom"
                               onChange={formik.handleChange} value={formik.values.firstname}/>
                    </div>
                    <div className="col mb-3">
                        <label htmlFor="lastname" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Nom"
                               onChange={formik.handleChange} value={formik.values.lastname}/>
                    </div>
                    <div className="col w-100 justify-content-end nav">
                        <button type="submit" className="btn btn-gold">Enregistrer</button>
                    </div>
                </div>
            </form>

        </>
);
}

export default UpdateUserForm;
