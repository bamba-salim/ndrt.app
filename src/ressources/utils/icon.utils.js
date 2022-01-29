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

export default class ICON {
    static LOGIN = (<FontAwesomeIcon icon={faSignInAlt}/>);
    static LOGOUT = (<FontAwesomeIcon icon={faSignOutAlt}/>);
    static CART = (<FontAwesomeIcon icon={faShoppingCart}/>);
    static SEARCH = (<FontAwesomeIcon icon={faSearch}/>);
    static MENU = (<FontAwesomeIcon icon={faBars}/>);
    static USER = (<FontAwesomeIcon icon={faUser}/>);
    static CLOSE = (<FontAwesomeIcon icon={faTimes}/>);
    static NAV_LEFT = (<FontAwesomeIcon icon={faChevronLeft}/>);
    static NAV_RIGHT = (<FontAwesomeIcon icon={faChevronRight}/>);
}



