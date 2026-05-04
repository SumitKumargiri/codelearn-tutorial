import { DocumentContent } from '../content.types';

export const reactBasics: DocumentContent = {
  title: 'React Basics',
  description: 'Introduction to React and core concepts',
  sections: [
    {
      title: 'What is React?',
      content: [
        {
          type: 'paragraph',
          text: 'React is a popular, declarative, component-based, state-driven JavaScript library for building user interfaces:'
        },
        {
          type: 'subheading',
          text: 'React is popular.'
        },
        {
            type: 'paragraph',
            text: 'React was introduced in 2013 by Facebook and has become one of the most important libraries for building user interfaces (UI). It is widely used for building web applications, mobile apps (using React Native), and even desktop applications (using Electron).'
        },
        {
            type:'image',
            url: '/react-is-popular.png',
            alt: 'React is popular'
        },
        {
            type: 'subheading',
            text: 'React is declarative.'
        },
        {
            type: 'paragraph',
            text: 'React allows developers to describe what the UI should look like for a given state, and it takes care of updating the DOM to match that state. This makes it easier to reason about how the UI will change over time.'
        },
        {
            type: 'code',
            language: 'React',
            code: `export const App = () => {
            return (
                <main>
                    <NavBar />
                    <Search />
                    <List />
                </main>
            );
          };`
        },
        {
            type: 'subheading',
            text: 'React is component-based.'
        },
        {
            type: 'paragraph',
            text: 'React applications are built using components, which are reusable pieces of UI. Components can be nested, managed, and handled independently, making it easier to build complex UIs.'
        },
        {
            type:'image',
            url: '/React-is-declarative.svg',
            alt: 'React is component-based'
        },
        {
            type: 'subheading',
            text: 'React is state-driven.'
        },
        {
            type: 'paragraph',
            text: 'In React, the UI is a function of the application state. When the state changes, React automatically updates the UI to reflect those changes. This makes it easier to manage and synchronize the UI with the underlying data.'
        },
        {
            type:'image',
            url: '/react-state-based-component.svg',
            alt: 'React is state-driven'
        },
        {
          type: 'list',
          items: [
            'Component-based architecture',
            'Reusable UI',
            'Virtual DOM for performance'
          ]
        }
      ]
    }
  ]
};