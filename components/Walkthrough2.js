import {View, Text, Image,Dimensions} from 'react-native';
import React from 'react';
import {SIZES, imagesW} from '../constants';
import {useDynamicAnimation, MotiImage} from 'moti';
import {StyleSheet} from 'react-native';
const WIDTH=Dimensions.get('screen').width

const Walkthrough2 = ({animate}) => {
  // Moti Animation
  const motiImage1 = useDynamicAnimation(() => ({
    top: '30%',
    left: '25%',
  }));
  const motiImage2 = useDynamicAnimation(() => ({
    top: '45%',
    left: '15%',
  }));
  const motiImage3 = useDynamicAnimation(() => ({
    top: '50%',
    left: '25%',
  }));
  const motiImage4 = useDynamicAnimation(() => ({
    top: '61%',
    left: '40%',
  }));
  const motiImage5 = useDynamicAnimation(() => ({
    top: '27%',
    left: '50%',
  }));

React.useEffect(()=>{
if(animate){
  motiImage1.animateTo({
    top:"20%",
    left:"15%"
  })
  motiImage2.animateTo({
    top:"30%",
    left:-10
  })
  motiImage3.animateTo({
    top:"62%",
    left:"5%"
  })
  motiImage4.animateTo({
    top:"75%",
    left:"40%"
  })
  motiImage5.animateTo({
    top:"35%",
    left:"65%"
  })




}


},[animate])

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <Image
        source={imagesW.walkthrough_02_01}
        style={{
          ...styles.image,
          top: '35%',
          left: '35%',
          width: 106,
          height: 161,
          zIndex: 1,
        }}
      />
      <Image 
      
      source={imagesW.walkthrough_02_02} 
      
      style={{

        ...styles.image,
        top:"50%",
        left:"50%"
      }}
        />

        <MotiImage 
        state={motiImage1}
        source={imagesW.walkthrough_02_03}
        style={styles.image}
        />
        <MotiImage 
        state={motiImage2}
        source={imagesW.walkthrough_02_04}
        style={styles.image}
        />
        <MotiImage 
        state={motiImage3}
        source={imagesW.walkthrough_02_05}
        style={styles.image}
        />
        <MotiImage 
        state={motiImage4}
        source={imagesW.walkthrough_02_06}
        style={styles.image}
        />
        <MotiImage 
        state={motiImage5}
        source={imagesW.walkthrough_02_07}
        style={styles.image}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: 86,
    height: 112,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});

export default Walkthrough2;
