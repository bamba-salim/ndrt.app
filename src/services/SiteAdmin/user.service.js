import {GET, POST} from "../web.service";

export default class UserService {
    static fetchAllUsers = () => {
        return GET('fetch-all-user')
    }

    static fetchUser(idUser) {
        return GET(`fetch-user/${idUser}`)
    }

    static saveUser(values) {
        return POST('sign-up', {loginFormBean: values})
    }

    static updateUser(userData) {
        return POST('update-user', {userDto: userData})
    }

    static signIn(values) {
        return POST('sign-in', {loginFormBean: values})
    }

    static signUp(values) {
        return POST('sign-up',{signUpFormBean: values})
    }

    static test() {
        return GET('test/1')
    }

    static testPost() {
        return POST('test-post', {salut: 100})
    }
}
