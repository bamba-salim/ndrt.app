import React from 'react';
import BlockCmn from "../_commons/block.cmn";


export function ViewTitre({titre = null, children = null}) {
    return (
        <BlockCmn className={`px-5 py-3 border`}>
            <h1 className={`text-end`}>{titre ?? children}</h1>
        </BlockCmn>
    );
}

export function SubViewTitre({className = "", titre = "Sub Page"}) {
    return (
        <BlockCmn className={`px-3 py-1 border h-100 ${className} d-flex align-items-center`}>
            <h2 className={`mx-auto text-uppercase`}>{titre}</h2>
        </BlockCmn>
    )
}

