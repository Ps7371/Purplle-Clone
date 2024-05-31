import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,

} from 'react-native';
import Carousel from '../components/Carousel';
import * as Animatable from 'react-native-animatable';
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Iconf from '../constants/Icons';
import {COLORS, SPACING} from '../constants/theme';
import Colors from '../constants/Colors';
import ItemCard from '../components/ItemCard';
import { useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const BrandDisplay = ({navigation, route}) => {
  const {item} = route.params;

//   const items=useSelector(state=>state);
// let addedItems=[]
// addedItems=items
const myCartItems=useSelector(state=>state.cart)


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
  const letterAnimation1 = {
    0: {opacity: 0, translateY: -42},
    1: {opacity: 1, translateY: 0},
  };

  const highlightText = string =>
    string.split(' ').map((word, i) => (
      <Text key={i}>
        <Text style={styles.highlightText}>{word} </Text>
      </Text>
    ));

  const letterAnimation = {
    0: {opacity: 0, translateY: 60, translateX: -20},
    1: {opacity: 1, translateY: 0, translateX: 0},
  };

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 57,
          borderBottomWidth: 0.9,
          borderBottomColor: '#ccc',
          backgroundColor: 'white',
        }}>

          <Iconf
            type="Ionicons"
            size={24}
            name="arrow-back"
            style={{
              top: SPACING + 9,
              justifyContent:"center",
              paddingLeft: 10,
            }}
            color={'#333'}
            onPress={() => {
              navigation.goBack();
            }}
          />

        <View style={{flexDirection: 'row', overflow: 'hidden',flex:1,alignItems: 'flex-start'}}>
          {item.name.split('').map((letter, index) => {
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
<TouchableWithoutFeedback  onPress={()=>navigation.navigate("Cart")}>
  <View>


          <Iconf
            type="Feather"
            size={35}
            name="shopping-bag"
            
            
            color={Colors.pink}
            style={{
              width: 40, justifyContent: 'center',top:SPACING
              
            }}
            />
                    <Text style={{ alignItems: 'center',color:COLORS.white,top:-10,right:-14}}>{myCartItems.length>0 ? myCartItems.length : ""}</Text>
            </View>
            </TouchableWithoutFeedback>

            </View>
    );
  }
  function renderText() {
    return (
      <View style={{marginTop: 12, marginLeft: 15}}>
        <Text
          style={{
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: '600',
            color: '#333',
          }}>
          Showing results for "{highlightText(item.name)}- Most Loved Products"
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <CustomStatusBar backgroundColor="red" />

      <ScrollView>
        {renderHeader()}
        {renderText()}
        <Carousel data={item} />

        <Animatable.Text
          useNativeDriver
          animation={letterAnimation1}
          delay={300}
          style={{
            marginTop: 25,
            marginBottom:10,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: 2,
            color:"#444"
          }}>
          Best Seller
        </Animatable.Text>
        <ItemCard data={item.product} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: '#333',
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: '800',
    paddingLeft: 12,
    marginTop: 21,
  },
  highlightText: {
    color: '#bbb',
    fontSize: 16,
    fontWeight: 'bold',
  },

  dotView: {flexDirection: 'row', justifyContent: 'center'},
});

export default BrandDisplay;
