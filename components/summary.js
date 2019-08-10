import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

export default class summary extends Component {

  constructor(props) {
    super(props);

    let params = this.props.navigation.state.params;

    this.state = {
        finalPrice: params.summaryTotal,
        finalFood: params.summaryFood,
        finalDrink: params.summaryDrink,
        finalFoodQuantity: params.summaryFoodQuantity,
        finalDrinkQuantity: params.summaryDrinkQuantity,
        menuVendor: params.menuVendor
    };
  }

    render() {

        return(
         <ImageBackground source={require('./order.png')} style={styles.backgroundImage}>
          <View>
        <View style= {styles.headingContainer}>
               <Text style={styles.heading}>Thanks for ordering at the</Text>
               <Text style={styles.heading}>Campus Common!</Text>
               </View>
           <Text style= {styles.orderID}> Order ID #124758 </Text>

           <View style= {styles.orderDetails}>
           <Text style={styles.vendorHeading}>{this.state.menuVendor}</Text>
           <Text style={styles.order}>Food: {this.state.finalFood}  Qty {this.state.finalFoodQuantity} </Text>
           <Text style={styles.order}>Drinks: {this.state.finalDrinkQuantity} Qty {this.state.finalDrink}</Text>
           <Text style={styles.order}>Total: ${this.state.finalPrice}</Text>
         </View>

           <View style={styles.timeContainer}>
            <Text style={styles.time}>Your order will be ready for pickup in 15 minutes.</Text>
            </View>
            <Image source={require('./bar.png')} style={styles.image}/>

           <View style={styles.developers}>
           <Text style={styles.dev}>App developed by</Text>
           <Text style={styles.dev}>Ariana: 44616732</Text>
           <Text style={styles.dev}>Danny: 44976135</Text>
           <Text style={styles.dev}>Sandy: 45280436</Text>
           </View>

         </View>
         </ImageBackground>
     );
    }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  headingContainer:{
     alignItems:'center',
     justifyContent: 'flex-start',
     textAlign: 'center',
     height: 100,
     marginTop: '10%',
     height: 80,
  },
  heading:{
     fontSize: 20,
     fontWeight: 'bold',
     color: '#353535',
 },
 orderID: {
     color: '#eb0256',
     justifyContent: 'flex-start',
     textAlign: 'center',
     alignItems:'center',
     fontSize: 18,
     marginBottom: '5%',
 },
 orderDetails:{
     textAlign: 'left',
     padding: 20,
 },
 order:{
     fontSize: 17,
     color:'#353535',
     paddingTop: 5,

 },
 vendorHeading:{
     fontSize: 18,
     fontWeight: 'bold',
     color:'#353535',
 },
 timeContainer:{
     marginTop: 10,
     justifyContent: 'flex-start',
     alignItems:'center',
 },
 time:{
     textAlign: 'center',
     fontSize: 17,
     color:'#353535',

 },
 image:{
     justifyContent: 'flex-start',
     alignItems:'center',
     width: 410,
     height: 110,
     marginTop: 15,
 },
 developers:{
     justifyContent: 'flex-start',
     marginLeft: 20,
     marginTop: -10,
 },
 dev:{
     paddingTop:3,
 }
});
