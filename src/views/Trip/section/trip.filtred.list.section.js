import React, {useEffect, useState} from 'react';
import BlockCmn from "../../../components/_commons/block.cmn";
import ListTpl from "../../../components/_template/list.tpl";
import TripService from "../../../services/SiteAdmin/trip.service";
import TripFiltredList from "../template/trip.filtred.list";
import {TripFilterBean} from "../../../ressources/bean/trip.filter.bean";
import DateUtils from "../../../ressources/utils/date.utils";
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import {FormikControl} from "../../../ressources/utils/forms.utils";

function TripFiltredListSection(props) {
    const [filtredTrips, setFiltredTrips] = useState([]);
    const filters = new TripFilterBean();


    useEffect(() => {
        TripService.fetchFiltredTrips(filters).then(res => setFiltredTrips(res.list));
    }, [filters])

    let validation = Yup.object( {
        name: Yup.string('').nullable()
    })


    return (

        <BlockCmn className="row grid my-3 p-0">
            <div className="col-12 col-lg-3 col-xl-2 border d-none">
                <Formik initialValues={filters}
                        validationSchema={validation}
                        onSubmit={(values) => TripService.fetchFiltredTrips(filters).then(res => {
                            console.log(res)
                            setFiltredTrips(res.list)
                        })}
                >
                    <Form>
                        <FormikControl control="input" name="name" label="nom"  />
                        <button type="submit">Envoyer</button>
                    </Form>
                </Formik>


            </div>
            <div className="col-12 p-0">
                <ListTpl list={filtredTrips} component={TripFiltredList} emptyMessage={"Aucun séjours n'a été trouvé !"}/>
            </div>
        </BlockCmn>
    );
}

export default TripFiltredListSection;
