import React, { Component } from 'react';
import { AsyncStorage, Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class DataView extends Component {
    state = { name: '', dob: '', stereoRate: '', stereotypies: '', password: '', sessionNo: '', dataForExport: '' };

    componentDidMount = () => this.getData()
    
    getData = () => {
        AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }));
        AsyncStorage.getItem('dob').then((value) => this.setState({ 'dob': value }));
        AsyncStorage.getItem('stereoRate').then((value) => this.setState({ 'stereoRate': value }));
        AsyncStorage.getItem('stereotypies').then((value) => this.setState({ 'stereotypies': value }));
        AsyncStorage.getItem('password').then((value) => this.setState({ 'password': value }));
    }

    exportData = () => {
        // TODO: loop according to sessionNo with \n at end of each

        var name = this.state.name;
        var dob = this.state.dob;
        var stereoRate = this.state.stereoRate;
        var stereotypies = this.state.stereotypies;
        var password = this.state.password;

        var dataForExport = `${name},${dob},${stereoRate},${stereotypies},${password}`;
        this.setState({ 'dataForExport': dataForExport });
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
                    <Text>Stereotypies: {this.state.stereotypies}</Text>
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
            </Card>
        );
    }
}

export default DataView;