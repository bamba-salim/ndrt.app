import React, {useState} from 'react';
import BlockCmn from "../_commons/block.cmn";
import Pagination from "../atoms/pagination";
import HrCmn from "../_commons/hr.cmn";

function ListSingleTpl({
                           titre = '',
                           className = '',
                           component: Component,
                           list = [],
                           item_per_page = 10,
                           emptyMessage = "La list est vide !",
                           setList = null,
                           pagination = true,
                           children = null,
                           childreClassName = ""
                       }) {

    const [current_page, setCurrent_page] = useState(1);

    function changePage(number) {
        setCurrent_page(number);
    }

    const i_last_item = current_page * item_per_page;
    const i_first_item = i_last_item - item_per_page
    const current_items = pagination > 0 ? list.slice(i_first_item, i_last_item) : list;

    return (
        <BlockCmn className={`my-3 ${className}`}>
            {titre && (<>
                <div className="card-header  rounded-0 bg-white d-flex justify-content-between pt-3 pb-0">
                    <h3>{titre}</h3>
                    <span className="d-block align-top">{list.length} résultat(s)</span>
                </div>
            </>)}
            <div className="card-body border-0 rounded-0">
                {list.length > 0 && (<>
                    {current_items.map((item, i) => (<Component item={item} key={i}/>))}

                    {pagination && (
                        <Pagination itemPerPage={item_per_page} totalItems={list.length} changePage={changePage}
                                    currentPage={current_page}/>)}
                </>)}
                {list.length === 0 && (<h3>{emptyMessage}</h3>)}
            </div>
            {children && (<>
                <div className={`card-footer bg-white rounded-0 shadow-sm ${childreClassName}`}>
                    {children}
                </div>
            </>)}


        </BlockCmn>
    );
}

export default ListSingleTpl;
