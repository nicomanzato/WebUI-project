'use strict';

import React from 'react';
import {StyleSheet, Text, View, Button, CheckBox} from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator} from 'react-navigation';
import ConfigItem from './ConfigItem';

const ConfigList = (props) => (

 <View>
   <View style={styles.titleView}>
     <Text style={styles.titleText}>Silence notifications from ... </Text>
   </View>
   <ConfigItem title="People who have not verified the account" onChange={props.configToggleVerifiedOnly}
               value={props.configVerifiedOnly}/>
   <ConfigItem title="People who do not follow" onChange={props.configToggleDoNotFollow}
               value={props.configDoNotFollow}/>
   <ConfigItem title="People who have default profile information" onChange={props.configToggleHaveDefaultInformation}
               value={props.configHaveDefaultInformation}/>
   <ConfigItem title="Tweets that contain a link" onChange={props.configToggleContainsLink}
               value={props.configContainsLink}/>
   <ConfigItem title="Tweets that have text truncated" onChange={props.configToggleTextTruncated}
               value={props.configTextTruncated}/>
 </View>
);

export default ConfigList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  titleView: {
    height: 50,
    backgroundColor: '#627B97',
    marginTop: 1,
    marginBottom: 3,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
