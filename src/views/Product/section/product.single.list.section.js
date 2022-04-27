import React from 'react';
import image from "../../../ressources/assets/img/test.jpg";
import {Link} from "react-router-dom";
import SiteUtils from "../../../ressources/utils/site.utils";

function ProductSingleListSection({item, i}) {
    return (
        <div className={"col"} key={i}>
            <Link to={`/product/${item.id}`} className="text-decoration-none text-dark">
                <div className="card h100 border-0 rounded-0 bg-light">
                    <figure className="image">
                        <img className="" src={image} alt="" width=""/>
                    </figure>
                    <div className="card-body p-0 p-2">
                        <p className="h4 m-0 p-0">{item.name}</p>
                        <p className="small m-0 p-0"><em>{item.mood.name}</em></p>
                    </div>
                    <div className="card-footer text-end bg-none border-0 fw-bolder text-gold">
                        {SiteUtils.formatNumberToPrice(item.price)}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductSingleListSection;