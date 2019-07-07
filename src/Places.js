import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { places } from './data';
import PlaceImage from './PlaceImage';

export default class Places extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {places.map((place, index) => <PlaceImage
            place={place}
            key={index}
          />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,          
  },
  scrollContent: {
    flexDirection: 'row',   
    flexWrap: 'wrap',       
  },
});