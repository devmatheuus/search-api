import fs from 'fs';
import path from 'path';

// Carregue o conteúdo do arquivo schemas.json
const schemaData = JSON.parse(
  fs.readFileSync(path.join(__dirname, './schemas.json'), 'utf8')
);

export const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Node API',
      version: '1.0.0',
      description: 'API for data query',
    },
    components: {
      schemas: schemaData,
    },
  },
  apis: [path.join(__dirname, '../routes/query/query.routes.js')],
};
