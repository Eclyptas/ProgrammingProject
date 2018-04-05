import React, { Component } from 'react';
import { Button, Card, CardSection, Input} from './common';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';

//TODO show total number of stars

class Failure extends Component {
    state = { name: '', age: '', stereoRate: '', stereotypies: '', password: '' };

    goBack()
    {

    }

    render() {
        return(
                <ScrollView style={styles.container}>
                    <Image source = {require('project/images/negative.png')}
                    style={styles.enforcement}
                    />
                    <Button
                        onPress={this.goBack.bind(this)}  //NEEDS TO RETURN TO THE TIMER
                        title={"Try again"}
                        color="#D30700"
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


export default Failure;