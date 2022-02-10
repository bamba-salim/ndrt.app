import React from 'react';
import {Formik, Form} from "formik";
import FormsUtils, {FormikControl} from "../../../../ressources/utils/forms.utils";
import * as Yup from "yup";

function AdminCityEditForm({isEdit, city, countries}) {


    const validationSchema = Yup.object({
        name: Yup.string().required(FormsUtils.required),
        country: Yup.string().required(FormsUtils.required)
    })
    const onSubmit = values => {
        console.log(values)
    }

    return (
        <>
            {
                isEdit && (<>
                    <Formik initialValues={{
                        id: city.name,
                        name: city.name,
                        country: city.country

                    }} validationSchema={validationSchema}
                            onSubmit={onSubmit}>
                        <Form>
                            <div className="row row-cols-1 row-cols-md-2">
                                <FormikControl control="input" name={"name"} label={"Nom de la ville"}/>
                                <FormikControl control="select" name="country" label={"Pays"} options={countries}/>
                            </div>
                        </Form>
                    </Formik>
                </>)
            }

        </>

    );
}

export default AdminCityEditForm;
