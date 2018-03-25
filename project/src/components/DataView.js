import React, { Component } from 'react';
import { AsyncStorage, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input } from './common';

class DataView extends Component {
    state = { firstName: '', surname: '', dob: '', stereotypy1: '', stereotypy2: '', stereotypy3: '', password: '', sessionNo: '', dataForExport: '' };

    componentDidMount = () => this.getData();
    
    getData = () => {
        AsyncStorage.getItem('firstName').then((value) => this.setState({ 'firstName': value }));
        AsyncStorage.getItem('surname').then((value) => this.setState({ 'surname': value }));
        AsyncStorage.getItem('dob').then((value) => this.setState({ 'dob': value }));
        AsyncStorage.getItem('stereotypy1').then((value) => this.setState({ 'stereotypy1': value }));
        AsyncStorage.getItem('stereotypy2').then((value) => this.setState({ 'stereotypy2': value }));
        AsyncStorage.getItem('stereotypy3').then((value) => this.setState({ 'stereotypy3': value }));
    }

    exportData = () => {
        var firstName = this.state.firstName;
        var surname = this.state.surname;
        var dob = this.state.dob;
        var stereotypy1 = this.state.stereotypy1;
        var stereotypy2 = this.state.stereotypy2;
        var stereotypy3 = this.state.stereotypy3;

        var dataForExport = `${firstName},${surname},${dob},${stereotypy1},${stereotypy2},${stereotypy3}`;
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
                    <Text>Stereotypy 1: {this.state.stereotypy1}</Text>
                </CardSection>

                <CardSection>
                    <Text>Stereotypy 2: {this.state.stereotypy2}</Text>
                </CardSection>

                <CardSection>
                    <Text>Stereotypy 3: {this.state.stereotypy3}</Text>
                </CardSection>

                <CardSection>
                    <Text>Everything: {this.state.dataForExport}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={this.exportData.bind(this)}>
                        Export
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.goToTimer.bind(this)}>
                        Return to Training
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.goToSetup.bind(this)}>
                        Edit Info
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default DataView;
