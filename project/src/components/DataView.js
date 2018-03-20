import React, { Component } from 'react';
import { AsyncStorage, Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class DataView extends Component {
    state = { name: '', dob: '', stereoRate: '', stereotypies: '', password: '' };

    componentDidMount = () => this.getData()
    
    getData = () => {
        AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }));
        AsyncStorage.getItem('dob').then((value) => this.setState({ 'dob': value }));
        AsyncStorage.getItem('stereoRate').then((value) => this.setState({ 'stereoRate': value }));
        AsyncStorage.getItem('stereotypies').then((value) => this.setState({ 'stereotypies': value }));
        AsyncStorage.getItem('password').then((value) => this.setState({ 'password': value }));
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
                    <Text>Stereotypy Rate: {this.state.stereoRate}</Text>
                </CardSection>

                <CardSection>
                    <Text>Stereotypies: {this.state.stereotypies}</Text>
                </CardSection>

                <CardSection>
                    <Text>Password(bad idea): {this.state.password}</Text>
                </CardSection>

                <CardSection>
                    <Button>
                        Done
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default DataView;