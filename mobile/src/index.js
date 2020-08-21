import React, {useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'


import api from './services/api';

export default function App(){

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response=> {
//     console.log(response.data);
     setProjects(response.data);
    });
  }, []);

async function handleAddProject(){
  const response = await api.post('projects', {
    title: `Projeto Mobile em ${Date.now()}`,
    owner: 'Andre Vianna'
  });

  const project = response.data;

 setProjects([...projects, project])



//  setProjects(project => [...projects, project]);
}

  return (
    
    <>
       <StatusBar barStyle="ligh-content" backgroundColor="#7159C1"/>

        <SafeAreaView  style={styles.container}>

              <FlatList 
                  style={{ marginTop: 30 }}
                          data={projects}
                  keyExtractor={project => project.id}
                  renderItem={({ item: project }) => (

                    <View style={styles.item}>
                      <Text key={project.id} style={styles.project}>
                          {project.title}
                      </Text>            
                    </View>
                  
                  )}
              />

              <TouchableOpacity 
                    activeOpacity={0.2} 
                    style={styles.button}
                    onPress={handleAddProject}
              >
                <Text style={styles.butttonText}>Add Project</Text>
              </TouchableOpacity>



        </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex:1,
  //   backgroundColor: '#7159C1',
  //   justifyContent: 'center',
  //   alignItems: 'center'
    
  // },
  
  container: {
//    flex:1,
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#7159C1',
        
  },
  project:{
    color: '#FFF',
    fontSize: 16,
  },
  item: {
    backgroundColor: '#009975',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  statusbar:{
    backgroundColor: '#7159C1',
    color: '#7159C1'
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  butttonText:{
    fontWeight: 'bold',
    fontSize: 16,

  }
})