import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions,TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const ItemCardDisplay = ({item}) => {
  const navigation=useNavigation();

  return (
        <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate("BrandDisplay1",{item})
    }}>
    <View style={styles.cardView}>

      <Image style={styles.image} source={item.image} />
      <View style={styles.textView}>

        <Text numberOfLines={2} style={styles.itemDescription}>
          {item.description}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.itemTitle}>
            {' '}
            ₹{Math.ceil(item.price - (item.price * item.discount) / 100)}
          </Text>
          <Text style={styles.price}>₹{item.price}</Text>
          <Text
            style={{
                fontWeight: 700,
                fontSize: 11,
                color: 'brown',
                top: 17,
                left: 8,
            }}>
            {item.discount}% OFF
          </Text>
        </View>
      </View>
    </View>
                </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width / 2.5,
    height: height / 3,
    backgroundColor: 'white',
    // borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    marginLeft: 9,
  },

  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width / 2.5,
    height: height / 5,
    marginTop: 0,
  },
  itemTitle: {
    color: 'black',
    fontSize: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
    top: 13,
  },
  itemDescription: {
    color: '#4f4a4a',
    fontSize: 11,
    shadowColor: '#000',
    fontWeight: 'bold',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    bottom: 3,
  },
  price: {
    fontWeight: 300,
    fontSize: 13,
    color: '#ccc',
    fontWeight: '800',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    top: 15,
    left: 3,
  },
});

export default ItemCardDisplay;
