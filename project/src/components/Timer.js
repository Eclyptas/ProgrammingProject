import React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import {Vibration, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input } from './common';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


class Timer extends Component {
    constructor(props) {
        super(props);
    this.state = {clickCount:0,timeMultiplier:1, timeRemaining:20, time:20, incrementSet: false, incrementer:0, myFunction:0, failedRound: false, passedRound: false, clockRunning: false, timeInputMin:1, timeInputSec:30, timeInputMS:"1",timeInputSS:"30"}
    this.buttons = {stopButton:"Stop", startButton:"Start"}
    }

      startClock(){
      var _this = this;
      this.state.timeRemaining = (this.state.timeInputMin*60) + this.state.timeInputSec;
      this.state.time = (this.state.timeInputMin*60) + this.state.timeInputSec;
      this.state.clockRunning = true;

      clearInterval(this.state.incrementer);
      this.state.incrementer = setInterval(function () {
          _this.setState({
            timeRemaining:(_this.state.timeRemaining-1)
          });
        }, 1000);
      }
      
      stopClock(){
        clearInterval(this.state.incrementer);

        this.state.clockRunning = false;
        this.state.clickCount = 0;
        this.buttons.stopButton = "Stop";
        Vibration.vibrate(1000);
      }

      onChangedMin(text){
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                alert("please enter numbers only");
            }
        }
        if (Number(newText) > 59)
            newText = '59';
        this.setState({timeInputMS: newText});
        this.state.timeInputMin = Number(newText);
      }

      onChangedSec(text){
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                alert("please enter numbers only");
            }
        }
        if (Number(newText) > 59)
            newText = '59';
        this.setState({timeInputSS: newText});
        this.state.timeInputSec = Number(newText);
      }

      clickedStop()
      {
          this.state.clickCount += 1;
          this.buttons.stopButton = "Click again to fail";
          if (this.state.clickCount >= 2)
          {
             this.state.clockRunning = false;
             this.stopClock();
          }
          this.render();
      }

      completedSuccessfully()
      {

      }
      
      goToData = () => {
          Actions.data();
      }

    render() {
        if (this.state.timeRemaining <= 0)
        {
            this.state.clockRunning = false;
            this.stopClock();
            this.completedSuccessfully();
        }

            return (
                <Card style={styles.container}>
                    
                    <View style={styles.clockContainer}>
                        <AnimatedCircularProgress
                        size={300}
                        width={150}
                        fill={(this.state.timeRemaining/this.state.time)*100}
                        tintColor="#ff0505"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        ref="circularProgress"
                        backgroundColor="#ffffff"
                        rotation={0}
                        tension={0}
                        friction={20}
                        arcSweepAngle={360}
                        />
                    </View>
                    
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <Button
                        onPress={this.clickedStop.bind(this)}
                        title={this.buttons.stopButton}
                        color="#D30700"
                        />
                        <Button
                        onPress={this.startClock.bind(this)}
                        title={this.buttons.startButton}
                        color="#49D53C"
                        />
                    </View>
                    
                    <View style={styles.alternativeTextInput}>
                        <TextInput
                        style = {{fontSize:35}}
                        {...this.props}
                        editable = {true}
                        onChangeText={(text)=> this.onChangedMin(text)}
                        maxLength = {2}
                        keyboardType = 'numeric'
                        textAlign={'center'}
                        value= {this.state.timeInputMS}
                        />

                        <TextInput
                        style = {{fontSize:35}}
                        {...this.props}
                        editable = {true}
                        onChangeText={(text)=> this.onChangedSec(text)}
                        maxLength = {2}
                        keyboardType = 'numeric'
                        textAlign={'center'}
                        value= {this.state.timeInputSS}
                        />
                    </View>
                        
                        <CardSection>
                            <Button onPress={this.goToData.bind(this)} title="Data">
                                Data
                            </Button>
                        </CardSection>
                        
                    </Card>
                );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    clockContainer: {
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    alternativeTextInput: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
    textInput: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
  })

export default Timer;