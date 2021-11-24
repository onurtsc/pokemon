import React from 'react'
import styled from 'styled-components'

const CustomIcon = (props) => {

    const iconObject = icons.find(ic => ic.name === props.name)

    const Icon = styled.Image`
        width: 80px;
        height: 80px;
    `

    return <Icon source={iconObject?.link} /> 
}

const icons = [
    { name: '1', link: require('../../assets/images/1.png')},
    { name: '2', link: require('../../assets/images/2.png')},
    { name: '3', link: require('../../assets/images/3.png')},
    { name: '4', link: require('../../assets/images/4.png')},
    { name: '5', link: require('../../assets/images/5.png')},
    { name: '6', link: require('../../assets/images/6.png')},
    { name: '7', link: require('../../assets/images/7.png')},
    { name: '8', link: require('../../assets/images/8.png')},
    { name: '9', link: require('../../assets/images/9.png')},
    { name: '0', link: require('../../assets/images/0.png')},

]

export default CustomIcon