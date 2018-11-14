import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

const trendList = (props) => {

  let trends = [];

  if (props.trends.length > 0) {
    trends = props.trends.map((trend, index) => {
      return (
        <View style={styles.trend} key={index}>
          <Text key={'#' + index} style={styles.trendNumber}> # {index+1}</Text>
          <Text key={index + 'Name'} style={styles.trendText}>{trend.name}</Text>
        </View>
      );
    });
  }

  return (
    <ScrollView>
      {trends}
    </ScrollView>
  );
}

export default trendList;

const styles = StyleSheet.create({
  trend:{
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: 'row',
    padding: 10,
  },
  trendText: {
    fontSize: 20,
    flex: 0.8
  },
  trendNumber: {
    flex: 0.2,
    alignSelf: 'center'
  }
});
