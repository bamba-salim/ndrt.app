import React, {useEffect} from 'react';
import BlockCmn from "../_commons/block-cmn";
import SiteUtils from "../../ressources/utils/site.utils";


export const ViewTitre = ({titre}) => {
    useEffect(() => {
        SiteUtils.title(titre)
    })

    return (
        <BlockCmn classname={`px-5 py-3 border`}>
            <h1 className={`text-end`}>{titre}</h1>
        </BlockCmn>
    );
}

export const SubViewTitre = ({classname, titre}) => {
    return (
        <BlockCmn classname={`px-3 py-1 border h-100 ${classname} d-flex align-items-center`}>
            <h2 className={`mx-auto text-uppercase`}>{titre}</h2>
        </BlockCmn>
    )

}

