import React from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';

class ConfigItem extends React.Component {
  constructor(props){
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
    return(
      <View style={styles.configItem}>
        <Text style={styles.configText}>{this.props.title}</Text>
        <CheckBox
          style={styles.configCheckBox}
          onValueChange={this.handleOnValueChange}
          value={this.state.value}
        />
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
    justifyContent: 'space-between',
  },
  configText: {
    fontSize: 20,
    alignSelf: 'flex-start'
  },
  configCheckBox: {
    alignSelf: 'flex-end',
  },
});
