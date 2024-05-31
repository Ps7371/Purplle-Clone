import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  StatusBar,
  Linking
} from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import * as React from 'react';
import Iconf, {Icons} from '../constants/Icons';
import Colors from '../constants/Colors';
import {COLORS, FONTS, SIZES, width, height} from '../constants';
import Data from '../constants/Data';
import ItemCard from '../components/ItemCard';
import Carousel from '../components/Carousel';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Texty from '../components/Texty';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import { Easing } from 'react-native';

const Home = ({navigation}) => {

const animationProgress = useRef(new Animated.Value(0))

useEffect(() => {
  Animated.timing(animationProgress.current, {
    toValue: 1,
    duration: 5,
    easing: Easing.linear,
    useNativeDriver: false
  }).start();
}, [])

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



  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', height: 60, alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 25,
            marginTop: -5,
            justifyContent: 'center',
            paddingLeft: 15,
          }}>
          <Iconf
            type="MaterialCommunityIcons"
            size={30}
            name="menu"
            color={Colors.black}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'flex-start', paddingLeft: 24}}>
          <Image
            source={require('../assets/images/logo1.jpg')}
            resizeMode="contain"
            style={{width: 85, height: 110, marginLeft: 8}}
          />
        </View>
        <View style={{backgroundColor:"3b3ffd9"}}>

        </View>
        <TouchableOpacity
 onPress={() =>
  navigation.navigate('BrandDisplay', {
    item:Data.poster[3],
  })
}>

        <LottieView autoPlay   style={{right:10,width:35,height:35,top:-1}} loop  source={require('../assets/lottie/catNail.json')}/>
</TouchableOpacity>


        <View
      style={{
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
    <TouchableWithoutFeedback  onPress={() => {
                navigation.navigate('Cart');
              }}>
<View>

          <Iconf
              
              type="Feather"
              size={35}
              style={{width: 45, justifyContent: 'center', paddingRight: 15,top:5}}
              name="shopping-bag"
              color={COLORS.blue}
              
              />
                 <Text style={{ alignItems: 'center',top:-17,color:COLORS.white,right:-14}}>{myCartItems.length>0 ? myCartItems.length : ""}</Text>
              </View>
              </TouchableWithoutFeedback>

      </View>
      </View>
    );
  }


  // CATEGORY 1
  const render_Category_Home=({item,index})=>{
    return(
      <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('CategoryDetails', {
          data: item.product,
        })
      }>
    <View
      style={{
        marginTop: -12,
        marginLeft: index == 0 ? 12 : 12,
        marginRight:
        index == Data.CategoryDisplayData.length - 1
        ? SIZES.padding
        : 0,
      }}>
      {/* THUMBNAIL */}
      <Image
        source={item.circleCategoryImg}
        resizeMode="cover"
        style={{
          width: SIZES.width / 5,
          height: SIZES.width / 5,
          marginTop: 10,
          borderRadius: 0,
        }}
      />
    </View>
  </TouchableWithoutFeedback>
  )
}
  function renderCategoryHome() {
    return (
          <FlatList
          horizontal
          initialNumToRender={4} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginTop: SIZES.padding}}
            data={Data.CategoryDisplayData}
            keyExtractor={item => `${item.id}`}
            renderItem={render_Category_Home}
            />
            
    );
  }
  // CATEGORY 1
  


  // CATEGORY 2
const renderCategoryHome_2=({item,index})=>{
  if (item.thumbnail1) {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('CategoryDetails', {
            data: item.product,
          })
        }>
        <View
          style={{
            marginTop:0,
            marginLeft: index == 0 ? 12 : 12,
            marginRight:
              index == Data.CategoryDisplayData.length - 1
                ? SIZES.padding
                : 0,
            marginBottom: 20,
          }}>
          {/* THUMBNAIL */}
          <Image
            source={item.thumbnail1}
            resizeMode="cover"
            style={{
              width: SIZES.width / 3,
              height: SIZES.width / 2,
              marginTop: 10,
              borderRadius: 0,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }

}
  function renderCategoryHome2() {
    return (
      <FlatList
      horizontal
      initialNumToRender={3}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: SIZES.padding}}
          data={Data.CategoryDisplayData}
          keyExtractor={item => `${item.id}`}
          renderItem={renderCategoryHome_2}
        />
    );
  }
    // CATEGORY 2
    
    
    // CATEGORY 3
  const renderCategoryHome_3=({item,index})=>{
    if (item.thumbnail) {
      return (
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('CategoryDetails', {
              data: item.product,
            })
          }>
          <View
            style={{
              marginTop: 0,
              marginLeft: index == 0 ? 12 : 12,
              marginRight:
                index == Data.CategoryDisplayData.length - 1
                  ? SIZES.padding
                  : 0,
              marginBottom: 20,
            }}>
            {/* THUMBNAIL */}
            <Image
              source={item.thumbnail}
              resizeMode="cover"
              style={{
                width: SIZES.width / 3.2,
                height: SIZES.width / 2.5,
                marginTop: 10,
                borderRadius: 0,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }
  function renderCategoryHome3() {
    return (
        <FlatList
          horizontal
          initialNumToRender={3} 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: SIZES.padding}}
          data={Data.CategoryDisplayData}
          keyExtractor={item => `${item.id}`}
          renderItem={renderCategoryHome_3}
        />
    );
  }
      // CATEGORY 3


// RENDER POSTER1
  const renderPosters_1=({item,index})=>{
        if (item.thumbnail1) {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('BrandDisplay', {
                  item: item,
                })
              }>
              <View
                style={{
                  marginBottom: 20,
                  marginTop:10
                }}>
                {/* THUMBNAIL */}
                <Image
                  source={item.thumbnail1}
                  resizeMode="cover"
                  style={{
                    width: SIZES.width,
                    height: SIZES.height / 3.2,
                    marginTop: 10,
                    borderRadius: 0,
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        }
      }
  function renderPosters() {
    return (
        <FlatList
          data={Data.brandData}
          keyExtractor={item => item.key}
          pagingEnabled
          renderItem={renderPosters_1}
        />
    );
  }
  // RENDER POSTER1
  


  // RENDER POSTER2
 const renderPosters_2=({item,index})=>{
  if (item.thumbnail2) {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('BrandDisplay', {
            item: item,
          })
        }>
        <View
          style={{
            marginBottom: 20,
          }}>
          {/* THUMBNAIL */}
          <Image
            source={item.thumbnail2}
            resizeMode="cover"
            style={{
              width: width,
              height: SIZES.height / 4.4,
              marginTop: 10,
              borderRadius: 0,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
 }
  
  function renderPosters2() {
    return (
        <FlatList
          data={Data.brandData}
          initialNumToRender={3} 
          keyExtractor={item => item.key}
          pagingEnabled
          renderItem={renderPosters_2}
        />
    );
  }
  // RENDER POSTER2



  const CarouselItem = ({item}) => {
    return (
      <View style={styles.cardView}>
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate('BrandDisplay', {
              item: item,
            })
          }>
          <Image style={styles.image} source={item.thumbnail} />
        </TouchableWithoutFeedback>
      </View>
    );
  };

  // let flatList;
  // function infiniteScroll(dataList) {
  //   const numberOfData = dataList;
  //   let scrollValue = 0,
  //     scrolled = 0;

  //   setInterval(function () {
  //     scrolled++;
  //     if (scrolled <= numberOfData) scrollValue = scrollValue + width;
  //     else {
  //       scrollValue = 0;
  //       scrolled = 0;
  //     }

  //     this.flatList.scrollToOffset(
  //       {animated: true, offset: scrollValue},
  //       {useNativeDriver: false},
  //     );
  //   }, 4000);
  // }

  const Carousel_Home = ({data}) => {
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(Data.brandData);

    useEffect(() => {
      setDataList(data);
      // infiniteScroll(dataList.length);
    });

    if (data && data.length) {
      return (
        <View>
          <FlatList
            data={Data.brandData}
            // ref={flatList => {
            //   this.flatList = flatList;
            // }}
            keyExtractor={item => item.key}
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              if (item.thumbnail) {
                return <CarouselItem item={item} />;
              }
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />

          <View style={styles.dotView}>
            {data.map((_, i) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.7, 1, 0.3],
                extrapolate: 'clamp',
              });
              //Jai Bhawani

              if (data[i].thumbnail) {
                return (
                  <Animated.View
                    key={i}
                    style={{
                      opacity,
                      height: 8,
                      marginTop: 6,
                      width: 8,
                      backgroundColor: '#595959',
                      margin: 8,
                      borderRadius: 5,
                    }}
                  />
                );
              }
              //Jai Bhawani
            })}
          </View>
        </View>
      );
    }

    return null;
  };


 
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: Platform.OS === 'ios' ? 20 : 0}}>
        <CustomStatusBar backgroundColor="violet" />
        {renderHeader()}
        {renderCategoryHome()}

        <Carousel_Home data={Data.brandData} />

<Texty label="Featured"/>
        <ItemCard data={Data.featured} />

        <Texty label="Category"/>

        
        {renderCategoryHome2()}

        <Texty label="Best Seller"/>


        <Carousel data={Data.poster[1]} />

        {renderPosters()}
   

<View style={styles.cardView}> 
<Image source={Data.poster[0].thumbnail} style={{width:width-20,height:height/6}} />
  </View>


<View style={{flexDirection:"row"}}> 

<TouchableOpacity
 onPress={() =>
  navigation.navigate('BrandDisplay', {
    item:Data.poster[4],
  })
}>
<Image source={Data.poster[4].thumbnail} style={{width:width/2,height:height/2.5}} />
</TouchableOpacity>
<TouchableOpacity
 onPress={() =>
  navigation.navigate('BrandDisplay', {
    item:Data.poster[5],
  })
}>
<Image source={Data.poster[5].thumbnail} style={{width:width/2,height:height/2.5}} />
</TouchableOpacity>

    </View>

<Texty label="Your Favourite Categories"/>

        {renderCategoryHome3()}
   
        <Image source={Data.poster[2].image}  style={{width:width,height:height/15,marginBottom:15}}/>


        {renderPosters2()}

        <View style={{flexDirection:"row",justifyContent:"space-evenly",top:-7}}> 

<TouchableOpacity
 onPress={() =>
  navigation.navigate('BrandDisplay', {
    item:Data.poster[6],
  })
}>
<Image source={Data.poster[6].thumbnail} style={{width:width/2.5,height:height/3}} />
</TouchableOpacity>
<TouchableOpacity
 onPress={() =>
  navigation.navigate('BrandDisplay', {
    item:Data.poster[7],
  })
}>
<Image source={Data.poster[7].thumbnail} style={{width:width/2.5,height:height/3}} />
</TouchableOpacity>

    </View>

<TouchableWithoutFeedback
     onPress={() => {
      Linking.openURL("https://www.instagram.com/onika_sharma/");
    }}
>

<View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",top:-20}}>
<Texty label="Onika Sharma"/>
  <Image style={{width:20,height:20,left:-10,top:3}} source={Data.poster[2].image1}/>
<LottieView autoPlay   style={{marginTop:0,left:120}} loop  source={require('../assets/lottie/cat home.json')}/>
</View>

</TouchableWithoutFeedback>

      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  dotView: {flexDirection: 'row', justifyContent: 'center'},
  cardView: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom:15
  },

  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 10,
    height: height / 2.8,
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: 'white',
    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Home;
