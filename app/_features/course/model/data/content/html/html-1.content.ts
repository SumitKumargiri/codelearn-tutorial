import { DocumentContent } from "../content.types";

export const htmlSyllabus: DocumentContent = {
  title: 'HTML Basic Structure Guide',
  description: 'Introduction to HTML fundamentals',

  sections: [
    {
      title: "Requirements and Setup",
      description: "Basic requirements to start HTML development",
      content: [
        {
          type: "list",
          items: [
            "Any OS (Windows / macOS / Linux)",
            "Minimum 4GB RAM (8GB recommended)",
            "Stable internet connection",
            "Modern browser (Chrome recommended)"
          ]
        },
        {
            type:'subheading',
            text: 'Required Software'
        },
        {
            type: 'paragraph',
            text: 'To create and run HTML files, you will need the following software:'
        },
         {
          type: "subheading",
          text: "Code Editor"
        },
        {
          type: "list",
          items: [
            "Visual Studio Code (Recommended)",
            "Sublime Text (Alternative)",
            "Notepad++ (Basic)"
          ]
        },
        {
          type: "subheading",
          text: "Web Browser"
        },
        {
          type: "list",
          items: [
            "Google Chrome (Recommended)",
            "Microsoft Edge",
            "Mozilla Firefox"
          ]
        },
        {
            type:'subheading',
            text: 'Install VS Code'
        },
        {
            type: 'paragraph',
            text: 'Follow these steps to install Visual Studio Code:'
        },
        {
          type: "subheading",
          text: "Step 1: Download"
        },
        {
          type: "paragraph",
          text: "Go to https://code.visualstudio.com/ and download VS Code for your operating system."
        },
        {
          type: "subheading",
          text: "Step 2: Install"
        },
        {
          type: "list",
          items: [
            "Run setup file",
            "Click Next → Next → Install",
            "Finish installation"
          ]
        },
        {
            type:'subheading',
            text: 'VS Code Extensions'
        },
        {
            type: 'paragraph',
            text: 'Recommended extensions for HTML development'
        },
        {
          type: "list",
          items: [
            "Live Server (Important)",
            "Prettier - Code Formatter",
            "HTML Snippets",
            "Auto Rename Tag",
            "Path Intellisense"
          ]
        },
        {
            type:'subheading',
            text: 'Create First HTML Project'
        },
        {
          type: "example",
          text: "Project Setup Steps",
          description: "1. Open VS Code\n2. Create folder: html-project\n3. Create file: index.html"
        },
        {
            type:'subheading',
            text: 'Run HTML File'
        },
        {
          type: "list",
          items: [
            "Right click file → Open with Live Server",
            "OR double click index.html",
            "OR open in Chrome browser"
          ]
        }
      ]
    },
    {
      title: 'Introduction',
      description: 'Overview of HTML',
      content: [
        {
          type: 'heading',
          text: 'Welcome to HTML'
        },
        {
          type: 'paragraph',
          text: 'HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It defines the structure of content on the web using elements and tags.'
        },
        {
          type: 'subheading',
          text: '🌐 Why Learn HTML?'
        },
        {
          type: 'paragraph',
          text: 'HTML is the foundation of web development. Every website you visit is built using HTML. Learning HTML is the first step toward becoming a web developer.'
        },
        {
          type: 'subheading',
          text: '📌 Key Features of HTML'
        },
        {
          type: 'list',
          items: [
            'Easy to learn and use',
            'Platform independent',
            'Supports multimedia (images, videos, audio)',
            'Works with CSS and JavaScript',
            'Used to create structure of web pages'
          ]
        },
        {
          type: 'subheading',
          text: 'Basic HTML Structure'
        },
        {
  type: 'codeBlock',
  codeLanguage: 'html',
  codeText: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a paragraph</p>
</body>
</html>`
}
      ]
    },

    {
      title: 'HTML Elements',
      content: [
        {
          type: 'subheading',
          text: 'Common HTML Tags'
        },
        {
          type: 'list',
          items: [
            '<h1> to <h6> → Headings',
            '<p> → Paragraph',
            '<a> → Link',
            '<img> → Image',
            '<ul>, <ol>, <li> → Lists',
            '<div> → Container',
            '<span> → Inline container'
          ]
        },
        {
          type: 'subheading',
          text: 'Example'
        },
        {
          type: 'example',
          text: 'Basic Tags Example',
          description: '<h1>Heading</h1>\n<p>This is a paragraph</p>\n<a href="#">Click here</a>'
        }
      ]
    },

    {
      title: 'Forms & Inputs',
      content: [
        {
          type: 'subheading',
          text: 'HTML Forms'
        },
        {
          type: 'paragraph',
          text: 'Forms are used to collect user input such as name, email, password, etc.'
        },
        {
          type: 'example',
          text: 'Form Example',
          description: '<form>\n  <input type="text" placeholder="Enter name">\n  <input type="email" placeholder="Enter email">\n  <button type="submit">Submit</button>\n</form>'
        }
      ]
    },

    {
      title: 'Semantic HTML',
      content: [
        {
          type: 'subheading',
          text: 'Semantic Tags'
        },
        {
          type: 'list',
          items: [
            '<header>',
            '<nav>',
            '<section>',
            '<article>',
            '<footer>'
          ]
        },
        {
          type: 'paragraph',
          text: 'Semantic HTML improves readability, accessibility, and SEO of your website.'
        }
      ]
    },

    {
      title: 'Environment Setup',
      content: [
        {
          type: 'list',
          items: [
            'VS Code (recommended editor)',
            'Web Browser (Chrome, Edge)',
            'Live Server Extension'
          ]
        },
        {
          type: 'subheading',
          text: 'Steps to Run HTML File'
        },
        {
          type: 'list',
          items: [
            '1. Create a file with .html extension',
            '2. Write HTML code',
            '3. Save the file',
            '4. Open in browser (double click or right-click → open with browser)'
          ]
        }
      ]
    }
  ]
};