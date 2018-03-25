import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import SetupForm from './components/SetupForm';
import DataView from './components/DataView';
import Timer from './components/Timer';
import StarBoard from './components/StarBoard';

class RouterComponent extends Component {
    state = { starsTitle: '' };

    componentDidMount = () => {
        AsyncStorage.getItem('starsTitle').then((value) => this.setState({ 'starsTitle': value }));
        
        {/*
        var firstName = this.state.firstName;
        var temp = "'s Stars";
        var starsTitle = `${firstName}${temp}`;
        this.setState({ 'starsTitle': starsTitle });
        */}
    }

    render() {
        return (
            <Router navigationBarStyle={ styles.headerStyle } titleStyle={ styles.navTitleStyle } >
                <Scene key="root" hideNavBar>
                    <Scene key="setup" >
                        <Scene key="setupForm"
                            component={SetupForm}
                            title="Setup" />
                    </Scene>
                    <Scene key="data">
                        <Scene key="dataView"
                            component={DataView}
                            title="Data" />
                    </Scene>
                    <Scene key="timer" initial >
                        <Scene key="timerView"
                            component={Timer}
                            title="Training" />
                    </Scene>
                    <Scene key="stars" >
                        <Scene key="starBoard"
                            component={StarBoard}
                            title={this.state.starsTitle} />
                    </Scene>
                </Scene>
            </Router>
        );
    }
};

const styles = {
    headerStyle: {
        backgroundColor: '#D94336',
        justifyContent: 'center',
        position: 'relative',
    },
    navTitleStyle: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    }
};

export default RouterComponent;