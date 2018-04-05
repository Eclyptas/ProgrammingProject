import React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import { Vibration, Button, StyleSheet, Text, View, TextInput, ScrollView, AsyncStorage, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input } from './common';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

// TODO Account for zero being entered as the time

class Timer extends Component {
    constructor(props) {
        super(props);
    this.state = {clickCount:0, timeMultiplier:1, timeRemaining:20, time:20, incrementSet: false, incrementer:0, myFunction:0, failedRound: false, passedRound: false, clockRunning: false, timeInputMin:1, timeInputSec:30, timeInputMS:"1",timeInputSS:"30",useScreen:0}
    this.buttons = {stopButton:"Stop", startButton:"Start"}
    }

    startClock() {
        
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

        AsyncStorage.getItem('sessionNo').then((value) => {
            var day = new Date().getDate();
            var month = new Date().getMonth() + 1;
            var year = new Date().getFullYear();
            var date = day + '-' + month + '-' + year;

            var temp = parseInt(value, 10) + 1;
            value = +value + 1;
            AsyncStorage.setItem( 'sessionNo', JSON.stringify(value) );

            var targetSeconds = this.state.timeInputSec.toString();
            if (targetSeconds.length == 1){
                targetSeconds = 0 + targetSeconds;
            }
            var targetTime = (this.state.timeInputMin*60) + this.state.timeInputSec;
            var achievedTime = targetTime - this.state.timeRemaining;
            var achievedTimeString = '';
            var achievedMinutes = Math.floor(achievedTime / 60);
            var achievedSeconds = (achievedTime % 60).toString();
            if (achievedSeconds.length == 1){
                achievedSeconds = 0 + achievedSeconds;
            }
            achievedTimeString += achievedMinutes + ":" + achievedSeconds;

            var passed = 'No';
            if (this.state.timeRemaining <= 0){
                passed = 'Yes';
            }

            AsyncStorage.getItem('sessions').then((data) => {
                data = JSON.parse( data );
                var newSession = {
                    'number': value,
                    'date': date,
                    'target': `${this.state.timeInputMin}:${targetSeconds}`,
                    'achieved': achievedTimeString,
                    'passed': passed
                }
                data.values.push(newSession);
                
                AsyncStorage.setItem( 'sessions', JSON.stringify( data ) );
            });
        })
      }

      onChangedMin(text){
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
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
          if (this.state.clickCount >= 2)
          {
             this.state.clockRunning = false;
             this.stopClock();
             this.failedSession();
          }
          this.render();
      }

      completedSuccessfully()
      {
        AsyncStorage.getItem('successCount').then((value) => {
            var temp = parseInt(value, 10) + 1;
            value = +value + 1;
            AsyncStorage.setItem( 'successCount', JSON.stringify(value) );
        })
        Actions.success();
      }

      failedSession()
      {
        AsyncStorage.getItem('failCount').then((value) => {
            var temp = parseInt(value, 10) + 1;
            value = +value + 1;
            AsyncStorage.setItem( 'failCount', JSON.stringify(value) );
        })
        Actions.failure();
      }
      
      goToData = () => {
          Actions.data();
      }

      goToStars = () => {
        Actions.stars();
    }

    render() {
        if (this.state.timeRemaining <= 0)
        {
            this.state.clockRunning = false;
            this.stopClock();
            this.completedSuccessfully();
        }

        
            return (
                <ScrollView scrollEnabled={true}>
                    <Card style={styles.container}>
                        
                        <View style={styles.clockContainer}>
                            <AnimatedCircularProgress
                            size={300}
                            width={150}
                            fill={100-((this.state.timeRemaining/this.state.time)*100)}
                            tintColor="#ffffff"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            ref="circularProgress"
                            backgroundColor="#D94336"
                            rotation={0}
                            tension={0}
                            friction={20}
                            arcSweepAngle={360}
                            />
                        </View>
                        
                        <View style={styles.alternativeLayoutButtonContainer}>
                            <Button
                            onPress={this.startClock.bind(this)}
                            title={this.buttons.startButton}
                            color="#49D53C"
                            />
                            <Button
                            onPress={this.clickedStop.bind(this)}
                            title={this.buttons.stopButton}
                            color="#D30700"
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
                                <Button onPress={this.goToData.bind(this)}
                                        title="Data" />
                            </CardSection>
                            {/*
                            <CardSection>
                                <Button onPress={this.goToStars.bind(this)}
                                        title="Stars" />
                            </CardSection>
                            */}
                        </Card>
                    </ScrollView>
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