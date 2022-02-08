import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

export default class NOTIFY {
    static SUCCESS = () => {

        if (localStorage.getItem('success')) {
            ToastTpl.SUCCESS(localStorage.getItem('success'))
            localStorage.removeItem('success')

        }

    }
    static INFO = () => {

        if (localStorage.getItem('info')) {
            ToastTpl.INFO(localStorage.getItem('info'))
            localStorage.removeItem('info')

        }

    }
}

export class ToastTpl {
    static SUCCESS = (message) => {

        toast.success(message, {
            className: 'bg-success fw-bolder bg-opacity-75 text-white',
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });


    }

    static INFO = (message) => {

        toast.info(message, {
            className: 'bg-info fw-bolder bg-opacity-75 text-white',
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }


    static ERROR = (message) => {

        toast.error(message, {
            className: 'bg-danger fw-bolder text-white',
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }
}
