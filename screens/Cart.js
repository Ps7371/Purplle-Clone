import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, width, height, Colors} from '../constants';
import Iconf from '../constants/Icons';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useEffect,useRef } from 'react';
import { Animated, Easing } from 'react-native';




import { addProductToMyCart, deleteMyCartItem, removeMyCartItem } from '../redux/MyCartSlice';
import Texty from '../components/Texty';

const Cart = () => {
  const items = useSelector(state => state);
  const navigation = useNavigation();

    const myCartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const animationProgress = useRef(new Animated.Value(0))

    useEffect(() => {
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 5,
        easing: Easing.linear,
        useNativeDriver: false
      }).start();
    }, [])

  const getTotal = () => {
    let total = 0;
    myCartItems.map(item => {
      total =
        total +
        item.qty * Math.ceil(item.price - (item.price * item.discount) / 100);
    });
    return total;
  };
  const discount = () => {
    let discount = 0;
    myCartItems.map(item => {
      discount =
        discount +
        item.qty * (item.price-Math.ceil(item.price - (item.price * item.discount) / 100));
    });
    return discount;
  };

  const address = 'H.No 1118  Sector 7-C Faridabad Haryana';
  const [text, onChangeText] = React.useState(address);

  const Loading = () => (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
<Text style={{fontSize:32,marginTop:10,marginHorizontal:10,fontWeight:"800",    color: '#333',
letterSpacing:4
}}>Aww Snap !</Text>
      {/* Lottie animation */}
      <LottieView autoPlay  progress={animationProgress.current}   style={{marginTop:-50}} loop  source={require('../assets/lottie/cart.json')}/>
      <LottieView autoPlay  progress={animationProgress.current}   style={{marginTop:90,width:80,height:80}} loop  source={require('../assets/lottie/cart1.json')}/>

    </View>
  );

  if (myCartItems.length == 0) {
    return <Loading />;
  } else {
    return (
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 20,
                borderBottomColor: COLORS.transparentBlack,
                borderBottomWidth: 1,
                paddingBottom: 8,
                marginHorizontal: 10,
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
    
            <FlatList
              data={myCartItems}
              renderItem={({item, index}) => {
                return (
                  <View style={{...styles.cardView, height: height / 4}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Image style={styles.image} source={item.image} />
                      </View>
                      <View style={{marginVertical: 10, marginLeft: 15}}>
                        <Text
                          style={{
                            fontSize: 12,
                            maxWidth: '80%',
                            maxHeight: 70,
                            lineHeight: 23,
                            color: '#333',
                            shadowColor: '#000',
                            fontWeight: '900',
                            shadowOffset: {width: 0.8, height: 0.8},
                            shadowOpacity: 1,
                            shadowRadius: 3,
                            elevation: 5,
                            marginTop: 10,
                            
                          }}
                          >
                          {item.description}
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            marginTop:5
                       
                          }}>
                          <Text
                            style={{
                              marginTop: 12,
                              fontWeight: 'bold',
                              fontSize: 14,
                              color: 'black',
                            }}>
                            ₹
                            {Math.ceil(
                              item.price - (item.price * item.discount) / 100,
                            )}
                          </Text>
                          <Text
                            style={{
                              marginTop: 14,
                              fontWeight: 300,
                              fontSize: 12,
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
                              fontWeight: 700,
                              fontSize: 13,
                              color: 'red',
                              marginTop: 12,
                            }}>
                            {item.discount}% OFF
                          </Text>



                        </View>
                          <View style={styles.buttons}>
                          {item.qty == 0 ? null : (
                            <TouchableOpacity  style={{paddingRight:10}}delayPressIn={0}
                            onPress={() => {

                              if(item.qty>1){
                                dispatch(removeMyCartItem(item)) 
                              }
                                else{
                                  dispatch(deleteMyCartItem(item.key)) 

                                }
                              }}
                            >
                              <Image
                                style={{width: 35, height: 35}}
                                source={require('../assets/images/minus.png')}
                              />
                            </TouchableOpacity>
                          )}

                     {item.qty==0 ?null:(
                      <Text>{item.qty}</Text>
                     )}

                          {item.qty == 0 ? null : (
                            <TouchableOpacity style={{paddingLeft:10}} delayPressIn={0} onPress={()=>{
                              dispatch(addProductToMyCart(item))
                            }} >
                              <Image
                                style={{width: 35, height: 35}}
                                source={require('../assets/images/plus.png')}
                              />
                            </TouchableOpacity>
                          )}
                        </View>


                     
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>

        </ScrollView>


{myCartItems.length>0 ?(    <View
          style={{
            position: 'absolute',
            bottom: 10,
            height: '6%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          
          <View style={styles.carty_1}>
            <Text style={{fontSize:16,color:"white",fontWeight:"700"}}>Items:   {myCartItems.length>0 ? myCartItems.length : null}</Text>
            <Text style={{color:"white",fontWeight:"bold"}}>Discount:   ₹{discount()}</Text>
            <Text style={{color:"white",fontWeight:"bold"}}>Subtotal:   ₹{getTotal()}</Text>
          </View>
        </View>):null}
    
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  carty1: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 3,
    color: COLORS.black,
    textTransform: 'uppercase',
  },
  carty: {
    width: '100%',
    height: '4%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'center',
    paddingHorizontal:10
  },
  cardView: {
    flex: 1,
    width: width - 10,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
  },

  image: {
    top: 20,
    left: 5,
    width: width / 3,
    height: height / 6,
  },

  carty_1: {
    width: '86%',
    height: '110%',
    backgroundColor: Colors.lightRed,
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
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:70
  },
});

export default Cart;
