import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API HOTEL TORRE TORRE",
      version: "1.0.0",
      description: "Documentación de la API de Hotel Torre Torre"
    },
    servers: [
      {
        url: "http://localhost:3000/api"
      }
    ]
  },
  apis: ["./src/routes/*.ts"]
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export { swaggerDocs };
