import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { places } from './data';
import PlaceImage from './PlaceImage';

import { connect } from 'react-redux';
import {
  ActivityIndicator,
  RefreshControl,
} from 'react-native';


//export default class Places extends Component {
class Places extends Component {
  render() {
    const {  places, loading, refresh } = this.props;
    return (
      <View style={styles.container}>
        {places 
        ? <ScrollView
          contentContainerStyle={styles.scrollContent}
		  // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={refresh}
            />
          }
        >
          {places.map((place, index) => <PlaceImage
            place={place}
            key={index}
          />)}
        </ScrollView>
        : <ActivityIndicator
              animating={loading}
              style={styles.loader}
              size="large"
            />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                // take up all screen
    paddingTop: 20,         // start below status bar
  },
  loader: {
    flex: 1,
    alignItems: 'center',     // center horizontally
    justifyContent: 'center', // center vertically
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);

function mapStateToProps(state, props) {
  return {
      places: state.places,
      loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refresh: () => dispatch({type: 'GET_PLACE_DATA'}),
  }
};
