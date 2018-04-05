import React, { Component } from 'react';
import { Card, CardSection, Input} from './common';
import {StyleSheet, View, ImageBackground, Image, ScrollView, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

//TODO show total number of stars

class Failure extends Component {
    state = { name: '', age: '', stereoRate: '', stereotypies: '', password: '' };

    goBack()
    {
        Actions.timer();
    }

    render() {
        return(
                <ScrollView style={styles.container}>
                    <Image source = {require('project/images/negative.png')}
                    style={styles.enforcement}
                    />
                    <Button
                        onPress={this.goBack.bind(this)}
                        title="Return To Training"
                        color="#D30700"
                    />
                </ScrollView>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
    enforcement: {
        margin:40,
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default Failure;