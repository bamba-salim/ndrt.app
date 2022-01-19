import React, {Component} from 'react';
import {SubViewTitre} from "../../components/atoms/view-titre";
import BlockCmn from "../../components/_commons/block-cmn";
import LinksService from "../../services/Links/links-service";
import AddLinkForm from "./forms/add-link-form";
import {Navigate} from "react-router-dom";


class AddLinkSubView extends Component {

    state = {
        typeList: [],
        domaineList: [],
        isCreated: false,
        link: {}
    }

    componentDidMount() {
        LinksService.initAddLinksData()
            .then(res => {
                this.setState({typeList: res.linksTypeList, domaineList: res.linksDomaineList});
                if (res.error) console.log(res.data)
            })
    }

    saveLink = (link) => {
        LinksService.saveLink(link)
            .then(res => {
                console.log(res.link)
                if (res.success.code === 200) {
                    this.setState({link: res.link, isCreated: true});
                }
            })
    }

    render() {
        if (this.state.isCreated) return <Navigate to={`/liens-utiles/${this.state.link.type.id}`}/>; // todo: redirect with type id

        return (
            <>
                <SubViewTitre classname="bg-black text-white border-0" titre="Ajouter un nouveau lien"/>
                <BlockCmn>

                    <AddLinkForm typeList={this.state.typeList} domaineList={this.state.domaineList}
                                 submitLink={this.saveLink}/>
                </BlockCmn>

            </>
        );
    }
}

export default AddLinkSubView;
