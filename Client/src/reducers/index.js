import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import Auth from './google_reducers';

const rootReducer = combineReducers({
      auth: Auth,
      form: reduxForm
});

export default rootReducer;
