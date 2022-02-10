import React from 'react';
import {useParams} from "react-router-dom";
import SubTpl from "../../../../components/_template/sub.tpl";

function AdminTripSingleHomeSub (){
    const {id} = useParams();
    return (
        <SubTpl titreProps={{titre: `Séjour # ${id}`}} >
        </SubTpl>
    );
};

export default AdminTripSingleHomeSub;
