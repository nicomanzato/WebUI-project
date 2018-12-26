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

const MockTrendList = [[MockTrend, MockTrend, MockTrend], 'testing', 'mock']

describe('trend sagas', () =>{
  it('should handle loadTrends', () => {
    const generator = TrendSagas.loadTrends();

    let next = generator.next();
    const url = `http://${TrendSagas.serverIP}/trends?id=23424747`;
    expect(next.value).toEqual(call(fetch, url));

    next = generator.next(MockPromise);
    expect(next.value).toEqual(call([next.value.CALL.context, 'json']));

    next = generator.next(MockTrendList);
    expect(next.value).toEqual(put(next.value.PUT.action));
  });
});
