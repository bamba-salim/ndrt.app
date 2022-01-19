import React from "react";
import DateUtils from "../../../ressources/utils/date-utils";

const TypeLinksList = ({links, loading}) => {
    if (loading) {
        return <h2>Chargement des données..</h2>
    }

    return <>
        {links && links.map((link, index) => (
            <div className="row" key={index}>
                <div className="col-2">{link.name}</div>
                <div className="col-3">{link.domaine.name} </div>
                <div className="col-4 text-truncate">{link.description}</div>
                <div className="col">{DateUtils.formated(link.updated_at)}</div>
                <div className="col text-end">Icons</div>
            </div>
        ))}
    </>
}

export default TypeLinksList;
