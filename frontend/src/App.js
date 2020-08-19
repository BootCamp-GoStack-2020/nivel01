import React, { useState, useEffect } from 'react';
import api from './services/api'

import Header from './components/Header';
import './App.css';
//import backgroundImage from './assets/background.jpg';
//<img width={900}src={backgroundImage}/>

function App(){
 
  const [projects, setProjects ] = useState([]);

  useEffect(() => {
    api.get('projects').then(response=> {
      setProjects(response.data);
 
    })
  }, [projects]);

  function handleAddProject(){
//    projects.push(`Novo Projeto ${Date.now()}`);
  
  setProjects([...projects, `Novo Projeto ${Date.now()}`]);


  console.log(projects);
  }
  return (
    <>
      
      <Header title="Projects"/>
     
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
  
}

export default App;