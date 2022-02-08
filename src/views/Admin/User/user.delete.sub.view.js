import React from 'react';
import SubViewTpl from "../../../components/_template/sub.view.tpl";
import {useParams} from "react-router-dom";
import UserService from "../../../services/SiteAdmin/user.service";

const UserDeleteSubView = () => {

    const {idUser} = useParams();


    function deleteUser() {
        UserService.deleteUser(idUser).then(res => {
            if(res.ERROR) alert(res.ERROR.message)
            if(res.SUCCESS) {
                // todo: navigate to list user
            }
        })
    }

    return (
        <SubViewTpl titreClassname={'text-danger'} titre={"Suppresion user " + idUser} childrenClassname={"p-3 text-danger"}>
            <div className={`px-3 py-1 d-flex align-items-center`}>
                <p className={`mx-auto text-uppercase`}>Êtes vous sur de vouloir supprimer l'utilisateur <b>#{idUser}</b> , cet action est irréversible</p>
            </div>
            <div className="nav justify-content-end">
                <button className="btn btn-danger" onClick={deleteUser}>Confirmer supprersion</button>
            </div>

        </SubViewTpl>
    );
};

export default UserDeleteSubView;
