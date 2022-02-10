import React, {useEffect} from 'react';
import NavBar from "../atoms/nav-bar";
import {useNavigate} from "react-router-dom";
import NOTIFY from "../atoms/toast.tpl";
import {ViewTitre} from "../atoms/view.titre";
import SiteUtils from "../../ressources/utils/site.utils";


function ViewsTpl({access = null, target = '/', className = '', children, titre = null}) {
    const navigate = useNavigate();


    useEffect(() => {
        SiteUtils.title(titre)

        NOTIFY.SUCCESS();
        NOTIFY.INFO()
    }, [titre])
    if (access != null ? !access : false) navigate(target);

    return (<>
        <header>
            <NavBar/>
        </header>
        <main className={`py-3 ${className}`}>
            {titre && <ViewTitre titre={titre}/>}

            {children}
        </main>
        <footer>
            FOOTER
        </footer>
    </>);
}

export default ViewsTpl;
