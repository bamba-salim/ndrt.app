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
    faChevronLeft, faPen, faTrash, faUserShield, faChevronDown, faChevronUp, faExclamationCircle
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
    static NAV_UP = (<FontAwesomeIcon icon={faChevronUp}/>);
    static NAV_DOWN = (<FontAwesomeIcon icon={faChevronDown}/>);
    static EDIT = (<FontAwesomeIcon icon={faPen}/>)
    static DELETE = (<FontAwesomeIcon icon={faTrash}/>)
    static ADMIN = (<FontAwesomeIcon icon={faUserShield}/>)
    static WARNING = (<FontAwesomeIcon icon={faExclamationCircle}/>)
}



