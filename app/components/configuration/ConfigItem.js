'use strict';

import React from 'react';
import {StyleSheet, Text, View, CheckBox} from 'react-native';

class ConfigItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    }

    this.handleOnValueChange = this.handleOnValueChange.bind(this);
  }

  handleOnValueChange() {
    this.setState({
      value: !this.state.value,
    });

    this.props.onChange();
  }

  render() {
    return (
     <View style={styles.configItem}>
       <View style={styles.configTextView}>
         <Text style={styles.configText}>{this.props.title}</Text>
       </View>
       <View style={styles.checkboxView}>
         <CheckBox
          style={styles.configCheckBox}
          onValueChange={this.handleOnValueChange}
          value={this.state.value}
         />
       </View>
     </View>
    );
  }
}

export default ConfigItem;

const styles = StyleSheet.create({
  configItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  configText: {
    fontSize: 17,
  },
  configCheckBox: {},
  configTextView: {
    flex: 0.9,
    height: 50,
  },
  checkboxView: {
    flex: 0.1,
    height: 50,
  }
});
