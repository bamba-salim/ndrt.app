import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterService from "./services/Routing/router.service";
import './ressources/styles/App.scss';
import {toast} from "react-toastify";
toast.configure()

function App() {
    return (
        <>
            <RouterService/>
        </>

    );
}

export default App;
