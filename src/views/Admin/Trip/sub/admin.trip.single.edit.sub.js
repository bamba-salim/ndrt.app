import React from 'react';
import {useParams} from "react-router-dom";
import SubTpl from "../../../../components/_template/sub.tpl";

function AdminTripSingleEditSub () {
    const {id} = useParams();
    return (
        <SubTpl titreProps={{titre:`Modifier séjour # ${id}`}} >
        </SubTpl>
    );
};

export default AdminTripSingleEditSub;
