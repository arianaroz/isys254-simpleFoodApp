/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

export default class home extends Component {

  constructor(props){
    super(props);

    this.state={
      vendor:"",
    }

    this.vendors=[
        {value: 'Boost Juice'},
        {value: 'Cult Eatery'},
        {value: 'Iku Wholefoods'},
        {value: 'Sushi World'},
        {value: 'Ubar'},
        ];

  }

  render() {

    return (

      <View style={styles.container}>

      <View style={styles.headingContainer}>
      <Image source= {require('./cc.png')} style={styles.image} />
       </View>

        <View style={styles.viewRow1}>
                <Dropdown
                    containerStyle={styles.dropdown1}
                    label='Choose the place of business'
                    data = {this.vendors}
                    containerStyle={{width: '90%', marginLeft: 20} }
                    labelFontSize = {15}
                    fontSize = {20}
                    itemCount = {5}
                    itemPadding = {5}
                    baseColor = {'#353535'}
                    style = {{color: '#eb0256'}}
                    rippleOpacity = {0.30}
                    onChangeText={(value)=> this.setState({vendor:value})}
                />
        </View>
        <View style={styles.viewRow2}>
                <TouchableOpacity
                    style={styles.button}
                    onPress ={this.onPressEvent.bind(this)}
                    disabled={!this.state.vendor}>
                    <Text style={styles.buttonText}>
                      Proceed
                    </Text>
                </TouchableOpacity>
        </View>
      </View>
    );
  }
  onPressEvent(){
    let value = this.state.vendor;
    Actions.menu({vendorValue:value});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  image: {
     width: 270,
     height: 270,
  },
  headingContainer:{
      alignItems:'center',
      justifyContent: 'flex-start',
      height: 250,
  },
  viewRow1:{
    flex:1,
    justifyContent:'center',
  },
  viewRow2:{
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
      backgroundColor:'#353535',
      height: 56,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:3,
      marginTop: 50,
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  }
});
