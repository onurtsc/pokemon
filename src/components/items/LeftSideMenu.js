import React, { useState } from 'react'
import { View, Modal, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';

const LeftSideMenu = props => {
    const [modalVisible, setModalVisible] = useState(false)

    const ItemsContainer = styled.TouchableOpacity`
        display: flex;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        padding: 0 16px;
    `
    const Container = styled.View`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
        background-color: white;
        padding: 0 16px;
        position: absolute;
        left: 0;
    `

    const Icon = styled.Image`
        width: 20px;
        height: 20px;
        margin: 0 8px;
    `

    const CustomButton = styled.TouchableOpacity`
        padding: 8px 16px;
        background-color: rgb(40,170,250);
        align-items: center;
        border-radius: 4px;
        margin-bottom: 16px;
    `

    const ButtonText = styled.Text`
        color: white;
        font-weight: bold;
    `

    return (
        <View>
            <TouchableOpacity onPress={() => { setModalVisible(true) }}>
                <Icon source={require(`../../assets/icons/left.png`)} />
            </TouchableOpacity>
            <Modal visible={modalVisible} animationType='fade' transparent={true} >
                <ItemsContainer onPress={() => setModalVisible(false)} >
                    <Container>

                        <CustomButton onPress={() => {  }}>
                            <ButtonText>Button 1</ButtonText>
                        </CustomButton>

                        <CustomButton onPress={() => {  }}>
                            <ButtonText>Button 2</ButtonText>
                        </CustomButton>

                        <CustomButton onPress={() => {  }}>
                            <ButtonText>Button 3</ButtonText>
                        </CustomButton>

                    </Container>
                </ItemsContainer>
            </Modal>
        </View>
    )
}

export default LeftSideMenu