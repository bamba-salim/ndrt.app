import React, {useEffect, useState} from 'react';
import ProductService from "../../../services/WebService/product.service";
import SubTpl from "../../../components/_template/sub.tpl";
import ListSingleTpl from "../../../components/_template/list.single.tpl";
import CategorySingleListSection from "../section/category.single.list.section";
import BlockCmn from "../../../components/_commons/block.cmn";
import {Link} from "react-router-dom";

function CategoryListSub() {

    const [categoriesList, setCategoriesList] = useState([])
    useEffect(() => {
        setCategoriesList(ProductService.MOOD)
    }, [])

    return (
        <SubTpl className="my-3">
            <BlockCmn className="block mb-3 p-5" >
                <div className="block-overlay bg-dark">
                    <Link className="Link text-gold" to="/category/all">Tous les produits</Link>
                </div>
            </BlockCmn>
            <ListSingleTpl list={categoriesList} component={CategorySingleListSection} grid="row row-cols-2 row-cols-md-3 row-cols-lg-6" />
        </SubTpl>
    );
}

export default CategoryListSub;