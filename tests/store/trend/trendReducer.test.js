import TrendReducer, {trendState}  from './../../../app/store/trend/trendReducer'
import * as actions from './../../../app/store/trend/trendActions'
import TrendMock from './trendMock'

describe('trend reducer', () => {

  it('should return the initial state', () => {
    expect(TrendReducer(undefined, {})).toEqual(trendState);
  });

  it('should handle REQUEST_TRENDS_LOAD', () => {
    const expectedResult = Object.assign({}, trendState, {loadingTrends: true});

    expect(TrendReducer(trendState, actions.requestTrendsLoad())).toEqual(expectedResult);
  });

  it('should handle SUCCESS_TRENDS_LOAD', () => {
    const trendList = [TrendMock, TrendMock, TrendMock];
    const expectedResult = Object.assign({}, trendState, {trends: trendList, loadingTrends: false});

    expect(TrendReducer(trendState, actions.successTrendsLoad(trendList))).toEqual(expectedResult);
  });

  it('should handle FAILURE_TRENDS_LOAD', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, trendState, {hasFailed: true, failureError: errorMessage});

    expect(TrendReducer(trendState, actions.failureTrendsLoad(errorMessage))).toEqual(expectedResult);
  });

  it('should handle RESET_TRENDS_LOAD', () => {
    const expectedResult = Object.assign({}, trendState, {trends: [], loadingTrends: false});

    expect(TrendReducer(trendState, actions.resetTrends())).toEqual(expectedResult);
  });
});
