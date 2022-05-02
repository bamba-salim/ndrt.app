import React, {useEffect} from 'react';
import NavBar from "../atoms/navbar";
import {useNavigate} from "react-router-dom";
import NOTIFY from "../atoms/toast.tpl";
import {ViewTitre} from "../atoms/view.titre";
import SiteUtils from "../../ressources/utils/site.utils";
import Footer from "../atoms/footer";


function ViewsTpl({access = null, target = '/', className = '', children, titre = null, showTitre= true}) {
    const navigate = useNavigate();


    useEffect(() => {
        SiteUtils.title(titre ? titre : SiteUtils.siteNAme)

        NOTIFY.SUCCESS();
        NOTIFY.INFO()
    }, [titre])
    if (access != null ? !access : false) navigate(target);

    return (
        <div className="main-container">
            <div className="content-wrap">
                <NavBar/>
            <main className={`${className}`}>
                {(titre && showTitre) && <ViewTitre titre={titre}/>}

                {children}
            </main>
            </div>
            <Footer/>
        </div>
    );
}

export default ViewsTpl;
