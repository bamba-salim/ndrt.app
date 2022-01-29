export const sessionUser = localStorage.getItem('user');
export const IsLoggedIn = sessionUser != null;
export const IsUnLoggedIn = !IsLoggedIn;
export const User = IsLoggedIn ? JSON.parse(sessionUser) : {}
export let IsAdmin = IsLoggedIn ? User.isAdmin : false

class AuthService {

    static IsAdmin = IsLoggedIn ? User.isAdmin : false
    static sessionUser = localStorage.getItem('user');
    static IsLoggedIn = sessionUser != null;
    static IsUnLoggedIn = !IsLoggedIn;
    static User = IsLoggedIn ? JSON.parse(sessionUser) : {}

    static IsUserOrAdmin = (idUser) => idUser === User.id || IsAdmin

    static ShowIf = (condition) => !condition ? "d-none" : "";

}

export default AuthService

export const ShowIf = (condition) => {
    return !condition ? "d-none" : "";
}


