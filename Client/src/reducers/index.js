import { combineReducers } from 'redux';
import Auth from './google_reducers';

const rootReducer = combineReducers({
      auth: Auth
});

export default rootReducer;
