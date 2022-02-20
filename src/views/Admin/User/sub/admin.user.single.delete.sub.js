import React from 'react';
import SubTpl from "../../../../components/_template/sub.tpl";
import {useParams} from "react-router-dom";
import UserService from "../../../../services/WebService/user.service";

function AdminUserSingleDeleteSub () {

    const {idUser} = useParams();


    const deleteUser =() =>{
        UserService.deleteUser(idUser).then(res => {
            if(res.ERROR) alert(res.ERROR.message)
            if(res.SUCCESS) {
                // todo: navigate to list user
            }
        })
    }

    return (
        <SubTpl titreProps={{className: 'text-danger', titre: `Suppresion user ${idUser}`}} className={"p-3 text-danger"}>
            <div className={`px-3 py-1 d-flex align-items-center`}>
                <p className={`mx-auto text-uppercase`}>Êtes vous sur de vouloir supprimer l'utilisateur <b>#{idUser}</b> , cet action est irréversible</p>
            </div>
            <div className="nav justify-content-end">
                <button className="btn btn-danger" onClick={deleteUser}>Confirmer supprersion</button>
            </div>

        </SubTpl>
    );
};

export default AdminUserSingleDeleteSub;
