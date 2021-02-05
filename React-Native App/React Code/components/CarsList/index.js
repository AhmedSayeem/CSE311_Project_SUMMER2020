import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native'; 
import CarItem from '../CarItem'; 
import Header from '../Header';

import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item}/> } 
                showsVerticalScrollIndicator={false}  
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
            <Header/>

        </View>

    );
};

export default CarsList;
