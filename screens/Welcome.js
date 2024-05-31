import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import TextButton  from "../components/TextButton";
import { COLORS, FONTS, SIZES, imagesW } from '../constants';

const Welcome = ({ navigation }) => {

    const letterAnimation = {
        0: {opacity: 0, translateY:-80},
        1: {opacity: 1, translateY: 0},
      };
      const letterAnimation1 = {
        0: {opacity: 0, translateY: 42, translateX: -42},
        1: {opacity: 1, translateY: 0, translateX: 0},
      };
   
      const ONIKA="ONIKA"
      

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.light
            }}
        >
            {/* Logo & Title */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={imagesW.logo}
                    style={{
                        width: 200,
                        height: 200
                    }}
                />

                <Text style={{ marginTop: SIZES.padding,fontWeight:"bold",fontSize:35, fontWeight: '800',    color: '#333',

                textTransform: 'uppercase',
            letterSpacing:5 }}>
                    Welcome 
                </Text>
                <Animatable.Text        useNativeDriver
              animation={letterAnimation}
              delay={300 + ONIKA.split('').length * 50} 
              style={{ marginTop: SIZES.base,fontWeight:"bold",fontSize:30, fontWeight: '800',
                textTransform: 'uppercase',
                color: '#4f4a4a',letterSpacing:7 }}

                >
                    Onika
                </Animatable.Text>
            </View>

            {/* Footer Buttons */}
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    marginBottom: 30
                }}

            >
                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                    label="Get Started"
                    onPress={() => navigation.navigate("Walkthrough")}
                />

                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        marginTop: SIZES.base,
                        backgroundColor: null
                    }}
                    label="Already have an account"
                    labelStyle={{
                        color: COLORS.primary
                    }}
                //onPress
                />
            </View>
        </View>
    )
}

export default Welcome;