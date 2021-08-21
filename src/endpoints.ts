import { Router, Request, Response } from 'express';

class Endpoints {
  routes = Router();

  constructor() {
    this.routes.get('/users/:id', (req: Request, res: Response) => {
      // #swagger.tags = ['User']
      // #swagger.description = 'Endpoint para obter um usuário.'
      // #swagger.parameters['id'] = { description: 'ID do usuário.' }

      /* #swagger.responses[200] = { 
          description: 'Usuário encontrado.' 
        } */
      return res.status(200).json('okkk');
    });

    this.routes.post('/somar', (req, res) => {
      // #swagger.tags = ['Math']
      // #swagger.description = 'Endpoint efetuar uma soma.'
      /* #swagger.parameters['a'] = {
          description: 'Um número para somar',
          type: 'number'
      } */
      /* #swagger.parameters['b'] = {
        description: 'Um número para somar',
        type: 'number'
      } */
      /* #swagger.responses[200] = { 
        description: 'O resultado da soma' 
      } */

      const a = parseInt(req?.query?.a as string) || 0;
      const b = parseInt(req?.query?.b as string) || 0;

      return res.status(200).json({ result: a + b });
    });

    this.routes.post('/sub', (req, res) => {
      // #swagger.tags = ['Math']
      // #swagger.description = 'Endpoint efetuar uma subtração.'
      /* #swagger.parameters['a'] = {
          description: 'Um número para subtrair',
          type: 'number'
      } */
      /* #swagger.parameters['b'] = {
        description: 'Um número para subtrair',
        type: 'number'
      } */
      /* #swagger.responses[200] = { 
        description: 'O resultado da subtração' 
      } */

      const a = parseInt(req?.query?.a as string) || 0;
      const b = parseInt(req?.query?.b as string) || 0;

      return res.status(200).json({ result: a - b });
    });
  }

}

export default new Endpoints().routes;
