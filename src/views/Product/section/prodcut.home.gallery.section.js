import React, {useEffect, useState} from 'react';
import image from "../../../ressources/assets/img/test.jpg";
import {Link} from "react-router-dom";
import ListSingleTpl from "../../../components/_template/list.single.tpl";
import CategorySingleListSection from "./category.single.list.section";
import ProductService from "../../../services/WebService/product.service";

export function ProdcutHomeGallerySection() {
    const [categoriesList, setCategoriesList] = useState([])

    useEffect(() => {
        let list = []
        for (let i = 0; i < 4; i++) {
            list.push(ProductService.MOODS[i])
        }

        setCategoriesList(list)
    }, [])

    return (<>
            <div className="d-none d-sm-block my-4 mx-sm-4 mx-lg-0">
                <ListSingleTpl grid={"row row-cols-2 row-cols-lg-4 gx-4"} list={categoriesList}
                               component={CategorySingleListSection}/>
            </div>
            <ProdcutHomeGallerySlider list={categoriesList}/>
        </>

    );
}

export function ProdcutHomeGallerySlider({list = []}) {
    return (<div>
        <div id="carouselExampleFade" className="d-sm-none carousel slide carousel-fade p-0 m-0"
             data-bs-ride="carousel">
            <div className="carousel-inner">
                {list.map((mood, i) => (
                    <div className={`carousel-item image ${i === 0 ? 'active' : ''}`} key={i}>
                        <img src={image} className="d-block w-100" alt="..."/>
                        <div className="image-overlay text-center">
                            <Link to={`/category/${mood.id}`} className="Link">{mood.name}</Link>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev">

            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="next">
            </button>
        </div>
    </div>);
}

