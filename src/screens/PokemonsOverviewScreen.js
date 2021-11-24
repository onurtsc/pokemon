import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import PokemonItem from '../components/items/PokemonItem';
import styled from 'styled-components/native';
import LeftSideMenu from '../components/items/LeftSideMenu';
import RightSideMenu from '../components/items/RightSideMenu';

const PokemonOverviewScreen = props => {

    const list = useSelector(state => state.pokemons.availablePokemons)

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: 'Pokemons',
            headerLeft: () => <LeftSideMenu/>,
            headerRight: () => <RightSideMenu/>,
        })
    }, [list])

    const Container = styled.View`
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
    `
    const List = styled.FlatList`
        width: 100%;
        align-self: center;
        padding-top: 16px;
    `

    return (
        <Container>
            <List
                numColumns={3}
                keyExtractor={(item, index) => index.toString()}
                data={list}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <PokemonItem item={item} name={(parseInt(item.id) % 10).toString()} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}

export default PokemonOverviewScreen