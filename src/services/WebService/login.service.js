import {GET, POST, PUT} from "./web.service";

export default class LoginService {


    static signIn = (userData) => POST('sign-in', {loginFormBean: userData});

    static signUp = (values) => POST('sign-up', {signUpFormBean: values});

}
