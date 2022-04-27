import React from 'react';
import image from "../../../ressources/assets/img/test.jpg";
import {Link} from "react-router-dom";

export function ProdcutHomeGallerySection() {
    return (
        <div className="d-none d-sm-block my-4 mx-sm-4 mx-lg-0">
            <div className="row row-cols-2 row-cols-lg-4 gx-4">
                <div className="col-6">
                    <figure className="image">
                        <img className="" src={image} alt="" width=""/>
                        <div className="image-overlay text-center">
                            <Link to={`/category/${1}`} className="Link text-">
                                Catégorie
                            </Link>
                        </div>
                    </figure>
                </div>
                <div className="col-6">
                    <figure className="image">
                        <img className="" src={image} alt="" width=""/>
                        <div className="image-overlay text-center">
                            <Link to={`/category/${2}`} className="Link text-">
                                Catégorie
                            </Link>
                        </div>
                    </figure>
                </div>
                <div className="col-6">
                    <figure className="image">
                        <img className="" src={image} alt="" width=""/>
                        <div className="image-overlay text-center">
                            <Link to={`/category/${3}`} className="Link text-">
                                Catégorie
                            </Link>
                        </div>
                    </figure>
                </div>
                <div className="col-6">
                    <figure className="image">
                        <img className="" src={image} alt="" width=""/>
                        <div className="image-overlay text-center">
                            <Link to={`/category/${4}`} className="Link text-">
                                Catégorie
                            </Link>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export function ProdcutHomeGallerySlider() {
    return (<div>
        <div id="carouselExampleFade" className="d-sm-none carousel slide carousel-fade p-0 m-0"
             data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item image active">
                    <img src={image} className="d-block w-100" alt="..."/>
                    <div className="image-overlay text-center">
                        <Link to={`/category/${1}`} className="Link">1</Link>
                    </div>
                </div>
                <div className="carousel-item image">
                    <img src={image} className="d-block w-100" alt="..."/>
                    <div className="image-overlay text-center">
                        <Link to={`/category/${2}`} className="Link">2</Link>
                    </div>
                </div>
                <div className="carousel-item image">
                    <img src={image} className="d-block w-100" alt="..."/>
                    <div className="image-overlay text-center">
                        <Link to={`/category//${3}`} className="Link">3</Link>
                    </div>
                </div>
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

