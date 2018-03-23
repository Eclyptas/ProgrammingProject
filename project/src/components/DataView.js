import React, { Component } from 'react';
import { AsyncStorage, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input } from './common';

class DataView extends Component {
    state = { name: '', dob: '', stereoRate: '', stereotypy1: '', stereotypy2: '', stereotypy3: '', password: '', sessionNo: '', dataForExport: '' };

    componentDidMount = () => this.getData();
    
    getData = () => {
        AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }));
        AsyncStorage.getItem('dob').then((value) => this.setState({ 'dob': value }));
        AsyncStorage.getItem('stereoRate').then((value) => this.setState({ 'stereoRate': value }));
        AsyncStorage.getItem('stereotypy1').then((value) => this.setState({ 'stereotypy1': value }));
        AsyncStorage.getItem('stereotypy2').then((value) => this.setState({ 'stereotypy2': value }));
        AsyncStorage.getItem('stereotypy3').then((value) => this.setState({ 'stereotypy3': value }));
        AsyncStorage.getItem('password').then((value) => this.setState({ 'password': value }));
    }

    exportData = () => {
        var name = this.state.name;
        var dob = this.state.dob;
        var stereoRate = this.state.stereoRate;
        var stereotypy1 = this.state.stereotypy1;
        var stereotypy2 = this.state.stereotypy2;
        var stereotypy3 = this.state.stereotypy3;
        var password = this.state.password;

        var dataForExport = `${name},${dob},${stereoRate},${stereotypy1},${stereotypy2},${stereotypy3},${password}`;
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
                    <Text>Name: {this.state.name}</Text>
                </CardSection>

                <CardSection>
                    <Text>Date of Birth: {this.state.dob}</Text>
                </CardSection>

                <CardSection>
                    <Text>Rate: {this.state.stereoRate}</Text>
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
                    <Text>Password(bad idea): {this.state.password}</Text>
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
