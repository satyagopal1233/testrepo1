import { FETCH_USERLIBRARY_REQUEST, FETCH_USERLIBRARY_SUCCESS,FETCH_USERLIBRARY_FAILURE } from "./userLibraryTypes";

const initialState = {
    loading:false,
    userLibrary:[],
    error:''
};
const userLibraryReducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_USERLIBRARY_REQUEST:{
            return {
                ...state,
                loading:true
            };
        }
        case FETCH_USERLIBRARY_SUCCESS:{
            return {
                loading:false,
                userLibrary: action.payload,
                error:''


            };
        }    
        case FETCH_USERLIBRARY_FAILURE:{
            return {
                loading:false,
                userLibrary:[],
                error:action.payload
            };
         
        }
        default: return state;
    }

};
export default userLibraryReducer;