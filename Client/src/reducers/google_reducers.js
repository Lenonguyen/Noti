import { GOOGLE_AUTH } from 'actions/';

export default function(state = {}, action) {
  switch (action.type) {
     case GOOGLE_AUTH:
          return action.payload || false;
     default:
          return state;
}
}
