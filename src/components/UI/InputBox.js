import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text, ActivityIndicator, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const InputBox = (props) => {
    const [editing, setEditing] = useState(false)
    const [watchError, setWatchError] = useState(false)

    const errorMessage = props.type === 'email' ? 'E-mail is not valid!' : 'Password is not valid!'

    return (
        <View style={styles.container}>
            <View style={{ ...styles.inputContainer }} >
                <Text style={styles.error} >{editing ? '' : (watchError && props.error ? errorMessage : '')}</Text>
                {props.label &&
                    <Text style={styles.label} >{props.label}</Text>
                }
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => { props.onChangeText(val) }}
                    onTouchStart={() => setEditing(true)}
                    onBlur={() => { setEditing(false); setWatchError(true) }}
                    value={props.value}
                    autoCorrect={false}
                    autoCapitalize='none'
                    multiline={false}
                    secureTextEntry={props.type === 'password' ? true : false}
                    testID={props.testID}
                />
            </View>
            {props.type === 'password' &&
                <TouchableOpacity onPress={props.onPressButton}>
                    {props.loading
                        ? <ActivityIndicator size='small' color='#FFFFFF' />
                        : <Text style={styles.buttonText} >Login</Text>}
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(0,0,0,0.32)',
        borderRadius: 4,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    label: {
        fontWeight: '400',
        fontSize: 12,
        color: '#FFFFFF'
    },
    inputContainer: {
        height: '100%',
        width: '70%',
        justifyContent: 'space-around',
    },
    input: {
        width: '100%',
        height: Platform.OS === 'android' ? 40 : 24,
        fontWeight: '400',
        fontSize: 16,
        color: '#FFFFFF'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ffd700'
    },
    error: {
        fontWeight: '400',
        fontSize: 12,
        color: 'yellow',
        position: 'absolute',
        left: 50
    },
})

export default InputBox