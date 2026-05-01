import { DocumentRecord } from './content.types';
import { jsFundamentals1 } from './javascript/js-fundamentals-1.content';
import { es6Features } from './javascript/es6-features.content';
import { reactBasics } from './react/react-basics.content';
import { tsAdvancedPatterns } from './typescript/advanced-typescript-1.content';
import { nodeExpressGuide } from './nodejs/nodejs-express-1.content';
import { sqlDatabaseGuide } from './sql/sql-database-1.content';
import { pythonGuide } from './python/python-programming-1.content';
import { dotnetSyllabus } from './dotnet/dotnet-1.content';
import { redisBasics } from './redis/redis-basics.content';
import { tsBasicTypes } from './typescript/basic-types-2.content';

export const documentContents: DocumentRecord = {
  //------ javascript contents ---------
  'javascript-fundamentals-1': jsFundamentals1,
  'javascript-fundamentals-2': es6Features,
  //------ React contents ---------
  'react-beginners-1': reactBasics,
  //------ TypeScript contents ---------
  'advanced-typescript-1': tsAdvancedPatterns,
  'advanced-typescript-2': tsBasicTypes, 
  //------ Node.js & Express contents ---------
  'nodejs-express-1': nodeExpressGuide,
  //------ SQL Database contents ---------
  'sql-database-1': sqlDatabaseGuide,
  //------ Python contents ---------
  'python-programming-1': pythonGuide,
  //------ .NET contents ---------
  'dotnet-development-1': dotnetSyllabus,
  'redis-1': redisBasics
};