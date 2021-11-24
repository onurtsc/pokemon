import React from 'react'
import CustomIcon from '../UI/CustomIcon'
import styled from 'styled-components/native'

const PokemonItem = props => {

    const item = props.item

    const Container = styled.View`
        width: 29.33%;
        margin: 0 2% 0 2%;
        padding: 16px 8px 16px 8px;
        margin-bottom: 10px;
        border-radius: 5px;
        background-color: white;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0.2px 0.5px 0.5px 
    `

    const Title = styled.Text`
        font-size : 12px;
        color: rgb(56,60,73);
    `

    return (
        <Container onPress={props.onPress}>
            <CustomIcon name={props.name ? props.name : '1'} />
            <Title>{item.name}</Title>
        </Container>
    )
}


export default PokemonItem