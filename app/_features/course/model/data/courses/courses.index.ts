import { CourseData } from './course.types';

import { javascriptFundamentals } from './javascript/javascript-fundamentals.course';
import { reactBeginners } from './react/react-beginners.course';
import { advancedTypescript } from './typescript/advanced-typescript.course';
import { pythonProgramming } from './python/python.course';
import { nodejsExpress } from './nodejs/nodejs.course';
import { sqlDatabase } from './sql/sql.course';
import { dotnetDevelopment } from './dotnet/dotnetDevelopment';

export const coursesData: Record<string, CourseData> = {
  'javascript-fundamentals': javascriptFundamentals,
  'react-beginners': reactBeginners,
  'advanced-typescript': advancedTypescript,
  'python-programming': pythonProgramming,
  'nodejs-express': nodejsExpress,
  'sql-database': sqlDatabase,
  'dotnet-development': dotnetDevelopment
};