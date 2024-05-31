import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
  StyleSheet,
  TextInput,
} from 'react-native';
import {COLORS, width} from '../constants';
import Iconf, {Icon} from '../constants/Icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { addProductToMyCart } from '../redux/MyCartSlice';

const BrandDisplay1 = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const address = 'H.No 1118  Sector 7-C Faridabad Haryana';
  const [text, onChangeText] = React.useState(address);

  const CustomStatusBar = ({
    backgroundColor,
    barStyle = 'dark-content',
    //add more props StatusBar
  }) => {
    const insets = useSafeAreaInsets();

    return (
      <View style={{height: insets.top, backgroundColor}}>
        <StatusBar
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
      </View>
    );
  };

  const highlightText = string =>
    string.split('').map((word, i) => (
      <Text key={i}>
        <Text style={styles.highlightText}>{word} </Text>
      </Text>
    ));

  const letterAnimation2 = {
    0: {opacity: 0, translateY: 42, translateX: -42},
    1: {opacity: 1, translateY: 0, translateX: 0},
  };

  //get product data by productID

const myCartItems=useSelector(state=>state.cart)

  const dispatch = useDispatch();


  //add to cart
  const addItem = item => {
    dispatch(addProductToMyCart(item))    
    ToastAndroid.showWithGravity('Item Added To Cart', ToastAndroid.SHORT,ToastAndroid.BOTTOM);
  };
  //add to cart


  //product horizontal scroll product card
  const renderProduct = ({item, index}) => {
    return (
      <View
        style={{
          width: width,
          height: 400,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.image}
          style={{
            width: width,
            height: 390,
            top: -5,
            resizeMode: 'cover',
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
        position: 'relative',
      }}>
      <CustomStatusBar backgroundColor="violet" />

      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 404,
            backgroundColor: COLORS.white,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={item.carousel}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 0,
              // backgroundColor:"red"
            }}>
            {item.carousel
              ? item.carousel.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: '10%',
                        height: 2,
                        backgroundColor: COLORS.black,
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                        marginTop: -40,
                      }}></Animated.View>
                  );
                })
              : null}
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            top: -10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
              marginLeft: -5,
            }}>
            <Iconf
              type="Entypo"
              name="chevron-left"
              size={24}
              style={{
                color: COLORS.gray,
                backgroundColor: COLORS.white,
                borderRadius: 10,
              }}
              onPress={() => {
                navigation.goBack();
              }}
            />

            <Iconf
              type="Feather"
              size={20}
              name="shopping-cart"
              style={{
                fontSize: 18,
                color: COLORS.blue,
                marginRight: 6,
              }}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLORS.black,
              }}>
              Shopping
            </Text>
          </View>

          <View style={{marginVertical: 5}}>
            <Text
              style={{
                fontSize: 20,
                maxWidth: '100%',
                maxHeight: 60,
                lineHeight: 20,
                color: '#333',
                shadowColor: '#000',
                fontWeight: '900',
                shadowOffset: {width: 0.8, height: 0.8},
                shadowOpacity: 1,
                shadowRadius: 3,
                elevation: 5,
                marginBottom: 10,
              }}>
              {item.company}
            </Text>
            <Text
              numberOfLines={2.5}
              style={{
                fontSize: 13,
                maxWidth: '100%',
                maxHeight: 60,
                lineHeight: 20,
                color: '#4f4a4a',

                shadowColor: '#000',
                fontWeight: '900',
                shadowOffset: {width: 0.8, height: 0.8},
                shadowOpacity: 1,
                shadowRadius: 3,
                elevation: 5,
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
          </View>

          {/* PRICE SECTION */}

          <View style={{flexDirection: 'row', marginHorizontal: 5, top: -20}}>
            <Animatable.Text
              useNativeDriver
              delay={300 + item.company.split('').length * 50}
              style={{
                marginTop: 12,
                fontWeight: 700,
                fontSize: 18,
                color: 'black',
              }}>
              ₹{Math.ceil(item.price - (item.price * item.discount) / 100)}
            </Animatable.Text>
            <Text
              style={{
                marginTop: 14,
                fontWeight: 300,
                fontSize: 14,
                color: '#ccc',
                margin: 9,
                fontWeight: '800',
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}>
              ₹{item.price}
            </Text>
            <Text
              style={{
                fontWeight: 300,
                fontSize: 24,
                color: '#ccc',
                marginTop: 5,
                // marginLeft: -6,
              }}>
              |
            </Text>
            <Animatable.Text
              useNativeDriver
              animation={letterAnimation2}
              delay={500}
              style={{
                fontWeight: 700,
                fontSize: 16,
                color: 'brown',
                marginTop: 12,
                // marginLeft: 7,
                left: 7,
              }}>
              {item.discount}% OFF
            </Animatable.Text>

            <View
              style={{
                alignItems: 'flex-end',
                backgroundColor: 'brown',
                height: 25,
                width: 60,
                left: 120,
                marginTop: 12,
                borderRadius: 50,
                flexDirection: 'row',
              }}>
              <Iconf
                type="Ionicons"
                size={17}
                name="star"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
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
            <Text
              style={{
                margin: 10,
                left: 49,
                top: 30,
                fontSize: 10,
                color: '#ccc',
                fontWeight: 600,
              }}>
              {item.reviews} {highlightText('Reviews')}
            </Text>
          </View>
          <View style={{flexDirection: 'row', top: -20}}>
            <Text
              style={{
                marginTop: -4,
                margin: 10,
                marginLeft: 25,
                fontSize: 10,
                color: '#ccc',
                fontWeight: 600,
              }}>
              Inclusive of all taxes
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '6%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity delayPressIn={0}  style={styles.carty} 
        onPress={()=>addItem(item)}>
       
            <Text style={styles.carty1}>Add To Cart</Text>

        
        

        
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0.9, height: 0.2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 0,
    width: width - 25,
    height: 170,
    left: -15,
    marginTop: -15,
  },
  highlightText: {
    color: '#bbb',
    fontSize: 10,
    fontWeight: 'bold',
  },
  carty: {
    width: '86%',
    height: '110%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-evenly',
  },
  carty1: {
    fontSize: 12,

    fontWeight: '500',
    letterSpacing: 3,
    color: COLORS.black,
    textTransform: 'uppercase',
  },
});
export default BrandDisplay1;
