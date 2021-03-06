import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const CategoryGridTitle = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >=21) {
        TouchableCmp = TouchableNativeFeedback;
    }
   return  ( 
        <View style={styles.gridItem} > 
        <TouchableCmp style={{flex: 1}}
            
            onPress={props.onSelect}
                 >
            <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
            </TouchableCmp>
        </View>
   )};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >=21 ? "hidden" : 'visible',
        elevation: 3,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',  
        padding: 15, 
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26, 
        shadowRadius: 10,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'right',
    }
});

export default CategoryGridTitle;