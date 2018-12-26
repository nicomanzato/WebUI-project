import * as actions from './configurationActions'
import {
  CONFIG_TOGGLE_VERIFIED_ONLY,
  CONFIG_TOGGLE_DO_NOT_FOLLOW,
  CONFIG_TOGGLE_HAVE_DEFAULT_INFORMATION,
  CONFIG_TOGGLE_CONTAINS_LINK,
  CONFIG_TOGGLE_TEXT_TRUNCATED
} from './configurationActions'

describe('configuration actions', () => {

  it('should generate CONFIG_TOGGLE_VERIFIED_ONLY', () => {
    const expectedResult = {type: CONFIG_TOGGLE_VERIFIED_ONLY};

    expect(actions.configToggleVerifiedOnly()).toEqual(expectedResult);
  });

  it('should generate CONFIG_TOGGLE_DO_NOT_FOLLOW', () => {
    const expectedResult = {type: CONFIG_TOGGLE_DO_NOT_FOLLOW};

    expect(actions.configToggleDoNotFollow()).toEqual(expectedResult);
  });

  it('should generate CONFIG_TOGGLE_HAVE_DEFAULT_INFORMATION', () => {
    const expectedResult = {type: CONFIG_TOGGLE_HAVE_DEFAULT_INFORMATION};

    expect(actions.configToggleHaveDefaultInformation()).toEqual(expectedResult);
  });

  it('should generate CONFIG_TOGGLE_CONTAINS_LINK', () => {
    const expectedResult = {type: CONFIG_TOGGLE_CONTAINS_LINK};

    expect(actions.configToggleContainsLink()).toEqual(expectedResult);
  });

  it('should generate CONFIG_TOGGLE_TEXT_TRUNCATED', () => {
    const expectedResult = {type: CONFIG_TOGGLE_TEXT_TRUNCATED};

    expect(actions.configToggleTextTruncated()).toEqual(expectedResult);
  });

});
