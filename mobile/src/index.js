import React, {useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'


import api from './services/api';

export default function App(){

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response=> {
     console.log(response.data);
     setProjects(response.data);
    });
  }, []);


  
  return (
    
    <>
       <StatusBar barStyle="ligh-content" backgroundColor="#7159C1"/>
        <View style={styles.container}>
          
          <Text style={styles.title}>Hello GoStack    Boa Madrugada </Text>
        
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center'
    
  },

  title:{
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold'  
  },

  statusbar:{
    backgroundColor: '#7159C1',
    color: '#7159C1'
  }




})