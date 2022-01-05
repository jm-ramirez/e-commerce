import React from 'react'
import { ScrollView, Text } from 'react-native';
import Search from '../components/Search';
import StatusBar from '../components/StatusBar';
import colors from '../styles/colors';

export default function Account() {
    return (
        <>
            <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
            <Search />
            <ScrollView> 
                <Text>Estamos en Mi Cuenta</Text>
            </ScrollView>
        </>
    )
}