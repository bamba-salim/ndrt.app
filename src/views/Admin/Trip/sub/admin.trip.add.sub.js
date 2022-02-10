import React from 'react';
import AdminTripAddForm from "../_forms/admin.trip.add.form";
import SubTpl from "../../../../components/_template/sub.tpl";

function AdminTripAddSub (){
    return (
        <SubTpl titreProps={{titre: "Ajouter un nouveau circuit"}}>
            <AdminTripAddForm/>
        </SubTpl>
    );
};

export default AdminTripAddSub;
