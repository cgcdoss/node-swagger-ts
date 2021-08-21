
class Swagger {
  swaggerAutogen = require('swagger-autogen');
  swagger = this.swaggerAutogen();

  doc = {
    host: "localhost:3333",
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
