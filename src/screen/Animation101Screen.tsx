import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAnimation } from '../hooks/useAnimation';


export const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation()
    return (
        <View style={ styles .container }>
             <Animated.View style={{
                    ...styles.orangeBox,
                    opacity: opacity,
                    transform: [{
                        translateY: position
                    }]
                   }} />

            <TouchableOpacity
                onPress={ () => { 
                    fadeIn();
                    startMovingPosition( 100 )  
                } }
            >
                <Text 
                    style={{ 
                        fontSize: 20, 
                        marginTop: 25, 
                        fontWeight: '400',
                        color: '#569abc'
                    }}> FadeIn </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ () => { 
                    fadeOut();
                    startMovingPosition( 0 )  
                }}
            >
                <Text 
                    style={{ 
                        fontSize: 20, 
                        marginTop: 15, 
                        fontWeight: '400',
                        color: '#569abc'
                }}> FadeOut </Text>
            </TouchableOpacity>


        </View>

        
    )
}


    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    orangeBox: {
        backgroundColor: '#f95369',
        width: 150,
        height: 150
    }
    
});

