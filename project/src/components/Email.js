import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, AsyncStorage } from 'react-native';
import email from 'react-native-email';
import { Actions } from 'react-native-router-flux';
 
class Email extends Component {
    state = {to: '', cc: '', bcc: '', subject: '', body: 'a'};

    componentDidMount = () => AsyncStorage.getItem('dataForExport').then((value) => this.setState({ 'body': value }));

    goToData = () => {
        Actions.data();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TextInput style= {styles.input}
                        placeholder="To:  "
                        onChangeText={(to) => {this.setState({to})} }
                        value = {this.state.to}
                        keyboardType='email-address'
                        returnKeyType='next'
                        //onSubmitEditing={ () => this.ccInput.focus()}
                    />
                    <TextInput style= {styles.input}     
                        placeholder="Cc:  "
                        onChangeText={(cc) => {this.setState({cc})} } 
                        value = {this.state.cc}
                        keyboardType='email-address'
                        returnKeyType='next'
                        //ref={(input) => this.ccInput = input}
                        //onSubmitEditing={ () => this.bccInput.focus()}
                    />      
                    <TextInput style= {styles.input}     
                        placeholder="Bcc:  "
                        onChangeText={(bcc) => {this.setState({bcc})} }
                        value = {this.state.bcc} 
                        keyboardType='email-address'
                        returnKeyType='next'
                        //ref={(input) => this.bccInput = input}
                        //onSubmitEditing={ () => this.subjectInput.focus()}
                    />
                    {/*}
                    <TextInput style= {styles.input}     
                        placeholder="Subject:  "
                        onChangeText={(subject) => {this.setState({subject})} }
                        value = {this.state.subject}
                        returnKeyType='next'
                        //ref={(input) => this.subjectInput = input}
                        //onSubmitEditing={ () => this.bodyInput.focus()}
                    />
                    <TextInput style= {styles.input}
                        placeholder="Body:   "
                        multiline= {true}
                        onChangeText={(body) => {this.setState({body})} }
                        value = {this.state.body}
                        //ref={(input) => this.bodyInput = input}
                    />
                    */}
                    <Button title="Send" onPress={this.handleEmail} color="#D94336" />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button title="Return" onPress={this.goToData} color="#D94336" />
                </View>
            </ScrollView>
        )
    }
 
    handleEmail = () => {
        const to = [this.state.to] // string or array of email addresses
        
        email(to, {
            cc: [this.state.cc], // string or array of email addresses
            bcc: [this.state.bcc], // string or array of email addresses
            subject: "Stereotypy Training App Data",
            body: this.state.body,
            //attachment: "/storage/emulated/0/Download/data.csv"
        }).catch(console.error)
    }
}
 
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#fff'
    },
    input: {
        margin: 15,
        height: 40,
        padding: 10
    }
})

export default Email;
