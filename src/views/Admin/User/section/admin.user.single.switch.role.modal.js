import React from 'react';
import UserService from "../../../../services/WebService/user.service";
import {InitNotif} from "../../../../components/atoms/toast.tpl";

function AdminUserSingleSwitchRoleModal({data, closeModal}) {

    function switchRole() {
        UserService.switchUserRole(data.id, data.isAdmin).then(res => {
            if (res.ERROR) InitNotif.ERROR(res.ERROR.message)
            if (res.SUCCESS) {
                InitNotif.SUCCESS(res.SUCCESS.description)
                window.history.go(0)
            }
        })
    }

    return (
        <div>
            <div className="modal-header bg-dark text-white rounded-0">
                <h5 className="modal-title" id="staticBackdropLabel">Changer de role</h5>
                <button type="button" className="btn-close text-white" onClick={closeModal}/>
            </div>
            <div className="modal-body rounded-0">
                <p className="modal-text text-center">Êtes vous sur de vouloir  {data.isAdmin ? "retirer" : "donner"} les droits d'administation à <em>{data.username}#{data.id}</em> ?</p>
            </div>
            <div className="modal-footer d-flex justify-content-end">
                <button className="btn btn-secondary" onClick={closeModal}>Annuler</button>
                <button className="btn btn-info" onClick={switchRole}>Changer de role</button>
            </div>

        </div>
    );
}

export default AdminUserSingleSwitchRoleModal;
