import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ProductService from "../../../services/WebService/product.service";
import SubTpl from "../../../components/_template/sub.tpl";
import ListSingleTpl from "../../../components/_template/list.single.tpl";
import ProductSingleListSection from "../section/product.single.list.section";

const ProductListSub = () => {

    const [productsList, setProductsList] = useState();
    const {idCategory} = useParams()

    useEffect(() => {
        setProductsList(ProductService.fetchAllProductFull(idCategory))
    }, [idCategory])

    return (
        <SubTpl>
            <ListSingleTpl list={productsList} item_per_page={6} grid="row row-cols-2 row-cols-md-3 " component={ProductSingleListSection}/>
        </SubTpl>
    );
};

export default ProductListSub;