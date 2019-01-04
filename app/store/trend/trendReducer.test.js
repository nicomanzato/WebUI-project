import TrendReducer, {trendState}  from './trendReducer'
import * as actions from './trendActions'
import TrendMock from './mock/trendMock'

describe('trend reducer', () => {

  it('should return the initial state', () => {
    expect(TrendReducer(undefined, {})).toEqual(trendState);
  });

  it('should handle REQUEST_TRENDS_LOAD', () => {
    const expectedResult = Object.assign({}, trendState, {loadingTrends: true});

    expect(TrendReducer(trendState, { type: actions.REQUEST_TRENDS_LOAD })).toEqual(expectedResult);
  });

  it('should handle SUCCESS_TRENDS_LOAD', () => {
    const trendList = [TrendMock, TrendMock, TrendMock];
    const expectedResult = Object.assign({}, trendState, {trends: trendList, loadingTrends: false});

    expect(TrendReducer(trendState, { type: actions.SUCCESS_TRENDS_LOAD, data: trendList })).toEqual(expectedResult);
  });

  it('should handle FAILURE_TRENDS_LOAD', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = Object.assign({}, trendState, {hasFailed: true, failureError: errorMessage});

    expect(TrendReducer(trendState, {type: actions.FAILURE_TRENDS_LOAD, errorDetail: errorMessage})).toEqual(expectedResult);
  });

  it('should handle RESET_TRENDS_LOAD', () => {
    const expectedResult = Object.assign({}, trendState, {trends: [], loadingTrends: false});

    expect(TrendReducer(trendState, {type: actions.RESET_TRENDS})).toEqual(expectedResult);
  });
});
