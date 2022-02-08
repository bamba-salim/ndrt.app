import React from 'react';
import {useParams} from "react-router-dom";
import SubViewTpl from "../../../components/_template/sub.view.tpl";

const EditTripSubView = () => {
    const {id} = useParams();
    return (
        <SubViewTpl titre={`Modifier séjour # ${id}`} >
        </SubViewTpl>
    );
};

export default EditTripSubView;
