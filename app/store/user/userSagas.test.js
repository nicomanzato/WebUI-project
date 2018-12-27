import { put, call, select } from 'redux-saga/effects'
import * as UserSagas from './userSagas'
import * as actions from './userActions'
import * as userSelectors from './userSelector'

const MockPromise = {
  then: () => {},
  json: () => { return { foo: 'bar' }}
};

const NotAMockPromise = {
  then: () => {},
}

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
    expect(next.value).toEqual(call([MockPromise, 'json']));

    next = generator.next(MockPromise.json());
    expect(next.value).toEqual(put({type: actions.SUCCESS_USER_PROFILE, data: MockPromise.json()}));

    next = generator.next();
    expect(next.done).toBeTruthy();
  });
/*
  it('should fail to handle loadUserProfile', () => {
    const generator = UserSagas.loadUserProfile();

    let next = generator.next();
    expect(next.value).toEqual(select(userSelectors.getUserProfileId));
    const userProfileId = '11223344556677';

    next = generator.next(userProfileId);
    const url = `http://${UserSagas.serverIP}/user?id=${userProfileId}`;
    expect(next.value).toEqual(call(fetch,url));

    next = generator.next(NotAMockPromise);
    expect(next.done).toBeTruthy();
  })
*/
});
