import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {SubViewTitre} from "../../components/atoms/view-titre";
import BlockCmn from "../../components/_commons/block-cmn";
import LinksService from "../../services/Links/links-service";
import SiteUtils from "../../ressources/utils/site-utils";
import ErrorsParamsSubView from "../Site/ERRORS/errors-params-sub-view";
import TypeLinksList from "./modals/type-links-list";
import Pagination from "../../components/atoms/pagination";

export default function LinkListByTypeSubView() {
    const {id} = useParams()
    const [linksList, setLinkList] = useState();
    const [typeLink, setTypeLink] = useState();

    // pagination
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 15;


    useEffect(() => {
        if (SiteUtils.isParamsNumber(id)) {
            setLoading(true)
            LinksService.fetchLinkByType(id).then(res => {
                setLoading(false)

                setLinkList(res.typeLinksList) // data
                setTypeLink(res.type)
            })
        }
    }, [id])

    function changePage (number) {
        setCurrentPage(number)
    }

    if (SiteUtils.isParamsNumber(id) && typeLink) {
        const i_last_item = currentPage * itemPerPage;
        const i_first_item = i_last_item - itemPerPage;
        const current_items = linksList.slice(i_first_item, i_last_item)

        return (
            <>
                <SubViewTitre classname="bg-black text-white border-0" titre={`Les liens de ${typeLink.name}`}/>
                <BlockCmn classname="my-3">
                    <div className="row fw-bolder ">
                        <div className="col-2">Nom</div>
                        <div className="col-3">Domaine</div>
                        <div className="col-4">Description</div>
                        <div className="col">date</div>
                        <div className="col text-end">Action</div>
                    </div>
                    <hr className="fw-bolder my-0"/>
                    <TypeLinksList links={current_items} loading={loading}/>
                    <Pagination itemPerPage={itemPerPage} totalItems={linksList.length} changePage={changePage} currentPage={currentPage}/>
                </BlockCmn>
            </>
        );
    } else {
        return (<>
            <ErrorsParamsSubView/>
        </>)
    }


}

