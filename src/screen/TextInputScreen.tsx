import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback,Keyboard, Text } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {

    const { theme: { colors } } = useContext( ThemeContext )

    const { form, onChange, isSuscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false,
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="TextInputs" />

                        <TextInput
                            style={ {...stylesScreen.inputStyle, color: colors.text, borderColor: colors.primary } }
                            placeholder="Ingrese su nombre"
                            placeholderTextColor="grey"
                            autoCorrect= { false }
                            autoCapitalize= "words"
                            onChangeText={ (value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={{...stylesScreen.inputStyle, color: colors.text, borderColor: colors.primary }}
                            placeholder="Ingrese su email"
                            placeholderTextColor="grey"
                            autoCorrect= { false }
                            autoCapitalize= "none"
                            onChangeText={ (value) => onChange(value, 'email')}
                            keyboardType="email-address"
                        />

                        <TextInput
                            style={{...stylesScreen.inputStyle, color: colors.text, borderColor: colors.primary  }}
                            placeholder="Ingrese su móvil"
                            placeholderTextColor="grey"
                            onChangeText={ (value) => onChange(value, 'phone')}
                            keyboardType="phone-pad"
                        />
                        
<                       View style={ stylesScreen.switchRow }>
                            <Text style={{... stylesScreen.switchText, color: colors.text }}>Suscribirse</Text>
                            <CustomSwitch isOn={ isSuscribed } onChange={ (value) => onChange( value, 'isSuscribed') } />
                        </View>

                        <HeaderTitle title={ JSON.stringify( form, null, 3) } />
                        
                        <HeaderTitle title={ JSON.stringify( form, null, 3) } />
                        
                        
                        <View style={{ height: 50 }}></View>
                    
                    </View>

                </TouchableWithoutFeedback>  
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle:{
        borderWidth: 1,
        // borderColor: 'rgba(249,78,93,0.5)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 5
    },    
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    },
    switchText: {
        fontSize: 40,
        
    }
});