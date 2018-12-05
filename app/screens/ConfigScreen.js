import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';

import ConfigList from './../components/configuration/ConfigList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  configToggleVerifiedOnly,
  configToggleDoNotFollow,
  configToggleHaveDefaultInformation,
  configToggleContainsLink,
  configToggleTextTruncated,
} from '../store/configuration/configurationActions';

const ConfigScreen = (props) => (
  <View style={styles.container}>
    <ConfigList
      configVerifiedOnly={props.configVerifiedOnly}
      configDoNotFollow={props.configDoNotFollow}
      configHaveDefaultInformation={props.configHaveDefaultInformation}
      configContainsLink={props.configContainsLink}
      configTextTruncated={props.configTextTruncated}

      configToggleVerifiedOnly={props.configToggleVerifiedOnly}
      configToggleDoNotFollow={props.configToggleDoNotFollow}
      configToggleHaveDefaultInformation={props.configToggleHaveDefaultInformation}
      configToggleContainsLink={props.configToggleContainsLink}
      configToggleTextTruncated={props.configToggleTextTruncated}
      />
  </View>
);

ConfigScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ConfigScreen.navigationOptions = {

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {

  return {
    configVerifiedOnly: state.ConfigurationReducer.configVerifiedOnly,
    configDoNotFollow: state.ConfigurationReducer.configDoNotFollow,
    configHaveDefaultInformation: state.ConfigurationReducer.configHaveDefaultInformation,
    configContainsLink: state.ConfigurationReducer.configContainsLink,
    configTextTruncated: state.ConfigurationReducer.configTextTruncated,
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
const mapDispatchToProps = {
  configToggleVerifiedOnly: () => configToggleVerifiedOnly(),
  configToggleDoNotFollow: () => configToggleDoNotFollow(),
  configToggleHaveDefaultInformation: () => configToggleHaveDefaultInformation(),
  configToggleContainsLink: () => configToggleContainsLink(),
  configToggleTextTruncated: () => configToggleTextTruncated(),
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(ConfigList);
