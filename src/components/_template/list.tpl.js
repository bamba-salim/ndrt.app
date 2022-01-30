import React, {useState} from 'react';
import BlockCmn from "../_commons/block-cmn";
import Pagination from "../atoms/pagination";

const ListTpl = ({component: Component, list = [], item_per_page = 10}) => {

        const [current_page, setCurrent_page] = useState(1);

        function changePage(number) {
            setCurrent_page(number);
        }

        const i_last_item = current_page * item_per_page;
        const i_first_item = i_last_item - item_per_page
        const current_items = list.slice(i_first_item, i_last_item)

        return (
            <BlockCmn classname="my-3">
                <Component list={current_items}/>
                <Pagination itemPerPage={item_per_page} totalItems={list.length} changePage={changePage} currentPage={current_page}/>
            </BlockCmn>
        );
    }
;

export default ListTpl;
