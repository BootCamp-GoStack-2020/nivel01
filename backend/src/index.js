const express = require('express');

const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET       -> Buscar Informações do Back-End
 * POST      -> Criar uma Informação no Back-End
 * PUT/PATCH -> Atualizar uma Informação no Back-End
 * DELETE    -> Para Deletar uma Inforamção no Backend
 */

/**
 *  Tipos de Parâmetros 
 *  
 * Query   Params  -> Filtros & Paginação
 *                              base_url/projects?title=React&owner=diego
 * 
 * Route   Params  -> Identificar recursos (Atualizar / Deletar)
 *  
 * Request Body    -> Conteúdo na hora cruar ou editar um recurso(JSON) 
 * 
 * 


/**
 *  Middleware      -> Interceptador de Requisições que interromper totalmente a requisição ou alterar dados da requisição
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

 

/**
 * Armazenamento dos Dados em Memória
 */


const projects = [];

function logRequests(request, response, next )  {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;


  console.log('Método              -----',logLabel);
  
  console.log('Passo [1]       -----',logLabel);

  console.time(logLabel);

  next();

  console.log('Passo [2]       -----',logLabel);

  console.timeEnd(logLabel);

}


function validateProjectId(request, response, next){
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid Project ID"})
  }

  return next();
}

app.use(logRequests);

 // Médoto Get -----------------------------------------------------------------

app.get('/projects', (request, response)=> {

  const { title } = request.query;
  console.log('Passo [3]       -----');


  // const { title, owner } = request.query;
  // console.log("1o Parametro -> title: " , title );
  // console.log("2o Parametro -> owner: " , owner );

  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

    return response.json(results);
});


// Método Post -----------------------------------------------------------------

app.post('/projects', (request,response)=>{

  const { title, owner } = request.body;
  
  const project = { id: uuid(), title, owner };

  projects.push(project);

  // const body = request.body;  
  // console.log('Corpo da Requisição Post', body);

  
  console.log('lista de projetos', projects);

  return response.json(projects);

  });

 // Médoto Put -----------------------------------------------------------------

app.put('/projects/:id', validateProjectId, (request,response)=> {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex( project => project.id === id );

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.'})
  }

  const project = {
    id,
    title,
    owner
  };

  projects[projectIndex] = project;

  
  console.log('Update do projeto --->', project);

//  console.log(':ids', params);
  return response.json(project)
})

 // Método Delete --------------------------------------------------------------

 app.delete('/projects/:id', validateProjectId, (request, response) => {

  const { id } = request.params;
  
  //const { title, owner } = request.body;

  const projectIndex = projects.findIndex( project => project.id === id );

  if (projectIndex < 0) {
    return response.status(400).json({ error: 'Project not found.'})
  }

  projects.splice(projectIndex, 1);

  
  console.log('Projeto Deletado :id --->', id);
  
  return response.send();


 });


app.listen(3333, () => {
  console.log('👍👍 Backend Server...')
});