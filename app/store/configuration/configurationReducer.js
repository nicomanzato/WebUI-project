'use strict';

import {
  CONFIG_TOGGLE_VERIFIED_ONLY,
  CONFIG_TOGGLE_DO_NOT_FOLLOW,
  CONFIG_TOGGLE_HAVE_DEFAULT_INFORMATION,
  CONFIG_TOGGLE_CONTAINS_LINK,
  CONFIG_TOGGLE_TEXT_TRUNCATED
} from "./configurationActions"

export let configurationState = {
  configVerifiedOnly: false,
  configDoNotFollow: false,
  configHaveDefaultInformation: false,
  configContainsLink: false,
  configTextTruncated: false,
};

const ConfigurationReducer = (state = configurationState, action) => {
  switch (action.type) {
    case CONFIG_TOGGLE_VERIFIED_ONLY:
      state = Object.assign({}, state, { configVerifiedOnly: !state.configVerifiedOnly });
      return state;
    case CONFIG_TOGGLE_DO_NOT_FOLLOW:
      state = Object.assign({}, state, { configDoNotFollow: !state.configDoNotFollow });
      return state;
    case CONFIG_TOGGLE_HAVE_DEFAULT_INFORMATION:
      state = Object.assign({}, state, { configHaveDefaultInformation: !state.configHaveDefaultInformation });
      return state;
    case CONFIG_TOGGLE_CONTAINS_LINK:
      state = Object.assign({}, state, { configContainsLink: !state.configContainsLink });
      return state;
    case CONFIG_TOGGLE_TEXT_TRUNCATED:
      state = Object.assign({}, state, { configTextTruncated: !state.configTextTruncated });
      return state;
    default:
      return state;
    }
};

export default ConfigurationReducer;
