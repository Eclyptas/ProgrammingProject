import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Header } from './components/common';
import SetupForm from './components/SetupForm';
import DataView from './components/DataView';

class App extends Component {
    state = { dataEntered: false };

    render() {
        switch (this.state.dataEntered) {
            case false:
                return (
                    <ScrollView scrollEnabled={true}>
                        <Header headerText="Stereotypy App" />
                        <SetupForm />
                    </ScrollView>
                );
            case true:
                return (
                    <ScrollView scrollEnabled={true}>
                        <Header headerText="Stereotypy App" />
                        <DataView />
                    </ScrollView>
                );
        }
    }
}

export default App;
