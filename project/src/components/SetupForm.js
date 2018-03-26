import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input } from './common';

class SetupForm extends Component {
    state = { firstName: '', surname: '', dob: '', stereotypy1: '', stereotypy2: '', stereotypy3: '', password: '' };
    
    componentDidMount = () => {
        AsyncStorage.getItem('firstName').then((value) => this.setState({ 'firstName': value }));
        AsyncStorage.getItem('surname').then((value) => this.setState({ 'surname': value }));
        AsyncStorage.getItem('dob').then((value) => this.setState({ 'dob': value }));
        AsyncStorage.getItem('stereoRate').then((value) => this.setState({ 'stereoRate': value }));
        AsyncStorage.getItem('stereotypy1').then((value) => this.setState({ 'stereotypy1': value }));
        AsyncStorage.getItem('stereotypy2').then((value) => this.setState({ 'stereotypy2': value }));
        AsyncStorage.getItem('stereotypy3').then((value) => this.setState({ 'stereotypy3': value }));
    }

    setFirstName = (value) => {
        AsyncStorage.setItem('firstName', value);
        this.setState({ 'firstName': value });
        
        var starsTitle = `${value}'s Stars`;
        AsyncStorage.setItem('starsTitle', starsTitle);
    }
    setSurname = (value) => {
        AsyncStorage.setItem('surname', value);
        this.setState({ 'surname': value });
    }
    setDOB = (value) => {
        AsyncStorage.setItem('dob', value);
        this.setState({ 'dob': value });
    }
    setStereo1 = (value) => {
        AsyncStorage.setItem('stereotypy1', value);
        this.setState({ 'stereotypy1': value });
    }
    setStereo2 = (value) => {
        AsyncStorage.setItem('stereotypy2', value);
        this.setState({ 'stereotypy2': value });
    }
    setStereo3 = (value) => {
        AsyncStorage.setItem('stereotypy3', value);
        this.setState({ 'stereotypy3': value });
    }
    setPassword = (value) => {
        AsyncStorage.setItem('password', value);
        this.setState({ 'password': value });
    }

    goToData = () => {
        Actions.data();
    }

    render() {
        return (
            <ScrollView scrollEnabled={true}>
                <Card>
                    <CardSection>
                        <Input
                            placeholder={this.state.firstName}
                            label='First Name'
                            onChangeText={this.setFirstName}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder={this.state.surname}
                            label='Surname'
                            onChangeText={this.setSurname}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder={this.state.dob}
                            label='Date of Birth'
                            onChangeText={this.setDOB}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder={this.state.stereotypy1}
                            label='Stereotypy 1'
                            onChangeText={this.setStereo1}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder={this.state.stereotypy2}
                            label='Stereotypy 2'
                            onChangeText={this.setStereo2}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder={this.state.stereotypy3}
                            label='Stereotypy 3'
                            onChangeText={this.setStereo3}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder='********'
                            label='Password'
                            onChangeText={this.setPassword}
                        />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.goToData.bind(this)}>
                            Done
                        </Button>
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
}

export default SetupForm;
