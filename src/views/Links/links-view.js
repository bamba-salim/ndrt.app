import React, {Component} from 'react';
import ViewsTpl from "../../components/_template/views-tpl";
import {Link, Outlet} from "react-router-dom";
import BlockCmn from "../../components/_commons/block-cmn";
import LinksService from "../../services/Links/links-service";
import {ViewTitre} from "../../components/atoms/view-titre";

class LinksView extends Component {

    state = {
        typeList: []
    }

    componentDidMount() {
        LinksService.initAddLinksData()
            .then(res => {
                this.setState({typeList: res.linksTypeList});
            })
    }

    render() {
        return (
            <ViewsTpl classname={"container"}>
                <ViewTitre titre={'Les différents liens utiles'}/>
                <div className="row">
                    <nav className="col nav">
                        <Link className="nav-link" to="/liens-utiles">Revenir</Link>

                        {this.state.typeList && this.state.typeList.map((linkType, index) => (
                                <Link key={index} className="nav-link" to={`${linkType.id}`}>{linkType.name}</Link>
                        ))}

                    </nav>
                    <nav className="col nav justify-content-end text-end">
                        <Link className="nav-link" to="ajouter-liens">+ Ajouter</Link>
                    </nav>
                </div>
                <BlockCmn classname="border p-3" >
                    <Outlet/>
                </BlockCmn>
            </ViewsTpl>
        );
    }
}

export default LinksView;
