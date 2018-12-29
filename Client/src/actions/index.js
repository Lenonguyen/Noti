import axios from 'axios';

export const GOOGLE_AUTH = 'google_auth';
export const SEARCH_NOTI = 'google_auth';
export const FETCH_DISCUSSION = 'fetch_discussion';
export const FETCH_DISCUSSIONS = 'fetch_discussions';
export const DELETE_DISCUSSION = 'delete_discussion';
export const POST_DISCUSSION = 'post_discussion';
export const UPDATE_DISCUSSION = 'update_discussion';

export async function googleAuth() {
     const resquest = await axios.get('/api/current_user');
     return {
       type: GOOGLE_AUTH,
       payload: resquest.data
     };
};

export function searchNoti(values) {
    const request = values;
    return {
      type: SEARCH_NOTI,
      payload: request
    };
};

export function postDiscussion(values, callback) {
    const request = axios.post('/api/blogs', values).then( () => callback());

    return {
      type: POST_DISCUSSION,
      payload: request
    };
};

export function updateDiscussion(id ,values, callback) {
    const request = axios.put(`/api/blogs/:${id}`, values).then( () => callback());

    return {
      type: UPDATE_DISCUSSION,
      payload: request
    };
};


export function fetchDiscussions() {
    const request = axios.get('/api/posts');

    return {
        type: FETCH_DISCUSSIONS,
        payload: request
    };
};

export function fetchDiscussion(id) {
    const request = axios.get(`/api/blogs/:${id}`);

    return {
        type: FETCH_DISCUSSION,
        payload: request
    }
}

export function deleteDiscussion(id) {
    const request = axios.delete(`/api/blogs/:${id}`);

    return {
        type: DELETE_DISCUSSION,
        payload: request
    }
}
