import React, {useState} from "react";
import DateUtils from "../../../../ressources/utils/date.utils";
import {useNavigate} from "react-router-dom";
import ICON from "../../../../ressources/utils/icon.utils";
import ModalTpl from "../../../../components/_template/modal.tpl";
import AdminUserSingleSwitchRoleModal from "../modal/admin.user.single.switch.role.modal";

function AdminUserSinlgeListSection({item, i}) {
    const navigate = useNavigate();
    const user = item
    const [isOpenSwitchUserRoleModal, openSwitchUserRoleModal] = useState(false)

    const isAdmin = () => {
        let icon = ICON.SWITCH_OFF
        if (user.isAdmin) icon = ICON.SWITCH_ON
        return (<button title="Changer le role de l'utilisateur" className="btn btn-outline-dark d-inline" onClick={() => openSwitchUserRoleModal(true)}>{icon}</button>)
    }

    const closeSwitchUserRoleModal = () => openSwitchUserRoleModal(false)


    return <>
        <div className="row row-cols-1  row-cols-md-2 mb-3 border mx-auto p-1" key={i}>
            <div className="col-12 col-md-10 row row-cols-2">
                <div className="col w-100 d-flex justify-content-between">
                    <div className="">{user.isAdmin && ICON.ADMIN} {user.username} | <em>{user.email}</em></div>
                    <div className="">
                    </div>
                </div>
                <div className="col w-100">{user.firstname} {user.lastname}</div>
                <div className="col ">Inscription: {DateUtils.formatedDDMMYYYY(user.createDate)}</div>
                <div className="col ">Modification: {DateUtils.formatedDDMMYYYY(user.updateDate)}</div>
            </div>
            <div className="col-12 col-md-2 h-100 d-flex justify-content-evenly justify-content-md-end">
                    {isAdmin()}
                    <button className='btn btn-outline-dark' onClick={() => navigate(`${user.id}`)}>{ICON.VIEW}</button>
                    <button className='btn btn-outline-dark' onClick={() => navigate(`${user.id}/edit`)}>{ICON.EDIT}</button>
                    <button className='btn btn-outline-dark' onClick={() => navigate(`${user.id}/delete`)}>{ICON.DELETE}</button>
            </div>
        </div>
        <ModalTpl isOpen={isOpenSwitchUserRoleModal} closeModal={closeSwitchUserRoleModal} component={AdminUserSingleSwitchRoleModal} data={user} />
    </>
}

export default AdminUserSinlgeListSection;
