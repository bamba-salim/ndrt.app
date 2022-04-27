import React, {useEffect, useState} from 'react';
import ViewsTpl from "../../components/_template/views.tpl";
import {useParams} from "react-router-dom";
import ProductService from "../../services/WebService/product.service";

function ProductHomeView() {

    const [product, setProduct] = useState({});
    const {idProduct} = useParams();

    useEffect(() => {
        setProduct(ProductService.fetchProduct(idProduct))
    }, [idProduct])
    return (
        <ViewsTpl>
            {JSON.stringify(product)}
        </ViewsTpl>
    );
}

export default ProductHomeView;