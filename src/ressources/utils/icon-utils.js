import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faSignInAlt,
    faSignOutAlt,
    faSearch,
    faBars,
    faUser,
    faTimes,
    faChevronRight,
    faChevronLeft
} from "@fortawesome/free-solid-svg-icons";


export const I_LOGIN = (<FontAwesomeIcon icon={faSignInAlt}/>);
export const I_LOGOUT = (<FontAwesomeIcon icon={faSignOutAlt}/>);
export const I_CART = (<FontAwesomeIcon icon={faShoppingCart}/>);
export const I_SEARCH = (<FontAwesomeIcon icon={faSearch}/>);
export const I_MENU = (<FontAwesomeIcon icon={faBars}/>);
export const I_USER = (<FontAwesomeIcon icon={faUser}/>);
export const I_CLOSE = (<FontAwesomeIcon icon={faTimes}/>);
export const I_NAV_LEFT = (<FontAwesomeIcon icon={faChevronLeft}/>);
export const I_NAV_RIGHT = (<FontAwesomeIcon icon={faChevronRight}/>);

