import { AUTH } from './types';
import apiService from '../../services/apiService';
import { API } from '../../services/apiResource';
import history from '../../history/history';

const requestRunning = () => ({
    type: AUTH.RUNNING
})
const requestError = (error) => ({
    type: AUTH.ERROR,
    payload: error
})
const requestSuccess = (userdata) => ({
    type: AUTH.SUCCESS,
    payload: userdata
})
const requestTheme = (theme) => ({
    type: AUTH.LOADTHEME,
    payload: theme
})
export const changeTheme = (id, theme) => async (dishpatch) => {
    try {
        let datachange = {
            id: id,
            theme: theme
        }

        dishpatch(requestTheme(datachange.theme));
        let user = await apiService.get(API.AUTH.user + '/' + datachange.id);
        if (user.id === datachange.id) {
            apiService.put(API.AUTH.user + '/' + datachange.id, datachange);
        }
        else {
            let error = new Error("LOI");
            dishpatch(requestError(error.message));
        }
    } catch (error) {
        dishpatch(requestError(error.message));
    }
}
export const login = (username, password) => async (dishpatch) => {
    try {
        let datauser = {
            username: username,
            password: password
        }
        dishpatch(requestRunning(true));
        let users = await apiService.get(API.AUTH.user);
        //let t = [].findIndex
        if (users) {
            let user = users.find((user) => user.username === datauser.username && user.password === datauser.password);
            if (user) {
                dishpatch(requestSuccess(user));
                alert("Success");
                
                // history.push('/home');
            }
            else {
                dishpatch(requestError(users));
                history.push('/login');
                alert("!!!");
            }
        }
        else {
            throw users;
        }
    } catch (error) {
        dishpatch(requestError(error.message));
    }
}

// export const login = (username, password) => async (dishpatch) => {
//     try {
//         dishpatch(requestRunning(true));
//         let datauser = {
//             username: username,
//             password: password
//         }
//         apiService.get(API.AUTH.user)
//             .then(users => {
//                 let ab = await apiService.get(API.AUTH.user);
//                 console.log(ab);
//                 debugger

//                 // let a = [].find
//                 if (users) {
//                     let user = users.find((user) => user.username === datauser.username && user.password === datauser.password);
//                     if (user) {
//                         dishpatch(requestSuccess(user));
//                         alert("Success");
//                         history.push('/home');
//                     }
//                     else {
//                         var error = new Error("Tai khoan k ton tai");
//                         history.push('/login');
//                         dishpatch(requestError(error.message));
//                         alert(error.message);
//                     }
//                 } else {
//                     throw error;
//                 }
//             }).catch(error => dishpatch(requestError(error)))
//     } catch (error) {
//         dishpatch(requestError(error.message));
//     }
// }