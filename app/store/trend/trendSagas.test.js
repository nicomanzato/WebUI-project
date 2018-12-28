import { put, call, select } from 'redux-saga/effects'
import * as TrendSagas from './trendSagas'
import * as actions from './trendActions'
import MockTrend from './mock/TrendMock'

const MockPromise = {
  then: () => {},
  json: () => {
    foo: 'bar'
  }
};

const MockTrendList = [{trends: [MockTrend, MockTrend, MockTrend]}, 'testing', 'mock']

describe('trend sagas', () =>{
  it('should handle loadTrends', () => {
    const generator = TrendSagas.loadTrends();

    let next = generator.next();
    const url = `http://${TrendSagas.serverIP}/trends?id=23424747`;
    expect(next.value).toEqual(call(fetch, url));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(call([MockPromise, 'json']));

    next = generator.next(MockTrendList);
    expect(next.value).toEqual(put({ type: actions.SUCCESS_TRENDS_LOAD, data: MockTrendList[0].trends }));

    next = generator.next();
    expect(next.done).toBeTruthy();
  });

  it('should fail to handle loadTrends', () => {
    const generator = TrendSagas.loadTrends();

    let next = generator.next();
    const url = `http://${TrendSagas.serverIP}/trends?id=23424747`;
    expect(next.value).toEqual(call(fetch, url));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(call([MockPromise, 'json']));

    next = generator.throw('something bad happened');
    expect(next.value).toEqual(put({type: actions.FAILURE_TRENDS_LOAD, errorDetail: 'something bad happened'}));
  });
});
