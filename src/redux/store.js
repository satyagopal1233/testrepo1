import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import userLibraryReducer from '../userLibrary/userLibraryReducer';



const store = createStore(userLibraryReducer,applyMiddleware(thunk));
export default store;