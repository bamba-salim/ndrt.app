import React from 'react';
import {useParams} from "react-router-dom";


export default function SiteErrorsErrorsSub() {

    const params = useParams();

    return (
        <div>
            <p className="h2 text-center d-block w-100">Accès impossible à cette page avec le paramètres </p>
            <p className="h2 text-center d-block w-50 bg-danger mx-auto text-white">{JSON.stringify(params)}</p>
        </div>
    );
}

