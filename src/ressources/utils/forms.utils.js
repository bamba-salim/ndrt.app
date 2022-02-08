import {Field, ErrorMessage} from "formik";
import ICON from "./icon.utils";

import DateView from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
export default class FormsUtils {
    static required = "Ce champs est requis!"
    static invalid_file_formats = "Le format du fichier est invalide !"
    static supported_formats = ["image/jpg", "image/jpeg", "image/png"]
}

export function FormikControl(props) {
    const {control, ...rest} = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest}/>
        case 'radio':
        case 'checkbox':
        case 'date':
            return <DatePicker {...rest} />
        default :
            return null;
    }

}

export function Input(props) {
    const {label, name, className, ...rest} = props
    return (
        <div className={className}>
            <label htmlFor={name} className="form-label">{label}</label>
            <Field id={name} name={name} {...rest} className="form-control" placeholder={label}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>)
}

export function Textarea(props) {
    const {label, name, className, ...rest} = props
    return (
        <div className={className}>
            <label htmlFor={name} className="form-label">{label}</label>
            <Field as="textarea" id={name} name={name} {...rest} className="form-control" placeholder={label}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>)
}

export function DatePicker(props) {
    const {label, name, className, ...rest} = props
    return (
        <div className={className}>
            <label htmlFor={name} className="form-label">{label}</label>
            <Field type="date" id={name} name={name}  className="form-control" {...rest} placeholder={label} />
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}



export const TextError = (props) => (
    <div className="text-danger d-flex justify-content-between text-end gap-0">
        <p>{props.children}</p><p> {ICON.WARNING}</p>
    </div>
)

