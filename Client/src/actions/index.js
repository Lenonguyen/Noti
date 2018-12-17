import axios from 'axios';

export const GOOGLE_AUTH = 'google_auth';
export const SEARCH_NOTI = 'google_auth';

export async function googleAuth() {
     const res = await axios.get('/api/current_user');
     console.log(res.data);
     return {
       type: GOOGLE_AUTH, payload: res.data
     };
};

export function searchNoti(values) {
    const data = values;
    return {
      type: SEARCH_NOTI, payload: data
    };
};
