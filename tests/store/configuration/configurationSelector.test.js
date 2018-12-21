import {configurationState} from './../../../app/store/configuration/configurationReducer'
import * as selectors from './../../../app/store/configuration/configurationSelector';

let testState = {};

const generateTestConfigurationState = () => {
  testState.ConfigurationReducer = configurationState;
}

describe('configuration selector', () => {
  beforeEach(() => {
    generateTestConfigurationState();
  });

  it('should select the configuration state', () => {
    expectedResult = configurationState;

    expect(selectors.getConfiguration(testState)).toEqual(expectedResult);
  });

});
