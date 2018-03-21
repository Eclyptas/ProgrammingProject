import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SetupForm from './components/SetupForm';
import DataView from './components/DataView';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="setup">
                    <Scene key="setupForm" component={SetupForm} title="Setup" initial />
                </Scene>
                <Scene key="data">
                    <Scene key="dataView" component={DataView} title="Data" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;