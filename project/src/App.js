import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Header } from './components/common';
import SetupForm from './components/SetupForm';

class App extends Component {
    render() {
        return (
            <ScrollView scrollEnabled={true}>
                <Header headerText="Stereotypy App" />
                <SetupForm />
            </ScrollView>
        );
    }
}

export default App;
