import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// 画面のサイズ
const { width, height } = Dimensions.get('window');
// 画像の行列
const cols = 2, rows = 3;

export default class PlaceImage extends Component {
  // コンポーネントのprops
  static propTypes = {
    // placeは必須
    place: PropTypes.object.isRequired,
  }
  render() {
    const { place, place: { name, country, image } } = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.country} numberOfLines={1}>{country}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    height: (height - 20 - 20) / rows - 10,
    width: (width - 10) / cols - 10,
  },
  imageContainer: {
    flex: 1,                          
  },
  image: {
    borderRadius: 10,                 
    ...StyleSheet.absoluteFillObject, 
  },
  name: {
    fontSize: 14,
    marginTop: 4,
  },
  country: {
    color: '#BBBBBB',
    fontSize: 12,
    lineHeight: 14,
  },
});