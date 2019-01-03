'use strict';

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Trend} from './trend'

class TrendList extends React.Component {

  render = () => {

    let trends = [];

    if (this.props.trends.length > 0) {
      trends = this.props.trends.map((trend, index) => {
        return (
         <Trend onPress={this.props.onItemPress} trend={trend} key={index} index={index} />
        );
      });
    }

    return (
      <ScrollView>
        {trends}
      </ScrollView>
    )
  };
}

export default TrendList;

const styles = StyleSheet.create({
  trend: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: 'row',
    padding: 10,

  },
  trendText: {
    fontSize: 17,
    marginBottom: 5
  },
  trendTextView: {
    flex: 0.9,
    paddingLeft: 10,
  },
  trendNumber: {
    fontSize: 18,
    color: 'grey'
  },
  trendNumberView: {
    flex: 0.1,
    paddingLeft: 7,
  },
  volumeText: {
    fontSize: 15,
    color: 'grey',
  }
});
