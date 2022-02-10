import React from "react";
import DateUtils from "../../../../ressources/utils/date.utils";
import {useNavigate} from "react-router-dom";
import ICON from "../../../../ressources/utils/icon.utils";

function AdminUsersList ({list}){
    const navigate = useNavigate();
    return <>
        {list && list.map((user, index) => (
            <div className="row row-cols-1  row-cols-md-2 mb-3 border mx-auto p-1" key={index}>
                <div className="col-12 col-md-11 row row-cols-2">
                    <div className="col w-100">{user.isAdmin && ICON.ADMIN} {user.username} | <em>{user.email}</em></div>
                    <div className="col w-100">{user.firstname} {user.lastname}</div>
                    <div className="col ">Inscription: {DateUtils.formatedDDMMYYYY(user.createDate)}</div>
                    <div className="col ">Modification: {DateUtils.formatedDDMMYYYY(user.updateDate)}</div>
                </div>
                <div className="col-12 col-md-1 d-flex flex-row flex-md-column  btn-group h-100">
                    <button className='btn btn-outline-dark' onClick={() => navigate(`${user.id}`) }>{ICON.USER}</button>
                    <button className='btn btn-outline-dark' onClick={() => navigate(`${user.id}/edit`) }>{ICON.EDIT}</button>
                    <button className='btn btn-outline-dark' onClick={() => navigate(`${user.id}/delete`) }>{ICON.DELETE}</button>
                </div>
            </div>
        ))}
    </>
}

export default AdminUsersList;
