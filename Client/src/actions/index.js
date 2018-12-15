import axios from 'axios';

export const GOOGLE_AUTH = 'google_auth';

export const googleAuth = () => async dispatch => {
     const res = await axios.get('/api/current_user');
     dispatch({ type: GOOGLE_AUTH, payload: res.data});
     console.log(res.data);
};
