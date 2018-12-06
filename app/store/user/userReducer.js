import {
  REQUEST_USER_PROFILE,
  SUCCESS_USER_PROFILE,
  FAILURE_USER_PROFILE,
} from './userActions'

let userState = {
  user: {},
  userId: -1,
  isLoadingUserProfile: false,
}

const UserReducer =  (state = userState, action) => {
  switch(action.type) {
    case REQUEST_USER_PROFILE:
      state = Object.assign({}, state, {isLoadingUserProfile: true, userId: action.userId});
      return state;
    case SUCCESS_USER_PROFILE:
      state = Object.assign({}, state, {isLoadingUserProfile: false, user: action.data});
      return state;
    case FAILURE_USER_PROFILE:
      state = Object.assign({}, state, {});
      return state;
    default:
      return state;
  }
}

export default UserReducer;
