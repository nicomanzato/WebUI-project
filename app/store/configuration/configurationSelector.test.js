import {configurationState} from './configurationReducer'
import * as selectors from './configurationSelector';

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
