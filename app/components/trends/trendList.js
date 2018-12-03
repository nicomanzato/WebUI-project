'use strict';

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const trendList = (props) => {

  let trends = [];

  if (props.trends.length > 0) {
    trends = props.trends.map((trend, index) => {
      const tw_volume = trend.tweet_volume === null ? null :
       <Text style={styles.volumeText}>{trend.tweet_volume} Tweets</Text>;
      return (
       <TouchableHighlight
          key={index}
          onPress={() => { props.onItemPress(trend.query)}}
          underlayColor='#dddddd'>
          <View style={styles.trend} key={index}>
             <View style={styles.trendNumberView}>
               <Text key={'#' + index} style={styles.trendNumber}>{index + 1}</Text>
             </View>
             <View style={styles.trendTextView}>
               <Text key={index + 'Name'} style={styles.trendText}>{trend.name}</Text>
               {tw_volume}
             </View>
         </View>
       </TouchableHighlight>
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
