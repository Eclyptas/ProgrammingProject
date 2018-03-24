import React, { Component } from 'react';
import { Button, Card, CardSection, Input} from './common';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';

class SetupForm extends Component {
    state = { name: '', age: '', stereoRate: '', stereotypies: [], pin: '' };

    render() {
        return (
                <ImageBackground
                    source={require('project/images/corkboard.png')}
                    style={styles.container}>

                    <View style = {styles.starRow}>
                        <Image source = {require('project/images/stargold.png')}
                        style={styles.star}
                        />
                        <Image source = {require('project/images/stargold.png')}
                        style={styles.star}
                        />
                        <Image source = {require('project/images/stargold.png')}
                        style={styles.star}
                        />
                        <Image source = {require('project/images/stargold.png')}
                        style={styles.star}
                        />
                        <Image source = {require('project/images/starblue.png')}
                        style={styles.star}
                        />
                    </View>

                    <View style = {styles.starRow}>
                        <Image source = {require('project/images/stargold.png')}
                        style={styles.star}
                        />
                        <Image source = {require('project/images/stargold.png')}
                        style={styles.star}
                        />
                        <Image source = {require('project/images/stargold.png')}
                        style={styles.star}
                        />
                    </View>
                    
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    starRow: {
        marginLeft: 90,
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        margin:2,
        width: 50,
        height: 55
    }
});


export default SetupForm;