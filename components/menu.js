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
  ImageBackground,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

export default class home extends Component {

  constructor(props){
    super(props);

    let params = this.props.navigation.state.params;

    this.state	=	{
      error: "",
      foodPicked:"",
      drinkPicked:"",
      foodQuantity:0,
      drinkQuantity:0,
      menuVendor: params.vendorValue
    };
    this.fooditems=[
    {value:'Acai Bowl-$12'},
    {value:'Chicken Burger-$11'},
    {value:'Minestrone-$14'},
    {value:'Three Roll Combo-$10'},
    {value:'Neapolitan Pizza-$15'}
    ]

    this.drinkitems=[
    {value:'Berry Blast-$6'},
    {value:'Flat White-$4'},
    {value:'Kombucha-$5'},
    {value:'Peach Tea-$3'},
    {value:'Pint-$8'}
    ]
    this.quantities=[
    {value:1},
    {value:2},
    {value:3},
    {value:4},
    {value:5}
    ]
}

  render() {


    return (
<View style={styles.container}>
    <ImageBackground source ={require('./cover.png')} style={styles.image} >
      <View style={styles.headerContainer}>
      <Text style={styles.vendorHeading}>You've chosen {this.state.menuVendor}!</Text>
      <Text style={styles.error}> {this.state.error} </Text>
      </View>
  </ImageBackground>

     <View style ={styles.dropContainer}>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Food Item'
                      data={this.fooditems}
                      baseColor = {'#353535'}
                      style = {{color: '#eb0256'}}
                      fontSize = {17}
                      itemCount = {5}
                      onChangeText={(chosenFood) => this.setState({
                        foodPicked:chosenFood})}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      containerStyle={{width: '40%'}}
                      label='Quantity'
                      data={this.quantities}
                      baseColor = {'#353535'}
                      style = {{color: '#eb0256'}}
                      fontSize = {17}
                      itemCount={5}
                      onChangeText={(chosenFoodQuantity) => this.setState({
                        foodQuantity:chosenFoodQuantity})}
                        />
        </View>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Drinks'
                      data={this.drinkitems}
                      baseColor = {'#353535'}
                      style = {{color: '#eb0256'}}
                      fontSize = {17}
                      itemCount={5}
                      onChangeText={(chosenDrink) => this.setState({
                        drinkPicked:chosenDrink})}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      containerStyle={{width: '40%'}}
                      label='Quantity'
                      data={this.quantities}
                      baseColor = {'#353535'}
                      style = {{color: '#eb0256'}}
                      fontSize = {17}
                      itemCount={5}
                      onChangeText={(chosenDrinkQuantity) => this.setState({
                        drinkQuantity:chosenDrinkQuantity})}
                        />
        </View>
    </View>
        <View style={styles.viewRow3}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressEvent.bind(this)}>
                    <Text style={styles.buttonText}> Place Order</Text>
                </TouchableOpacity>
        </View>
      </View>
    );
  }
  onPressEvent(){
      let tempFood;
      let tempDrink;
      let foodPrice;
      let drinkPrice;
      let vendor = this.state.menuVendor;


     if(this.state.foodPicked.length > 1) {
          if(this.state.foodQuantity == 0) {
              return(this.setState({error: "Quantity is required"}));
              } else {
                tempFood = this.state.foodPicked;
                foodPrice = parseInt(tempFood.substring(tempFood.length - 2, tempFood.length));
            }
        } else {
            foodPrice = 0
        }

        if (this.state.drinkPicked.length > 1) {
             if (this.state.drinkQuantity == 0) {
                 return (this.setState({ error: "Quantity is required" }));
            } else {
                tempDrink = this.state.drinkPicked;
                drinkPrice = parseInt(tempDrink.substring(tempDrink.length - 1, tempDrink.length));
            }
        } else {
            drinkPrice = 0;
        }

     let totalFood = foodPrice*this.state.foodQuantity;
     let totalDrink = drinkPrice*this.state.drinkQuantity;
     let total = totalFood+totalDrink;

     Actions.summary({
         summaryTotal:total,
         summaryFood:this.state.foodPicked,
         summaryDrink:this.state.drinkPicked,
         summaryFoodQuantity:this.state.foodQuantity,
         summaryDrinkQuantity:this.state.drinkQuantity,
         menuVendor:vendor
        });
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    fontSize: 15,
  },
  headerContainer:{
      flex: 1,
      justifyContent:'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,

  },
  vendorHeading:{
    textAlign: 'center',
    fontSize: 17,
    padding: 15,
    marginTop: '32%',
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  error:{
      textAlign: 'center',
      fontSize: 16,
      color: '#db0050',
      paddingTop: 10,
  },
  dropContainer:{
    flex: 2.5,
    marginTop: 30,
    padding: 5,
  },
  viewRow2:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  viewRow3:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  dropdown2:{
    flex: 1,
  },
  button:{
      backgroundColor:'#db0050',
      height: 56,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:3,
      marginBottom: 30,
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  image:{
      flex: 1,
      resizeMode: 'cover'
  }
});
