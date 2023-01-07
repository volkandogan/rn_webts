import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { BriefCard } from '../components'

const Home = () => {
    return (
        <View>
            <BriefCard title="Title" subtitle='Subtitle' currency={100} />
        </View>
    )
}