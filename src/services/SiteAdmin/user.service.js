import {GET, POST, PUT} from "../web.service";

export default class UserService {
    static fetchAllUsers = () => {
        return GET('fetch-all-user')
    }

    static fetchUser(idUser) {
        return GET(`fetch-user/${idUser}`)
    }

    static updateUser(userData) {
        return POST('update-user', {userDto: userData}) // todo: a revoir
    }

    static signIn(userData) {
        console.log(userData)
        return POST('sign-in', {loginFormBean: userData})
    }

    static signUp(values) {
        return POST('sign-up',{signUpFormBean: values})
    }

    static deleteUser(idUser) {
        return PUT('delete-user',{idUser: idUser})
    }

    static switchUserRole(idUser, isAdmin) {
        return POST('switch-user-role', {idUser: idUser, role: isAdmin})
    }
}
