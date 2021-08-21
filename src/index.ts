import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './endpoints';

export class App {
  swaggerFile = require('./doc/swagger_output.json');
  app!: express.Application;

  constructor() {
    this.app = express();

    this.setup();
    this.routes();
    this.setDocsSwagger();
  }

  private setup(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use(routes);
  }

  private setDocsSwagger(): void {
    this.app.use('/doc', swaggerUi.serve, swaggerUi.setup(this.swaggerFile));
  }

}
