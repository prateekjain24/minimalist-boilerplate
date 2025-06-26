import { generateApi } from 'swagger-typescript-api';
import * as path from 'path';
import * as fs from 'fs';

const API_URL = process.env.API_URL || 'http://localhost:8000';

async function generate() {
  try {
    console.log(`Generating API client from ${API_URL}/api/v1/openapi.json`);
    
    await generateApi({
      name: 'api.ts',
      output: path.resolve(process.cwd(), './src/generated'),
      url: `${API_URL}/api/v1/openapi.json`,
      httpClientType: 'axios',
      generateClient: true,
      generateRouteTypes: true,
      generateResponses: true,
      unwrapResponseData: true,
      prettier: {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
      },
    });
    
    console.log('API client generated successfully!');
  } catch (error) {
    console.error('Failed to generate API client:', error);
    process.exit(1);
  }
}

generate();