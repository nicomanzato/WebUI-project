import TrendReducer, {trendState}  from './trendReducer'
import * as actions from './trendActions'
import {
  REQUEST_TRENDS_LOAD,
  SUCCESS_TRENDS_LOAD,
  FAILURE_TRENDS_LOAD,
  RESET_TRENDS,
} from "./trendActions"

import TrendMock from './mock/trendMock'

describe('trend actions', () => {

  it('should generate REQUEST_TRENDS_LOAD', () => {
    const expectedResult = {type: REQUEST_TRENDS_LOAD}

    expect(actions.requestTrendsLoad()).toEqual(expectedResult);
  });

  it('should generate SUCCESS_TRENDS_LOAD', () => {
    const trendList = [TrendMock, TrendMock, TrendMock];
    const expectedResult = { type: SUCCESS_TRENDS_LOAD, data: trendList };

    expect(actions.successTrendsLoad(trendList)).toEqual(expectedResult);
  });

  it('should generate FAILURE_TRENDS_LOAD', () => {
    const errorMessage = 'something bad happened';
    const expectedResult = {type: FAILURE_TRENDS_LOAD, errorDetail: errorMessage};

    expect(actions.failureTrendsLoad(errorMessage)).toEqual(expectedResult);
  });

  it('should generate RESET_TRENDS', () => {
    const expectedResult = {type: RESET_TRENDS};

    expect(actions.resetTrends()).toEqual(expectedResult);
  });

});
