import { Request, Response } from 'express';

import createUser from './services/CreateUser';


const user = createUser({
  name: 'Andre',
  email: 'andre@email.com',
  password: '123',
  techs: [
      'NodeJS', 
      'ReactJS', 
      'React Native',
      { title: 'JavaScript', experience: 100 },
      
  ]
});



export function helloWorld(request: Request , response: Response)  {
  return response.json({ message: 'Hello World from routes'});
}
