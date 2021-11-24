import React, { useEffect, useState } from 'react'
import { ImageBackground, ScrollView } from 'react-native'
import InputBox from '../components/UI/InputBox'
import { useDispatch } from 'react-redux'
import * as pokemonActions from '../store/actions/pokemonActions'
import styled from 'styled-components/native'

const LoginScreen = (props) => {
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(' ')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [invalidInputs, setInvalidInputs] = useState(['email', 'senha'])

    const dispatch = useDispatch()

    useEffect(() => {
        props.navigation?.setOptions({
            headerTitle: '',
            headerLeft: null,
            headerStyle: {
                elevation: 0,
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                },
                height: 0
            },
        })
    }, [])

    const loginHandler = async () => {
        if (invalidInputs?.length > 0) {
            setErrorMessage('Email ou senha é inválido')
            console.log(invalidInputs)
            return
        }
        setLoading(true)
        setErrorMessage(' ')
        try {
            await dispatch(pokemonActions.fetchPokemons())
            props.navigation.navigate('PokemonsOverview')
            setLoading(false);
        } catch (err) {
            console.log("Error with getting data: ", err);
            setLoading(false);
        }
    }

    const onChangeEmail = (val) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(val.toLowerCase())) {
            const errorExist = invalidInputs.includes('email')
            if (!errorExist) {
                const newList = invalidInputs
                newList.push('email')
                setInvalidInputs(newList)
            }
        } else {
            setInvalidInputs(invalidInputs.filter(inv => inv !== 'email'))
        }
        setEmail(val.trim())
    }

    const onChangepassword = (val) => {
        setPassword(val)
        if (val.length < 6) {
            const errorExist = invalidInputs.includes('senha')
            if (!errorExist) {
                setInvalidInputs([...invalidInputs, 'senha'])
            }
        } else {
            setInvalidInputs(invalidInputs.filter(inv => inv !== 'senha'))
        }
    }

    const ErrorText = styled.Text`
        font-size: 16px;
        color: yellow;
        text-align: center;
    `

    const Logo = styled.Image`
        width: 200px;
        height: 200px;
        align-self: center;
        position: absolute;
        top: 0;
    `

    return (
        <ImageBackground source={require('../assets/images/login_background.jpeg')} resizeMode="cover" style={{flex: 1, paddingVertical: 16}} >
            <ScrollView contentContainerStyle={{flex: 1, paddingHorizontal: 16, justifyContent: 'center'}} >
                <Logo source={require('../assets/images/logo.png')} />
                <InputBox
                    type='email'
                    value={email}
                    onChangeText={onChangeEmail}
                    label='E-Mail'
                    error={invalidInputs.find(inv => inv === 'email')}
                    testID='email.input'
                    onPressButton={() => { }}
                    loading={false}
                />
                <InputBox
                    type='password'
                    value={password}
                    onChangeText={onChangepassword}
                    label='Senha'
                    error={invalidInputs.find(inv => inv === 'senha')}
                    testID='password.input'
                    onPressButton={loginHandler}
                    loading={loading}
                />
                <ErrorText>{errorMessage}</ErrorText>
            </ScrollView>
        </ImageBackground>
    )
}

export default LoginScreen