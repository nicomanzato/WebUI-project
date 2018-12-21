import {userState} from './../../../app/store/user/userReducer'
import * as selectors from './../../../app/store/user/userSelector';

let testState = {};

const generateTestUserState = () => {
  testState.UserReducer = userState;
  testState.UserReducer.userId = '111222333';
}

describe('user selector', () => {

  beforeEach(() => {
    generateTestUserState();
  });


  it('should select the user profile id', () => {
    expectedResult = '111222333';

    expect(selectors.getUserProfileId(testState)).toEqual(expectedResult);
  });

});
