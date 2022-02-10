import React from 'react';
import SubTpl from "../../../../components/_template/sub.tpl";
import {useParams} from "react-router-dom";

function AdminTripSingleDeleteSub(props) {
    const {id} = useParams();

    const _delete = () => {
        console.log("delete user",id)
    }

    return (
        <SubTpl titreProps={{className: 'text-danger', titre:`Suppresion trip ${id}`}} className={"p-3 text-danger"}>
            <div className={`px-3 py-1 d-flex align-items-center`}>
                <p className={`mx-auto text-uppercase`}>Êtes vous sur de vouloir supprimer le séjours <b>#{id}</b> , cet action est irréversible</p>
            </div>
            <div className="nav justify-content-end">
                <button className="btn btn-danger" onClick={_delete}>Confirmer supprersion</button>
            </div>

        </SubTpl>
    );
}

export default AdminTripSingleDeleteSub;
