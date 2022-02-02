import React from 'react';
import AddTripForm from "./forms/add.trip.form";
import SubViewTpl from "../../../components/_template/sub.view.tpl";

const AddTripSubView = () => {
    return (
        <SubViewTpl titre="Ajouter un nouveau circuit">
            <AddTripForm/>
        </SubViewTpl>
    );
};

export default AddTripSubView;
