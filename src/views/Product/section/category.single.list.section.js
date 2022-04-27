import React from 'react';
import image from "../../../ressources/assets/img/test.jpg";
import {Link} from "react-router-dom";

function CategorySingleListSection({item, i}) {
    return (
        <div className=" " key={i}>
            <figure className="image">
                <img className="" src={image} alt="" width=""/>
                <div className="image-overlay text-center">
                    <Link to={`/category/${item.id}`} className="Link text-">
                        {item.name}
                    </Link>
                </div>
            </figure>
        </div>
    );
}

export default CategorySingleListSection;