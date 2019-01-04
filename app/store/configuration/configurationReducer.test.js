import ConfigurationReducer, {configurationState}  from './configurationReducer'
import * as actions from './configurationActions'

describe('configuration reducer', () => {

  it('should return the initial state', () => {
    expect(ConfigurationReducer(undefined, {})).toEqual(configurationState);
  });

  it('should handle CONFIG_TOGGLE_VERIFIED_ONLY', () => {
    const expectedResult = Object.assign({}, configurationState, { configVerifiedOnly: !configurationState.configVerifiedOnly });

    expect(ConfigurationReducer(configurationState, {type: actions.CONFIG_TOGGLE_VERIFIED_ONLY})).toEqual(expectedResult);
  });

  it('should handle CONFIG_TOGGLE_DO_NOT_FOLLOW', () => {
    const expectedResult = Object.assign({}, configurationState, { configDoNotFollow: !configurationState.configDoNotFollow });

    expect(ConfigurationReducer(configurationState, {type: actions.CONFIG_TOGGLE_DO_NOT_FOLLOW})).toEqual(expectedResult);
  });

  it('should handle CONFIG_TOGGLE_HAVE_DEFAULT_INFORMATION', () => {
    const expectedResult = Object.assign({}, configurationState, { configHaveDefaultInformation: !configurationState.configHaveDefaultInformation });

    expect(ConfigurationReducer(configurationState, {type: actions.CONFIG_TOGGLE_HAVE_DEFAULT_INFORMATION})).toEqual(expectedResult);
  });

  it('should handle CONFIG_TOGGLE_CONTAINS_LINK', () => {
    const expectedResult = Object.assign({}, configurationState, { configContainsLink: !configurationState.configContainsLink });

    expect(ConfigurationReducer(configurationState, {type: actions.CONFIG_TOGGLE_CONTAINS_LINK})).toEqual(expectedResult);
  });

  it('should handle CONFIG_TOGGLE_TEXT_TRUNCATED', () => {
    const expectedResult = Object.assign({}, configurationState, {configTextTruncated: !configurationState.configTextTruncated});

    expect(ConfigurationReducer(configurationState, {type: actions.CONFIG_TOGGLE_TEXT_TRUNCATED})).toEqual(expectedResult);
  });

});
