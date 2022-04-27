import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterService from "./services/Routing/router.service";
import './ressources/styles/App.scss';
import {toast} from "react-toastify";

toast.configure()

const App = () => (<RouterService/>);
export default App;
