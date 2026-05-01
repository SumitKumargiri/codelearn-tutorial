import { DocumentContent } from "../content.types";

export const tsBasicTypes: DocumentContent = {
  title: 'Basic Types',
  description: 'Deep dive into TypeScript concepts',
  sections: [
    {
      title: 'TypeScript Types',
      content: [
        {
          type: 'paragraph',
          text: 'In TypeScript, a type is a convenient way to refer to different properties and functions that a value has.'
                + 'TypeScript has a set of built-in types that you can use to define the types of variables, function parameters, and return values.'
        },
        {
          type: 'example',
          description: 'When you look at this value, you can say it is a string. This value has properties and methods that a string has.',
          code: 'const message = "Hello";'
        },
        {
          type:'paragraph',
          text:'In conclusion, in TypeScript:'
        },
        {
          type:'list',
          items:[
            'A type is a convenient way to refer to different properties and functions that a value has.',
            'TypeScript has a set of built-in types that you can use to define the types of variables, function parameters, and return values.',
            'every value has a type.'
          ]
        },
        {
          type:'subheading',
          text:'Types in TypeScript'
        },
        {
          type:'paragraph',
          text:'TypeScript inherits the built-in types from JavaScript. TypeScript types are categorized into: '
        },
        {
          type:'list',
          items:[
            'Primitive Types: string, number, boolean, bigint, symbol, null, undefined',
            'Object Types: object, array, tuple, enum',
          ]
        },
        {
          type:'subheading',
          text:'Primitive Types'
        },
        {
          type:'paragraph',
          text:'The following illustrates the primitive types in TypeScript: '
        },
        {
          type:'table',
          headers:['Type','Description','Example'],
          rows:[
            ['string','Represents textual data.','const name: string = "Alice";'],
            ['number','Represents numeric values.','const age: number = 30;'],
            ['boolean','Represents true/false values.','const isStudent: boolean = true;'],
            ['bigint','Represents large integers.','const bigIntValue: bigint = 9007199254740991n;'],
            ['symbol','Represents unique identifiers.','const sym: symbol = Symbol("unique");'],
            ['null','Represents the intentional absence of any object value.','const emptyValue: null = null;'],
            ['undefined','Represents an uninitialized variable.','let notAssigned: undefined;']
          ]
        },
        {
          type:'subheading',
          text:'Object Types'
        },
        {
          type:'paragraph',
          text:'Object types are functions, arrays, classes, etc. Later, you’ll learn how to create custom object types. '
        },
        {
          type:'subheading',
          text:'Purposes of types in TypeScript'
        },
        {
          type:'list',
          items:[
            'Type checking: TypeScript uses types to check for type errors at compile time. This helps catch errors early and improves code quality.',
            'Code readability: Types provide additional information about the data being used, making it easier for developers to understand the code.',
            'Tooling support: Types enable better tooling support, such as autocompletion and refactoring, which can enhance developer productivity.'
          ]
        },
        {
          type:'example',
          description:'TypeScript can infer the type of a variable based on its value. In this example, TypeScript infers that the type of the variable message is string.',
          code:'const heading = document.querySelector(\'h1\'); \n// TypeScript infers the type of heading as HTMLHeadingElement | null'
        },
        {
          type:'paragraph',
          text:'In this example, TypeScript infers that the type of the variable heading is HTMLHeadingElement | null. This means that heading can either be an HTMLHeadingElement or null. This is because the querySelector method can return null if it does not find any matching element in the DOM.'
        },
        {
          type:'image',
          url:'/document-querySelector.png',
          alt:'TypeScript type inference'
        },
        {
          type:'note',
          text:'TypeScript can infer the type of a variable based on its value. This is called type inference. Type inference is a powerful feature of TypeScript that allows you to write less code while still getting the benefits of static typing.'
        }
      ]
    },
    {
      title:'Type Annotations',
      content:[
        {
          type:'paragraph',
          text:'Type annotations are a way to explicitly specify the type of a variable, function parameter, or return value. You can use type annotations to provide additional information about the types in your code.'
        },
        {
          type:'subheading',
          text:'What is Type Annotation in TypeScript'
        },
        {
          type:'paragraph',
          text:'TypeScript uses type annotations to specify explicit types for identifiers such as variables, functions, objects, etc.'
               + 'TypeScript uses the syntax : type after an identifier as the type annotation, which type can be any valid type.'
        },
        {
          type:'subheading',
          text:'Type annotations in variables and constants'
        },
        {
          type: 'example',
          description: 'The following syntax shows how to specify type annotations for variables and constants:',
          code: 'let variableName: type;\nlet variableName: type = value;\nconst constantName: type = value;'
        },
        {
          type:'example',
          description:'error: Type \'string\' is not assignable to type \'number\'. This error occurs because the variable age is declared with the type number, but it is assigned a string value.',
          code:'let age: number;\nage = "thirty"; // Error: Type \'string\' is not assignable to type \'number\'.'
        }
      ]
    },
    {
      title:'Type Inference',
      content:[
        {
          type:'paragraph',
          text:'TypeScript can automatically infer the type of a variable based on its value. This is called type inference. Type inference allows you to write less code while still getting the benefits of static typing.'
        },
        {
          type:'subheading',
          text:'Basic type inference'
        },
        {
          type:'example',
          description:'In this example, TypeScript infers that the type of the variable message is string.',
          code:'const message = "Hello"; // TypeScript infers the type of message as string'
        },
        {
          type:'subheading',
          text:'The best common type algorithm'
        },
        {
          type:'paragraph',
          text:'When TypeScript infers the type of a variable, it uses the best common type algorithm to determine the most specific type that can be assigned to the variable. The best common type algorithm considers all the types that are assigned to the variable and determines the most specific type that can be assigned to it.'
        },
        {
          type:'example',
          description:'In this example, TypeScript infers that the type of the variable values is (string | number)[] because it is assigned an array that contains both string and number values.',
          code:'const values = ["hello", 42]; // TypeScript infers the type of values as (string | number)[]'
        },
        {
          type:'subheading',
          text:'Type inference vs. Type annotations'
        },
        {
          type:'paragraph',
          text:'The following shows the difference between type inference and type annotations:'
        },
        {
          type:'table',
          headers: ['Type Inference', 'Type Annotations'],
          rows: [
            ['TypeScript automatically infers the type based on its value.', 'You explicitly specify the type using type annotations.'],
            ['Less code to write.', 'More code to write.'],
            ['Can still get the benefits of static typing.', 'Provides additional information about the types in your code.']
          ]
        },
        {
          type:'note',
          text:'Type inference is a powerful feature of TypeScript that allows you to write less code while still getting the benefits of static typing. However, there are cases where type annotations can provide additional information about the types in your code and can help improve code readability.'
        }
      ]
    },
    {
      title:'Number Type',
      content:[
        {
          type:'paragraph', 
          text:'The number type in TypeScript represents both integer and floating-point numbers. It is a primitive type that can be used to represent numeric values in your code.'
        },
        {
          type:'subheading',
          text:'The number type'
        },
        {
          type:'example',
          description:'The following shows how to declare a variable that holds a floating-point value: ',
          code:'let price: number = 19.99;'
        },
        {
          type:'subheading',
          text:'Decimal numbers'
        },
        {
          type:'example',
          description:'The following shows how to declare a variable that holds a decimal value: ',
          code:'let decimalValue: number = 0.5;'
        },
        {
          type:'subheading',
          text:'Hexadecimal, octal, and binary literals'
        },
        {
          type:'example',
          description:'The following shows how to declare variables that hold hexadecimal, octal, and binary values: ', 
          code:'let hexValue: number = 0xFF; // Hexadecimal\nlet octalValue: number = 0o77; // Octal\nlet binaryValue: number = 0b1010; // Binary'
        },
        {
          type:'note',
          text:'The number type in TypeScript represents both integer and floating-point numbers. It is a primitive type that can be used to represent numeric values in your code.'
        }
      ]
    },
    {
      title:'String Type',
      content:[
        {
          type:'paragraph',
          text:'Like JavaScript, TypeScript uses double quotes (") or single quotes (\') to surround string literals:'
        },
        {
          type: 'code',
          code: "let firstName: string = 'John';\nlet title: string = \"Web Developer\";"
        },
        {
          type:'example',
          description:'String interpolations allow you to embed the variables into the string like this: ',
          code:'let name: string = "Alice";\nlet greeting: string = `Hello, ${name}!`;'
        },
        {
          type:'note',
          text:'String literals in TypeScript can be declared using double or single quotes, similar to JavaScript.'
               + 'TypeScript also supports string interpolations using template literals, which allow you to embed variables and expressions directly into the string.'
        }
      ]
    },
    {
      title:'Boolean Type',
      content:[
        {
          type:'paragraph',
          text:'The TypeScript boolean type has two values: true and false. The boolean type is one of the primitive types in TypeScript.'
        },
        {
          type: 'example',
          description: 'In TypeScript, you can declare and update a boolean variable as follows:',
          code: 'let isActive: boolean = true;\n\nlet pending: boolean;\npending = true;\n// after a while\n// ..\npending = false;'
        },
        {
          type:'subheading',
          text:'Boolean operators'
        },
        {
          type:'paragraph',
          text:'To manipulate boolean values, you use the boolean operators. TypeScript supports common boolean operators: '
        },
        {
          type:'list',
          items:[
            'Logical AND (&&): Returns true if both operands are true.',
            'Logical OR (||): Returns true if at least one operand is true.',
            'Logical NOT (!): Returns true if the operand is false, and false if the operand is true.'
          ]
        },
        {
          type: 'example',
          description: 'Using boolean operators in TypeScript:',
          code: `// NOT operator
              const pending: boolean = true;
              const notPending = !pending;
              console.log(notPending); // false

              const hasError: boolean = false;
              const completed: boolean = true;

              // AND operator
              let result = completed && hasError;
              console.log(result); // false

              // OR operator
              result = completed || hasError;
              console.log(result); // true`
        },
        {
          type:'note',
          text:'The TypeScript boolean type has two values: true and false. The boolean type is one of the primitive types in TypeScript.'
                + 'To manipulate boolean values, you use the boolean operators. TypeScript supports common boolean operators such as logical AND (&&), logical OR (||), and logical NOT (!).'
        }
      ]
    },
    {
      title:'Object Type',
      content:[
        {
          type:'paragraph',
          text:'In TypeScript, the object type represents any non-primitive value. It is used to declare variables that can hold objects.'
        },
        {
          type: 'example',
          description: 'Declaring an object variable in TypeScript:',
          code: 'let person: object = { name: "Alice", age: 30 };'
        },
        {
          type:'note',
          text:'The object type in TypeScript is a broad category that includes all non-primitive values. It is often better to use more specific types when possible.'
        }
      ]
    }
  ]
};