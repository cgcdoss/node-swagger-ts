
class Swagger {
  swaggerAutogen = require('swagger-autogen');
  swagger = this.swaggerAutogen();

  doc = {
    info: {
      version: '1.0.0',
      title: 'API do Cássio',
      description: 'API para demonstrar o swagger-autogen'
    },
    host: 'localhost:3333',
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
        name: 'User',
        description: "Endpoints"
      }, {
        name: 'Math',
        description: 'Operações matemáticas'
      }
    ]
  };

  constructor() {
    const outputFile = 'src/doc/swagger_output.json';
    const endpointsFiles = ['src/endpoints.ts'];

    this.swagger(outputFile, endpointsFiles, this.doc);

    /* this.swagger(outputFile, endpointsFiles, this.doc).then(() => {
      require('./server.ts');
    }); */
  }
}

export default new Swagger().swagger;
