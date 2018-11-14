import React from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../actions/configurationActions';

import ConfigItem from './ConfigItem';

const ConfigList = (props) => (

  <View>
    <ConfigItem title="People who have not verified the account" onChange={props.configToggleVerifiedOnly} value={props.configVerifiedOnly}/>
    <ConfigItem title="People who do not follow" onChange={props.configToggleDoNotFollow} value={props.configDoNotFollow} />
    <ConfigItem title="People who have default profile information" onChange={props.configToggleHaveDefaultInformation} value={props.configHaveDefaultInformation} />
    <ConfigItem title="Tweets that contain a link" onChange={props.configToggleContainsLink} value={props.configContainsLink} />
    <ConfigItem title="Tweets that have text truncated" onChange={props.configToggleTextTruncated} value={props.configTextTruncated} />
  </View>
);



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {

    return {
      configVerifiedOnly: state.configurationReducer.configVerifiedOnly,
      configDoNotFollow: state.configurationReducer.configDoNotFollow,
      configHaveDefaultInformation: state.configurationReducer.configHaveDefaultInformation,
      configContainsLink: state.configurationReducer.configContainsLink,
      configTextTruncated: state.configurationReducer.configTextTruncated,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(ConfigList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
});
