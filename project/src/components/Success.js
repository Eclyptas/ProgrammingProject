import React, { Component } from 'react';
import { Card, CardSection, Input} from './common';
import {StyleSheet, View, ImageBackground, Image, ScrollView, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

//TODO show total number of stars

class Success extends Component {
    state = { name: '', age: '', stereoRate: '', stereotypies: '', password: '' };

    goBack()
    {
        Actions.timer();
    }

    render() {
        return(
                <ScrollView style={styles.container}>
                    <Image source = {require('project/images/positive.png')}
                    style={styles.enforcement}
                    />
                    <Button
                        onPress={this.goBack.bind(this)}  //NEEDS TO RETURN TO THE TIMER
                        title="Return to Training"
                        color="#49D53C"
                    />
                </ScrollView>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    enforcement: {
        margin:40,
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default Success;