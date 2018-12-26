import { put, call, select } from 'redux-saga/effects'
import * as UserSagas from './userSagas'
import * as actions from './userActions'
import * as userSelectors from './userSelector'

const MockPromise = {
  then: () => {},
  json: () => {
    foo: 'bar'
  }
};

describe('user sagas', () => {

  it('should handle loadUserProfile', () => {
    const generator = UserSagas.loadUserProfile();

    let next = generator.next();
    expect(next.value).toEqual(select(userSelectors.getUserProfileId));
    const userProfileId = '11223344556677';

    next = generator.next(userProfileId);
    const url = `http://${UserSagas.serverIP}/user?id=${userProfileId}`;
    expect(next.value).toEqual(call(fetch,url));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(call([next.value.CALL.context, 'json']));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(put(next.value.PUT.action));
  });

});
