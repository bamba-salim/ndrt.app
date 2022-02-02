import React from "react";
import DateUtils from "../../../../ressources/utils/date.utils";
import {Link} from "react-router-dom";
import ICON from "../../../../ressources/utils/icon.utils";

const UserList = ({list}) => {
    return <>
        <div className="row fw-bolder ">
            <div className="col">username</div>
            <div className="col">email</div>
            <div className="col">firstname</div>
            <div className="col">lastname</div>
            <div className="col">isAdmin</div>
            <div className="col">createDate</div>
            <div className="col">updateDate</div>
            <div className="col text-end">Action</div>
        </div>
        <hr className="fw-bolder my-0"/>
        {list && list.map((user, index) => (
            <div className="row" key={index}>
                <div className="col">{user.username}</div>
                <div className="col">{user.email} </div>
                <div className="col">{user.firstname} </div>
                <div className="col">{user.lastname}</div>
                <div className="col">{user.isAdmin ? ICON.ADMIN : " - "}</div>
                <div className="col">{DateUtils.formated(user.createDate)}</div>
                <div className="col">{DateUtils.formated(user.updateDate)}</div>
                <div className="col text-end ">
                    <Link className="mx-1" to={`${user.id}`}><span className="text-black">{ICON.USER}</span></Link>
                    <Link className="mx-1" to={`${user.id}/edit`}><span className="text-black">{ICON.EDIT}</span></Link>
                    <Link className="mx-1" to={`${user.id}/delete`}><span className="text-black">{ICON.DELETE}</span></Link>
                </div>
            </div>
        ))}
    </>
}

export default UserList;
