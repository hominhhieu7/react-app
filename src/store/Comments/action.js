import { COMMENTS } from './types';
import apiService from '../../services/apiService';
import { API } from '../../services/apiResource';

const requestRunning = () => ({
    type: COMMENTS.RUNNING
})
const requestError = (error) => ({
    type: COMMENTS.ERROR,
    payload: error
})
const requestSuccess = (dataComments) => ({
    type: COMMENTS.SUCCESS,
    payload: dataComments
})
const requestSearch = (search) => ({
    type: COMMENTS.SEARCH,
    payload: search
})

export const CommentsLoad = () => async (dishpatch) => {
    try {
        dishpatch(requestRunning);
        let dataComments = await apiService.get(API.COMMENTS.comment);
        if (dataComments) {
            dishpatch(requestSuccess(dataComments));
        }
        else {
            let error = new Error("Loi!!!");
            throw error.message;
        }

    } catch (error) {
        dishpatch(requestError(error));
    }
}
export const Search = (search) => async (dishpatch) => {
    try {
        if(search.length === 0){
            alert("K tim thay");
        }
        else{
            dishpatch(requestSearch(search));
        }
    } catch (error) {
        dishpatch(requestError(error))
    }
}