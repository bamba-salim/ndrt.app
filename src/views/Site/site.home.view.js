import React from 'react';
import ViewsTpl from "../../components/_template/views.tpl";
import image from '../../ressources/assets/img/test.jpg'
import {ProdcutHomeGallerySection, ProdcutHomeGallerySlider} from "../Product/section/prodcut.home.gallery.section";

function SiteHomeView() {
    return (
        <ViewsTpl className="container-lg p-0">
            <ProdcutHomeGallerySection/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iure nobis quos soluta. Adipisci, eveniet,
            facere. Architecto eos exercitationem itaque neque, pariatur vitae voluptate? Beatae exercitationem incidunt
            natus nihil soluta?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iure nobis quos soluta. Adipisci, eveniet,
            facere. Architecto eos exercitationem itaque neque, pariatur vitae voluptate? Beatae exercitationem incidunt
            natus nihil soluta?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iure nobis quos soluta. Adipisci, eveniet,
            facere. Architecto eos exercitationem itaque neque, pariatur vitae voluptate? Beatae exercitationem incidunt
            natus nihil soluta?
        </ViewsTpl>
    );
}

export default SiteHomeView;
