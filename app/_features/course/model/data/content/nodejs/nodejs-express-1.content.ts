import { DocumentContent } from "../content.types";

export const nodeExpressGuide : DocumentContent = {
  title: 'Node.js & Express Guide',
  description: 'Complete guide to backend development with Node.js and Express',
  sections: [
    {
      title: 'Introduction',
      description: 'Overview of Node.js and Express',
      content: [
        {
          type: 'paragraph' as const,
          text: 'Node.js allows you to run JavaScript on the server side.'
        },
        {
          type: 'paragraph' as const,
          text: 'Express is a minimal and flexible Node.js web application framework.'
        }
      ]
    },
    {
      title: 'Setting up Node.js',
      description: 'Install Node.js and create your first project',
      content: [
        {
          type: 'code' as const,
          language: 'bash',
          code: 'npm init -y\nnpm install express'
        }
      ]
    },
    {
      title: 'Basic Express Server',
      description: 'Create your first server',
      content: [
        {
          type: 'code' as const,
          language: 'javascript',
          code: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Node & Express!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
        }
      ]
    }
  ]
};