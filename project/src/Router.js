import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SetupForm from './components/SetupForm';
import DataView from './components/DataView';
import Timer from './components/Timer';
import StarBoard from './components/StarBoard';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={ styles.headerStyle } titleStyle={ styles.navTitleStyle } >
            <Scene key="root" hideNavBar>
                <Scene key="setup" initial>
                    <Scene key="setupForm"
                           component={SetupForm}
                           title="Setup" />
                </Scene>
                <Scene key="data">
                    <Scene key="dataView" component={DataView} title="Data" />
                </Scene>
                <Scene key="timer">
                    <Scene key="timerView" component={Timer} title="Training" />
                </Scene>
                <Scene key="stars">
                    <Scene key="starBoard" component={StarBoard} title="Stars" />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    headerStyle: {
        backgroundColor: '#D94336',
        justifyContent: 'center',
        //alignItems: 'center',
        position: 'relative',
    },
    navTitleStyle: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    }
};

export default RouterComponent;