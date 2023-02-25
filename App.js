import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, Switch, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Styles from './styles/Styles';
import { darkTheme, lightTheme } from './themes/dl.js';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  let myStyle = isDark ? darkTheme : lightTheme;
  
  return(
    <ScrollView contentContainerStyle={myStyle.container}>
      <View style={Styles.container}>
        <Switch
          style={Styles.switch}   //can't use myStyle, Text string must be rendered whthin a <Text> component 
          value={isDark}
          onValueChange={(newValue) => setIsDark(newValue)}
          thumbColor={isDark ? '#f5b590':'#f5b590'}
          trackColor={{false:'#006e33', true:'#ccffe5'}}
        />
      </View>
      <View style={{marginTop:10}}>
        <Text style={myStyle.title}>ALCOMETER</Text>
      </View>
   
      <View>
        <AlcoForm/>
      </View>
    </ScrollView>    
  );
}

function AlcoForm() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  /*useEffect(() => {
    calculateAlco();
  }, [weight, bottles, hours, gender]);*/
    
  function calculateAlco() {
    if (gender === 'male') {
      setResult((bottles*0.33*8*4.5-(hours*weight/10))/(weight*0.7));
    } else {
      setResult((bottles*0.33*8*4.5-(hours*weight/10))/(weight*0.6));
    }

    if (weight === 0 || !weight) {
      Alert.alert('Warning', 'Please enter your weight.');
      return;
    }
  }

  return (
    //Can't use "myStyle.form" render? myStyle.
    <View style={Styles.form}>
      <FormInput label='Weight:' value={weight} onChange={setWeight} labelStyle={{Color:'white'}}/>

      <View>
        <Text style={Styles.label}>Bottles</Text>
        <NumericInput
          value={bottles}
          onChange={val => setBottles(val)}
          maxValue={50}
          minValue={0}
          rounded
          textColor='#ef7f3e'
          rightButtonBackgroundColor='#ea7430'
          leftButtonBackgroundColor='#ea7430'
          iconStyle={{color: 'white'}}  //+- icon color
        />
      </View>

      <View>
        <Text style={Styles.label}>Hours</Text>
        <NumericInput
          value={hours}
          onChange={val => setHours(val)}
          maxValue={50}
          minValue={0}
          rounded
          textColor='#ef7f3e'
          rightButtonBackgroundColor='#ea7430'
          leftButtonBackgroundColor='#ea7430'
          iconStyle={{color: 'white'}}/>
      </View>

      <View style={{marginTop:30}}>
        <Text style={Styles.label}>Select your gender:</Text>
          <RadioButton.Group
            onValueChange={setGender}
            value={gender}
            color= 'yellow'
          >
            <RadioSelection value={'male'} label={'Male'} />
            <RadioSelection value={'female'} label={'Female'} />
          </RadioButton.Group>
      </View>          
        
      <View>
        <Text style={Styles.result}>{result.toFixed(2)}</Text>
      </View>
        
      <TouchableOpacity onPress={calculateAlco}>
        <Text style={Styles.button}>CALCULATE</Text>
      </TouchableOpacity>
    </View>
  );
}

function RadioSelection({value, label}){    //order change
  return(
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <RadioButton color='#ff4500' value={value}/>
      <Text style={Styles.RadioButton}>{label}</Text>
    </View>
  )
}

function FormInput({label, value, onChange}){
  return(
    //can't find "myStyle"
    <View>
      <Text style={[Styles.label, {color: '#ea7430'}]}>{label}</Text>
      <TextInput
        keyboardType='number-pad'
        value={value}
        style={Styles.textInput}
        onChangeText={ t=> onChange(t)}
      />
    </View>  
  )
}