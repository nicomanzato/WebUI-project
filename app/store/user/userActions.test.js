import UserReducer, {userState}  from './userReducer'
import * as actions from './userActions'
import {
  REQUEST_USER_PROFILE,
  SUCCESS_USER_PROFILE,
  FAILURE_USER_PROFILE
} from "./userActions"

import UserProfileMock from './mock/userProfileMock'

describe('user actions', () => {

  it('should generate REQUEST_USER_PROFILE', () => {
    const expectedResult = {type: REQUEST_USER_PROFILE}

    expect(actions.requestUserProfile()).toEqual(expectedResult);
  });

  it('should generate SUCCESS_USER_PROFILE', () => {
    const expectedResult = {type: SUCCESS_USER_PROFILE, data: UserProfileMock};

    expect(actions.successUserProfile(UserProfileMock)).toEqual(expectedResult);
  });

  it('should generate FAILURE_TRENDS_LOAD', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = {type: FAILURE_USER_PROFILE, errorDetail: errorMessage};

    expect(actions.failureUserProfile(errorMessage)).toEqual(expectedResult);
  });
  
});
