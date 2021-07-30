import axios from "axios";
import { FETCH_USERLIBRARY_FAILURE, FETCH_USERLIBRARY_REQUEST, FETCH_USERLIBRARY_SUCCESS } from "./userLibraryTypes";

export const fetchUserLibraryRequest = () => {
    return {
        type:FETCH_USERLIBRARY_REQUEST
    };
};
export const fetchUserLibrarySuccess = (userLibrary) => {
    return {
        type:FETCH_USERLIBRARY_SUCCESS,
        payload:userLibrary
    };
};
export const fetchUserLibraryFailure = (error) => {
    return {
        type:FETCH_USERLIBRARY_FAILURE,
        payload:error
    };
};
export const fetchUserLibrary = () => {
    return (dispatch) => {
        console.log("g1");
        dispatch(fetchUserLibraryRequest());
        axios.get('http://localhost:8080/userLibrary/5')
        .then((response) => {
           
            const userLibrary = response.data;
            dispatch(fetchUserLibrarySuccess(userLibrary));

        })
        .catch((error) => {
           
            console.log(error.message);
            const errorMessage = error.message;
            dispatch(fetchUserLibraryFailure(errorMessage));

        });
    };
};