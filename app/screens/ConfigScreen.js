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

export const ConfigScreen = (props) => (
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

function mapStateToProps(state, props) {
  return {
    configVerifiedOnly: state.ConfigurationReducer.configVerifiedOnly,
    configDoNotFollow: state.ConfigurationReducer.configDoNotFollow,
    configHaveDefaultInformation: state.ConfigurationReducer.configHaveDefaultInformation,
    configContainsLink: state.ConfigurationReducer.configContainsLink,
    configTextTruncated: state.ConfigurationReducer.configTextTruncated,
  }
}

const mapDispatchToProps = {
  configToggleVerifiedOnly: () => configToggleVerifiedOnly(),
  configToggleDoNotFollow: () => configToggleDoNotFollow(),
  configToggleHaveDefaultInformation: () => configToggleHaveDefaultInformation(),
  configToggleContainsLink: () => configToggleContainsLink(),
  configToggleTextTruncated: () => configToggleTextTruncated(),
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigList);
