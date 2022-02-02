import React from 'react';
import {useParams} from "react-router-dom";

const EditTripSubView = () => {
    const {id} = useParams();
    return (
        <div>
            modification trip {id}
        </div>
    );
};

export default EditTripSubView;
