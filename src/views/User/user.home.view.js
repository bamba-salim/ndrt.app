import React from 'react';
import ViewsTpl from "../../components/_template/views.tpl";
import AuthService from "../../services/Routing/auth.service";

function UserHomeView() {
    return (
        <ViewsTpl titre="Mon Tableau de bord">
            {JSON.stringify(AuthService.User)}
            <p>todo: recuper info profile</p>
            <p>todo: récupere tout mes reserations</p>
        </ViewsTpl>
    );
}

export default UserHomeView;
