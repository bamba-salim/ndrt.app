import React, {useEffect, useState} from 'react';
import ViewsTpl from "../../components/_template/views.tpl";
import {Outlet} from "react-router-dom";


function CategoryHomeView() {


    return (
        <ViewsTpl className="container">
            <Outlet/>
        </ViewsTpl>

    );
}

export default CategoryHomeView;