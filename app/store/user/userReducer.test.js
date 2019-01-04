import UserReducer, {userState}  from './userReducer'
import * as actions from './userActions'
import UserProfileMock from './mock/userProfileMock'

describe('user reducer', () => {

  it('should return the initial state', () => {
    expect(UserReducer(undefined, {})).toEqual(userState);
  });

  it('should handle REQUEST_USER_PROFILE', () => {
    const userId = '111222333';
    const expectedResult = Object.assign({}, userState, {isLoadingUserProfile: true, userId: userId});

    expect(UserReducer(userState, {type: actions.REQUEST_USER_PROFILE, userId: '111222333'})).toEqual(expectedResult);
  });

  it('should handle SUCCESS_USER_PROFILE', () => {
    const userProfile = UserProfileMock;
    const expectedResult = Object.assign({}, userState, {isLoadingUserProfile: false, user: userProfile});

    expect(UserReducer(userState, {type: actions.SUCCESS_USER_PROFILE, data: userProfile})).toEqual(expectedResult);
  });

  it('should handle FAILURE_USER_PROFILE', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, userState, {hasFailed: true, failureError: errorMessage});

    expect(UserReducer(userState, {type: actions.FAILURE_USER_PROFILE, errorDetail: errorMessage})).toEqual(expectedResult);
  });
});
