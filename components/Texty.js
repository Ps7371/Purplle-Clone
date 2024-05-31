
import React from 'react';
import {
    Text,View
} from 'react-native';
import { FONTS, COLORS } from "../constants";
const Texty=({label})=>{
return(
    <View>

    <Text style={{ 
        fontFamily: "Poppins-Italic",
        marginHorizontal: 20,
        fontWeight: 'normal',
        color: 'black',
        fontSize: 20,
        textTransform:"uppercase",
        letterSpacing:2,
        marginTop:20,
        marginBottom:15,
        fontWeight:"700",
    }}>{label}</Text>
    </View>
)
}
export default Texty
