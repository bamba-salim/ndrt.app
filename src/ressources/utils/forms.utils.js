import {Field, ErrorMessage} from "formik";
import ICON from "./icon.utils";
import CreatableSelect from "react-select";
import Select from "react-select";
import React from "react";

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
        case 'file':
            return <FileInput {...rest}/>
        case 'select':
            return <SelectField {...rest} />
        case 'select-create':
            return <CreatSelect {...rest}/>

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
            <Field type="date" id={name} name={name} className="form-control" {...rest} placeholder={label}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export function FileInput(props) {
    const {label, name, className, ...rest} = props
    return (
        <div className={className}>
            <Field type="file" name={name} >
                {
                    ({form}) => {
                        const {setFieldValue} = form
                        return <>
                            <label htmlFor={name} className="form-label">{label}</label>
                            <input id={name} placeholder={label}  {...rest}  type="file" className="form-control" onChange={event => setFieldValue(name,event.target.files[0])}
                                   onBlur={form.handleBlur}
                            />
                        </>
                    }

                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}



export function SelectField(props){
    const {label, name, className, options, ...rest} = props
    return (
        <div className={className}>
            <label htmlFor={name} className="form-label">{label}</label>
            <Field as="select" className="form-control" placeholder={label}>
                {({form}) => {
                    const {setFieldValue} = form
                    return (
                        <Select id={name} name={name} {...rest} className="" options={options} placeholder={label} isSearchable onChange={(value) => setFieldValue(name,value.label)}/>
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>)
}

export function CreatSelect (props){

    const {label, name, className, ...rest} = props
    return (
        <div className={className}>
            <label htmlFor={name} className="form-label">{label}</label>
            <Field type="file" name={name} >
                {
                    ({form}) => {
                        const {setFieldValue} = form
                        return <>
                            <input   {...rest}  type="file" className="form-control" onChange={event => setFieldValue(name,event.target.files[0])}
                                   onBlur={form.handleBlur} />
                            <CreatableSelect id={name} placeholder={label} onChange={(e) => this.handleAddCity(e)} classname="form-select"
                                             isSearchable isClearable />

                        </>
                    }

                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )


}

export function TextError ({children}) {
    return (
        <div className="text-danger d-flex justify-content-between text-end gap-0">
            <p>{children}</p><p> {ICON.WARNING}</p>
        </div>
    )
}

