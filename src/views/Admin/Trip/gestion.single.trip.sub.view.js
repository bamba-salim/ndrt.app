import React from 'react';
import {useParams} from "react-router-dom";
import SubViewTpl from "../../../components/_template/sub.view.tpl";

const GestionSingleTripSubView = () => {
    const {id} = useParams();
    return (
        <SubViewTpl titre={`Séjour # ${id}`}>
            
        </SubViewTpl>
    );
};

export default GestionSingleTripSubView;
