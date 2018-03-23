import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input } from './common';

class SetupForm extends Component {
    state = { name: '', dob: '', stereoRate: '', stereotypies: '', password: '' };
    
    componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))
    
    setName = (value) => {
        AsyncStorage.setItem('name', value);
        this.setState({ 'name': value });
    }
    setDOB = (value) => {
        AsyncStorage.setItem('dob', value);
        this.setState({ 'dob': value });
    }
    setStereoRate = (value) => {
        AsyncStorage.setItem('stereoRate', value);
        this.setState({ 'stereoRate': value });
    }
    setStereos = (value) => {
        AsyncStorage.setItem('stereotypies', value);
        this.setState({ 'stereotypies': value });
    }
    setPassword = (value) => {
        AsyncStorage.setItem('password', value);
        this.setState({ 'password': value });
    }

    goToData = () => {
        Actions.dataView();
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='John'
                        label='Child Name'
                        value={this.state.name}
                        onChangeText={this.setName}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='01/02/2008'
                        label='Date of Birth'
                        value={this.state.dob}
                        onChangeText={this.setDOB}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='20'
                        label='Rate of Stereotypy (Num/Hr)'
                        value={this.state.stereoRate}
                        onChangeText={this.setStereoRate}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='Clapping Hands'
                        label='Stereotypy'
                        value={this.state.stereotypies}
                        onChangeText={this.setStereos}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='********'
                        label='Password'
                        value={this.state.password}
                        onChangeText={this.setPassword}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.goToData.bind(this)}>
                        Done
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default SetupForm;
