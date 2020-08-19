import React from 'react';
import Header from './components/Header';

function App(){
 
  const projects = [ 'Desenvolvimento de App', 'Front-End Web']
  return (
    <>
      <Header title="HomePage">
        <ul>
          <li>Login</li>
        </ul>
      </Header>
      <hr/>
      <h1>Ola Estou no Header #1</h1>
      <br></br>
      
      <Header title="Projects">
        <ul>
          <li>Home</li>
          <li>Tecnologias</li>
          <li>Produtos</li>
          <li>Sobre Nós</li>
        </ul>
      </Header>
      <hr/>
      <h1>Ola Estou no Header #2</h1>
      <br></br>
      
    </>
  );
  
}

export default App;