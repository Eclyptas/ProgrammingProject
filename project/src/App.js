import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Header } from './components/common';
import SetupForm from './components/SetupForm';
import DataView from './components/DataView';
import Router from './Router';

class App extends Component {
    state = { dataEntered: true };

    render() {
        return (
            <Router />
        );
    }
}

export default App;
