import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return action.payload;
    default:
      return state;
  }
};
