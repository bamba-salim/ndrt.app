import React, {useEffect, useState} from 'react';
import ViewsTpl from "../../components/_template/views.tpl";
import {Link, useParams} from "react-router-dom";
import ProductService from "../../services/WebService/product.service";
import image from "../../ressources/assets/img/test.jpg";
import SiteUtils from "../../ressources/utils/site.utils";

function ProductHomeView() {

    const [product, setProduct] = useState({});
    const [photoShowed, setPhotoShowed] = useState({});
    const [photos, setPhotos] = useState([]);
    const {idProduct} = useParams();


    useEffect(() => {
        setProduct(ProductService.fetchProduct(idProduct))
        setPhotos(ProductService.fetchPhotos())
        setPhotoShowed(photos[0])

    }, [idProduct])


    const changePhoto = (pic) => {
        setPhotoShowed(pic)
    }
    return (
        <ViewsTpl className="container-md my-3" showTitre={false} titre={`${product.name}`}>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col col-md-6">
                    <div className="card h-100 rounded-0 border-0">
                        <div className={`image mb-3 `}>
                            <img src={photoShowed} className="d-block" alt="..."/>
                        </div>
                        <div className="row row-cols-4">
                            {photos.map((pic, i) => (
                                <div className="card border-0" key={i} onClick={() => changePhoto(pic)}>
                                    <figure className="image w-100 m-0">
                                        <img className="p-0" src={pic} alt="" width=""/>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="div">
                    <div className="card h-100 rounded-0">
                        <div className="card-body p-3 p-md-5 m-0">
                            <div className="d-flex justify-content-between align-items-center flex-column flex-md-row w-100">
                                    <h2 className="d-block  w-100 card-title h1 fw-bold m-0 text-gold">{product.name}</h2>

                                    <p className="d-block w-100 align-middle h3 fw-lighter m-0 fst-italic text-gold text-md-center">{SiteUtils.formatNumberToPrice(product.price)}</p>

                            </div>
                            <p className="small">color - SKU</p>
                            <p className="small">Composition</p>
                            <p className="small">Description</p>

                        </div>
                        <div className="card-footer border-0 d-flex bg-none justify-content-end">
                            ajouter au panier
                        </div>
                    </div>
                </div>


            </div>
        </ViewsTpl>
    );
}

export default ProductHomeView;