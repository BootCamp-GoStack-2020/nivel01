import React, {useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar } from 'react-native'


import api from './services/api';

export default function App(){

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response=> {
//     console.log(response.data);
     setProjects(response.data);
    });
  }, []);



  return (
    
    <>
       <StatusBar barStyle="ligh-content" backgroundColor="#7159C1"/>
        <ScrollView style={styles.container}>
          
          {projects.map(project => (
              <Text style={styles.project} 
                  key={project.id}>
                  {project.title}
              </Text>))}

        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#7159C1',

    
  },

  project:{
    color: '#FFF',
    fontSize: 16,

  },

  statusbar:{
    backgroundColor: '#7159C1',
    color: '#7159C1'
  }




})