import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  TextInput
  ,ToastAndroid
} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../constants/theme';
import Iconf, {Icons} from '../constants/Icons';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import { addProductToMyCart } from '../redux/MyCartSlice';
const {width, height} = Dimensions.get('window');

const letterAnimation = {
  0: {opacity: 0, translateY: -42},
  1: {opacity: 1, translateY: 0},
};
const letterAnimation1 = {
  0: {opacity: 0, translateY: 42, translateX: -42},
  1: {opacity: 1, translateY: 0, translateX: 0},
};
const letterAnimation2 = {
  0: {opacity: 0, translateY: 42, translateX: -42},
  1: {opacity: 1, translateY: 0, translateX: 0},
};

const highlightText = string =>
string.split('').map((word, i) => (
  <Text key={i}>
    <Text style={styles.highlightText}>{word} </Text>
  </Text>
));


const CategoryDetails1 = ({navigation, route}) => {
  const {item} = route.params;
  const dispatch=useDispatch()

  const addItem = item => {
    dispatch(addProductToMyCart(item))    
    ToastAndroid.show('Item Added To Cart', ToastAndroid.SHORT);
  };

  const address = 'H.No 1118  Sector 7-C Faridabad Haryana';
  const [text, onChangeText] = React.useState(address);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Iconf
        type="AntDesign"
        size={30}
        name="close"
        style={{
          padding: 12,
          position: 'absolute',
          top: SPACING - 15,
          right: 0,
          zIndex: 2,
        }}
        color={'#333'}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <FlatList
        data={item.carousel}
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          return (
            <View style={{height:360,marginTop:100}}>
              <Image source={item.image} style={styles.image} />
            </View>
          );
        }}
      />
      <View style={{position: 'absolute', top: SPACING + 10, left: SPACING}}>
        <View style={{flexDirection: 'row', overflow: 'hidden'}}>
          {item.company.split('').map((letter, index) => {
            return (
              <Animatable.Text
                useNativeDriver
                animation={letterAnimation}
                delay={300 + index * 50}
                key={`${letter}-${index}`}
                style={styles.heading}>
                {letter}
              </Animatable.Text>
            );
          })}
        </View>
        <View style={{overflow: 'hidden'}}>
          <View style={{flexDirection: 'row'}}>
            <Animatable.Text
              useNativeDriver
              animation={letterAnimation}
              delay={300 + item.company.split('').length * 50}
              style={{
                fontSize: 20,
                fontWeight: '700',
                textTransform: 'uppercase',
                color: '#4f4a4a',
                marginLeft: 4,
                marginTop: -4,
              }}>
              {item.name}
            </Animatable.Text>
          </View>
        </View>
      </View>
      {/* PRICE */}
      <View style={{}}>
        <View style={{marginTop:0}}>
          <Text
            style={{
              fontSize: 14,
              marginHorizontal: 25,
              lineHeight: 20,
              color: '#b3aeae',
              fontWeight: '700',
              top:10
            }}>
            {item.description}
          </Text>

          <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: 20,
                  borderBottomColor: COLORS.transparentBlack,
                  borderBottomWidth: 1,
                  paddingBottom: 8,
                  paddingHorizontal:15
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '80%',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      color: COLORS.blue,
                      backgroundColor: COLORS.transparentBlack,
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 12,
                      borderRadius: 100,
                      marginRight: 10,
                    }}>
                    <Iconf
                      type="Entypo"
                      name="location-pin"
                      style={{
                        fontSize: 16,
                        color: COLORS.blue,
                      }}
                    />
                  </View>
                  <TextInput
                    onChangeText={onChangeText}
                    style={{color: '#4f4a4a', fontWeight: 'bold'}}
                    value={text}
                  />
                  <Text> </Text>
                </View>
                <Iconf
                  type="Ionicons"
                  name="chevron-right"
                  style={{
                    fontSize: 22,
                    color: COLORS.lightGray,
                  }}
                />
              </View>

          <View style={{flexDirection: 'row',marginLeft: 15,top:-10
}}>
            <Animatable.Text
              useNativeDriver
              delay={300 + item.company.split('').length * 50}
              style={{
                marginTop: 12,
                fontWeight: 700,
                fontSize: 19,
                color: 'black',
              }}>
              ₹{Math.ceil(item.price - (item.price * item.discount) / 100)}
            </Animatable.Text>
            <Text
              style={{
                marginTop: 12,
                fontWeight: 300,
                fontSize: 14,
                color: '#ccc',
                margin: 10,
                fontWeight: '800',
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}>
              ₹{item.price}
            </Text>
            <Text
              style={{
                fontWeight: 300,
                fontSize: 25,
                color: '#444',
                marginTop: 1,
                marginLeft: -6,
              }}>
              |
            </Text>
            <Animatable.Text
              useNativeDriver
              animation={letterAnimation2}
              delay={500}
              style={{
                marginTop: 16,
                fontWeight: 700,
                fontSize: 17,
                color: 'brown',
                marginTop: 8,
                marginLeft: 7,
              }}>
              {item.discount}% OFF
            </Animatable.Text>

            <Iconf
              type="Feather"
              size={18}
              name="shopping-cart"
              style={{
                paddingTop: 10,
                paddingLeft: 10,
              }}
              color={'violet'}
            />
               <View
              style={{
                alignItems: 'flex-end',
                backgroundColor: 'brown',
                height: 27,
                width: 60,
                left: 90,
                marginTop: 12,
                borderRadius: 50,
                flexDirection: 'row',
              }}>
              <Iconf
                type="Ionicons"
                size={17}
                name="star"
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  top: -5,
                  left: 7,
                }}
                color={'white'}
              />
              <Text
                style={{
                  color: 'white',
                  top: -5,
                  marginLeft: 10,
                  fontSize: 14,
                  fontWeight: '700',
                }}>
                {item.ratings}
              </Text>
            </View>
          </View>
      
          <View style={{flexDirection: 'row',marginLeft: 25, top:-10
}}>
            <Text
              style={{
                marginTop: -4,
                margin: 10,
                fontSize: 10,
                color: '#ccc',
                fontWeight: 600,
              }}>
              Inclusive of all taxes
            </Text>
            <Text
              style={{
                marginTop: 2,
                left: 160,
                fontSize: 10,
                color: '#ccc',
                fontWeight: 600,
              }}>
              {item.reviews} {highlightText('Reviews')}
            </Text>
          </View>
       
        


        
        </View>
        
      </View>
                {/* BUTTONS */}

      <View
        style={{
          height: '6%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection:"row",
          bottom:5
        }}>
        <TouchableOpacity

onPress={()=>
  addItem(item)}
style={{
            width: '93%',
            height: '90%',
            backgroundColor: COLORS.white,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal:10, shadowColor: '#000',
            shadowOffset: {width: 0.5, height: 0.5},
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 5,

          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLORS.black,
              textTransform: 'uppercase',
            }}>
            {/* {product.isAvailable ? 'Add to cart' : 'Not Avialable'} */}
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: '#333',
    textTransform: 'uppercase',
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: 5,
  },
  image: {
    width: width ,
    resizeMode: 'contain',
    flex: 1,
    // marginTop:20
    top:20,
  },
});
export default CategoryDetails1;
