import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';

export const WeatherChart = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ['January', '', ''],
          datasets: [
            {
              data: [100, 90, 50, 25, 10],
            },
          ],
        }}
        width={Dimensions.get('screen').width} // from react-native
        height={100}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        withVerticalLines={false}
        withHorizontalLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        segments={2}
        chartConfig={{
          backgroundColor: '#white',
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(60, 255, 60, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '0',
            // strokeWidth: '2',
            // stroke: 'white',
          },
        }}
        horizontalLabelRotation={20}
        bezier
        style={{
          // marginVertical: 8,
          marginLeft: 13,
          marginRight: 25,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
