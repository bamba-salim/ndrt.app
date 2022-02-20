import React from 'react';
import TripSingleListCardSection from "../section/trip.single.list.card.section";

function TripFiltredList({list}) {
    return (
        <div>
            {/*<div className="row row-cols-2 row-cols-md-3 g-5">*/}
            {/*    {list && list.map((trip,i) => (<TripSingleListCardSection key={i} trip={trip}/>))}*/}

            {/*</div>*/}

            <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                {list && list.map((trip,i) => (
                <div className="col" key={i}>

                    <div className="card rounded-0 h-100 p-0 m-0">
                        <TripSingleListCardSection key={i} trip={trip}/>
                    </div>
                </div>
                ))}

            </div>
        </div>
    );
}

export default TripFiltredList;
