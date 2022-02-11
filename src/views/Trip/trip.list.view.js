import React, {useEffect} from 'react';
import ViewsTpl from "../../components/_template/views.tpl";

function TripListView() {

    useEffect((test) => {
        console.log(test)
    },[])

    return (
        <ViewsTpl>
            
        </ViewsTpl>
    );
}

export default TripListView;
