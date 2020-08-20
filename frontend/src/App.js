import React, { useState, useEffect } from 'react';
import api from './services/api';
const { uuid } = require("uuidv4");

import Header from './components/Header';
import './App.css';
//import backgroundImage from './assets/background.jpg';
//<img width={900}src={backgroundImage}/>
//const chave = 0;

function App(){
 
  const [projects, setProjects ] = useState([]);

  
//  const chave = chave + 1; 

  useEffect(() => {
    api.get('projects').then(response=> {
      setProjects(response.data);
    });
  }, []);

 async function handleAddProject(){

  const chave = chave + 1;

  const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Andre"
    });

  const project = response.data;

  setProjects([...projects,project]);


  }
  return (
    <>
      
      <Header title="Projects"/>
     
      <ul>
        {projects.map(project => <li key={uuid()}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
  
}

export default App;