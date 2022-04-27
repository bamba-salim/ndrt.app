import React, {Component} from 'react';
import {SubViewTitre} from "../atoms/view.titre";
import SiteUtils from "../../ressources/utils/site.utils";

function SubTpl ({children, className = '', photo = null, titreProps={titre: '', className: ''}}) {
    return (
        <div className={`row row-cols-1 ${photo != null ? 'flex-md-column': 'flex-md-row'}`}>

            <div className={` ${photo != null ? "d-block" : 'd-none'} `}>picture</div>
            <div className={`p-3 my-3  ${!SiteUtils.isEmptyStr(titreProps.titre) && photo === null  ? "d-block" : 'd-none'} `}>
                <SubViewTitre titre={titreProps.titre} className={titreProps.className}/>
            </div>
            <div className={`col ${className}`}>{children}</div>
        </div>
    );
}

export default SubTpl;
