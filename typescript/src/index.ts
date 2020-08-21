import express from 'express';

import { helloWorld }from './routes';

const app = express();

app.get('/', helloWorld);

// app.get('/', (request,response) => {
//   return response.json({message: 'Hello World, Again !!!'})
// })
app.listen(3333);