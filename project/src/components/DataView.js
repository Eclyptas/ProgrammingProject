import React, { Component } from 'react';
import { ScrollView, AsyncStorage, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input } from './common';

class DataView extends Component {
    state = { firstName: '', surname: '', dob: '', id: '', stereotypy1: '', stereotypy2: '', stereotypy3: '', password: '', sessionNo: '',
              successCount: '', failCount: '', sessions: '', dataForExport: '', initialised: '' };

    componentDidMount = () => this.getData();
    
    getData = () => {
        AsyncStorage.getItem('firstName').then((value) => this.setState({ 'firstName': value }));
        AsyncStorage.getItem('surname').then((value) => this.setState({ 'surname': value }));
        AsyncStorage.getItem('dob').then((value) => this.setState({ 'dob': value }));
        AsyncStorage.getItem('id').then((value) => this.setState({ 'id': value }));
        AsyncStorage.getItem('stereotypy1').then((value) => this.setState({ 'stereotypy1': value }));
        AsyncStorage.getItem('stereotypy2').then((value) => this.setState({ 'stereotypy2': value }));
        AsyncStorage.getItem('stereotypy3').then((value) => this.setState({ 'stereotypy3': value }));

        AsyncStorage.getItem('sessionNo').then((value) => this.setState({ 'sessionNo': value }));
        AsyncStorage.getItem('successCount').then((value) => this.setState({ 'successCount': value }));
        AsyncStorage.getItem('failCount').then((value) => this.setState({ 'failCount': value }));
        AsyncStorage.getItem('sessions').then((value) => {
            var tempSessions = JSON.parse(value);
            
            var sessionInfo = "";

            for (i = 0; i < tempSessions.values.length; i++) {
                sessionInfo += `\n\nNumber: ${tempSessions.values[i].number}\nDate: ${tempSessions.values[i].date}\nTarget Time: ${tempSessions.values[i].target}\nAchieved Time: ${tempSessions.values[i].achieved}\nPassed? ${tempSessions.values[i].passed}`;
            }

            this.setState({ 'sessions': sessionInfo })
        })

        AsyncStorage.getItem('initialised').then((value) => this.setState({ 'initialised': value }));
    }

    exportData = () => {
        var firstName = this.state.firstName;
        var surname = this.state.surname;
        var dob = this.state.dob;
        var id = this.state.id;
        var stereotypy1 = this.state.stereotypy1;
        var stereotypy2 = this.state.stereotypy2;
        var stereotypy3 = this.state.stereotypy3;

        var initialised = this.state.initialised;
        var sessionNo = this.state.sessionNo;

        var dataForExport = `${firstName},${surname},${dob},${stereotypy1},${stereotypy2},${stereotypy3},${initialised},${sessionNo}`;
        this.setState({ 'dataForExport': dataForExport });
    }

    goToTimer = () => {
        Actions.timer();
    }
    goToSetup = () => {
        Actions.setup();
    }
    
    render() {
        return (
            <ScrollView scrollEnabled={true}>
                <Card>
                    <CardSection>
                        <Text>First Name: {this.state.firstName}</Text>
                    </CardSection>

                    <CardSection>
                        <Text>Surname: {this.state.surname}</Text>
                    </CardSection>

                    <CardSection>
                        <Text>Date of Birth: {this.state.dob}</Text>
                    </CardSection>

                    <CardSection>
                        <Text>ID Number: {this.state.id}</Text>
                    </CardSection>

                    <CardSection>
                        <Text>Stereotypy 1: {this.state.stereotypy1}</Text>
                    </CardSection>

                    <CardSection>
                        <Text>Stereotypy 2: {this.state.stereotypy2}</Text>
                    </CardSection>

                    <CardSection>
                        <Text>Stereotypy 3: {this.state.stereotypy3}</Text>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.goToSetup.bind(this)}>
                            Edit Info
                        </Button>
                    </CardSection>
                </Card>

                <Card>
                    <CardSection>
                        <Text>Sessions: {this.state.sessionNo}</Text>
                    </CardSection>

                    <CardSection>
                        <Text>Successful Sessions: {this.state.successCount}</Text>
                    </CardSection>

                    <CardSection>
                        <Text>Failed Sessions: {this.state.failCount}</Text>
                    </CardSection>

                    <CardSection>
                        <Text>Session Details: {this.state.sessions}</Text>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.goToTimer.bind(this)}>
                            Return to Training
                        </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.exportData.bind(this)}>
                            Export
                        </Button>
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
}

export default DataView;
