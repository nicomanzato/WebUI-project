import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export const Trend = (props) => {

  const tw_volume = props.trend.tweet_volume === null ? null :
   <Text style={styles.volumeText}>{props.trend.tweet_volume} Tweets</Text>;

  return (
    <TouchableHighlight
       key={'t' + props.index}
       onPress={() => { props.onPress(props.trend)}}
       underlayColor='#dddddd'>
       <View style={styles.trend} key={props.index}>
          <View style={styles.trendNumberView}>
            <Text key={'#' + props.index} style={styles.trendNumber}>{props.index + 1}</Text>
          </View>
          <View style={styles.trendTextView}>
            <Text key={props.index + 'Name'} style={styles.trendText}>{props.trend.name}</Text>
            {tw_volume}
          </View>
      </View>
    </TouchableHighlight>
  );

}

export default Trend

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
