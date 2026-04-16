import { DocumentContent } from "../content.types";

export const tsAdvancedPatterns: DocumentContent = {
  title: 'TypeScript Advanced Patterns',
  description: 'Deep dive into TypeScript concepts',
  sections: [
    {
      title: 'Prerequisites',
      description: 'Essential JavaScript and programming concepts required before learning TypeScript',
      content: [
        {
          type: 'paragraph',
          text: 'TypeScript is typed JavaScript.TypeScript adds types to JavaScript to help you speed up the development by catching errors before you even run the JavaScript code.'
               + 'TypeScript is an open-source programming language that builds on top of JavaScript. It works on any web browser, any OS, and any environment that JavaScript runs.'
        },
        {
            type: 'paragraph',
            text:'In this TypeScript tutorial, you’ll learn:'
        },
        {
            type: 'list',
            items: [
                'Why TypeScript offers a lot of benefits over vanilla JavaScript.',
                'Understand what TypeScript truly is and how it works under the hood.',
                'Use TypeScript and its rich features like Types, Classes, Interfaces, Modules, and more.',
            ]
        },
        {
            type:'subheading',
            text:'Prerequisites'
        },
        {
            type:'note',
            text:'Basic JavaScript knowledge. If you want to learn JavaScript first, you can take our JavaScript course.'
                + 'ECMAScript 2015 or ES6 knowledge.'
        },
      ]
    },
    {
      title: 'Introduction',
      description: 'in this tutorial, you’ll understand what TypeScript is and its advantages over vanilla JavaScript.',
      content: [
                {
                    type: 'paragraph',
                    text: 'TypeScript is a superset of JavaScript.' + 'TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.'
                          + 'Once you have the plain JavaScript code, you can deploy it to any environment that JavaScript runs.'
                },
                {   
                    type: 'paragraph',
                    text: 'TypeScript files use the .ts extension rather than the .js extension of JavaScript files.'
                },
                {
                    type:'image',
                    url:'/what-is-typescript-compiler.png',
                    alt:'TypeScript compiler'
                },
                {
                    type: 'paragraph',
                    text: 'TypeScript is a statically typed language. This means that you can specify the types of variables, function parameters, and return values. The TypeScript compiler will check for type errors at compile time and will give you feedback if there are any type errors in your code.'
                },
                {
                    type: 'paragraph',
                    text: 'TypeScript is a powerful tool that can help you catch errors early and improve the maintainability of your code. It is widely used in the industry and has a large community of developers.'
                },
                {
                    type:'paragraph',
                    text:'The following diagram shows the relationship between TypeScript and JavaScript: '
                },
                {
                    type:'image',
                    url:'/what-is-typescript-typescript-and-js.png',
                    alt:'relationship between TypeScript and JavaScript'
                },
            ]
    },
    {
      title: 'Setup and Tooling',
      description: 'Set up TypeScript, install necessary tools, and configure your development environment for efficient workflow',
      content: [
        {
          type: 'paragraph',
          text: 'The following tools you need to set up to start with TypeScript: '
        },
        {
            type: 'list',
            items: [
                'Node.js – Node.js is the environment in which you will run the TypeScript compiler. Note that you don’t need to know Node.js. ',
                'TypeScript compiler – a Node.js module that compiles TypeScript into JavaScript. ',
                'Visual Studio Code or VS Code – a code editor supporting TypeScript. VS Code is highly recommended. However, you can use your favorite editor.',
            ]
        },
        {
            type:'paragraph',
            text:'If you use VS Code, you can install the following extension to speed up the development process: '
        },
        {
            type:'list',
            items: [
                'Live Server – allows you to launch a development local web server with the hot reload feature.'
            ]
        },
        {
            type:'subheading',
            text:'Install Node.js'
        },
        {
            type:'paragraph',
            text:'To install node.js, you follow these steps: '
        },
        {
            type:'list',
            items: [
                'Go to the official Node.js website and download the latest LTS version.',
                'Run the installer and follow the prompts to complete the installation.',
                'Verify the installation by opening a terminal and running the command node -v. You should see the version of Node.js that you installed.'
            ]
        },
        {
            type:'subheading',
            text:'Install TypeScript compiler'
        },
        {
            type:'paragraph',   
            text:'To install the TypeScript compiler, you can use npm, which is the package manager for Node.js. Run the following command in your terminal: '
        },
        {
            type:'note',
            text:'You can also install the TypeScript compiler globally by adding the -g flag to the command: npm install -g typescript. However, it is recommended to install it locally in your project.'
        },
        {
            type:'subheading',
            text:'Install VS Code'
        },
        {
            type:'list',
            items: [
                'Go to the official Visual Studio Code website and download the latest version.',
                'Run the installer and follow the prompts to complete the installation.',
                'Launch VS Code and install the Live Server extension from the Extensions marketplace.'
            ]
        },
      ]
    },
    ]
};