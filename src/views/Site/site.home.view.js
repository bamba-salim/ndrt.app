import React from 'react';
import ViewsTpl from "../../components/_template/views.tpl";



function SiteHomeView() {
    return (
        <ViewsTpl className="container" titre={`Bienvenue sur ${process.env.REACT_APP_SITE_NAME}`}   >
        </ViewsTpl>
    );
}

export default SiteHomeView;
