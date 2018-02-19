import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class SetupForm extends Component {
    state = { name: '', age: '', stereoRate: '', stereotypies: [], pin: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='John'
                        label='Child Name'
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='9'
                        label='Age'
                        value={this.state.age}
                        onChangeText={age => this.setState({ age })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='20'
                        label='Rate of Stereotypy (Num/Hr)'
                        value={this.state.stereoRate}
                        onChangeText={stereoRate => this.setState({ stereoRate })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder='Clapping Hands'
                        label='Stereotypy'
                        value={this.state.stereotypies[0]}
                        onChangeText={stereotypy => this.setState({ stereotypies: stereotypy })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='****'
                        label='PIN'
                        value={this.state.pin}
                        onChangeText={pin => this.setState({ pin })}
                    />
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

export default SetupForm;