import React, {useState} from 'react';
import LodashUtils from "../../../ressources/utils/lodash.utils";
import * as Yup from "yup";
import {useFormik} from "formik";
import LoginService from "../../../services/WebService/login.service";

function LoginSignUpForm() {
    const [loginErrors, setLoginErrors] = useState([]);

    const onSubmit = values => {
        setLoginErrors([])

        if (LodashUtils.isEmpty(loginErrors)) setLoginErrors([])
        LoginService.signUp(values).then(res => {
            if (res.ERROR) setLoginErrors(res.ERROR.data)
            if (res.SUCCESS) {
                localStorage.setItem('user', JSON.stringify(res.user))
                window.location.reload();
            }

        })
    }
    const validationSchema = Yup.object({
        username: Yup.string().required('Requis'),
        email: Yup.string().required('Requis').email('mauvais format'),
        lastname: Yup.string().required('Requis'),
        password: Yup.string().required('Password is required'),
        passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })


    const formik = useFormik({
        initialValues: {username: '', email: '', password: '', firstname: '', lastname: '', passwordConfirm: ''},
        onSubmit,
        validationSchema
    })

    return (
        <>
            <h2 className="text-center my-2">Inscription </h2>
            <hr/>
            <form onSubmit={formik.handleSubmit}>
                <div className="row row-cols-1 row-cols-md-2">
                    <div
                        className={`col mb-3 ${((formik.errors.username && formik.touched.username) || loginErrors.username) && 'has-error'}`}>
                        <label htmlFor="username" className="form-label">Nom d'utilisateur *</label>
                        <input type="text" className="form-control" id="username" name="username"
                               placeholder="Nom d'utilisateur" onChange={formik.handleChange}
                               value={formik.values.username} onBlur={formik.handleBlur}/>
                        <p>{((formik.errors.username && formik.touched.username) && formik.errors.username) || loginErrors.username}</p>
                    </div>
                    <div
                        className={`col mb-3 ${((formik.errors.email && formik.touched.email) || loginErrors.email) && 'has-error'}`}>
                        <label htmlFor="email" className="form-label">Email *</label>
                        <input type="text" className="form-control" id="email" name="email" placeholder="Email"
                               onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                        <p>{((formik.errors.email && formik.touched.email) && formik.errors.email) || loginErrors.email}</p>
                    </div>
                    <div className={`col mb-3 ${(formik.errors.firstname && formik.touched.firstname) && 'has-error'}`}>
                        <label htmlFor="firstname" className="form-label">Prénom</label>
                        <input type="text" className="form-control" id="firstname" name="firstname"
                               placeholder="Prénom"
                               onChange={formik.handleChange} value={formik.values.firstname}
                               onBlur={formik.handleBlur}/>
                        <p>{(formik.errors.firstname && formik.touched.firstname) && formik.errors.firstname}</p>
                    </div>
                    <div className={`col mb-3 ${(formik.errors.lastname && formik.touched.lastname) && 'has-error'}`}>
                        <label htmlFor="lastname" className="form-label">Nom *</label>
                        <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Nom"
                               onChange={formik.handleChange} value={formik.values.lastname}
                               onBlur={formik.handleBlur}/>
                        <p>{(formik.errors.lastname && formik.touched.lastname) && formik.errors.lastname}</p>
                    </div>
                    <div className={`col mb-3 ${(formik.errors.password && formik.touched.password) && 'has-error'}`}>
                        <label htmlFor="password" className="form-label">Mot de passe *</label>
                        <input type="password" className="form-control" id="password" name="password"
                               placeholder="Mot de passe"
                               onChange={formik.handleChange} value={formik.values.password}
                               onBlur={formik.handleBlur}/>
                        <p>{(formik.errors.password && formik.touched.password) && formik.errors.password}</p>
                    </div>
                    <div
                        className={`col mb-3 ${(formik.errors.passwordConfirm && formik.touched.passwordConfirm) && 'has-error'}`}>
                        <label htmlFor="passwordConfirm" className="form-label">Confirmation mot de passe *</label>
                        <input type="password" className="form-control" id="passwordConfirm" name="passwordConfirm"
                               placeholder="Mot de passe"
                               onChange={formik.handleChange} value={formik.values.passwordConfirm}
                               onBlur={formik.handleBlur}/>
                        <p>{(formik.errors.passwordConfirm && formik.touched.passwordConfirm) && formik.errors.passwordConfirm}</p>
                    </div>
                    <div className="col w-100 justify-content-end nav">
                        <button type="submit" className="btn btn-gold">Enregistrer</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default LoginSignUpForm;
