# Introduction to JavaScript

Javascript is:

- Interpreted:
    - An interpreted language is a language in which the implementations execute instructions directly without earlier compiling a program into machine language.

- Just-in-time:
    - In computing, just-in-time (JIT) compilation is compilation (of computer code) during execution of a program (at run time) rather than before execution.

- Dynamic: 
    - Where the interpreter assigns variables a type at runtime based on the variable's value at the time.

- Single threated:
    - Thread in computer science is the execution of running multiple tasks or programs at the same time. Each unit capable of executing code is called a thread.
- Multi-paradigm:
    - Multiple approaches to solve a given problem
- First-class-function :
    - A programming language is said to have First-class functions when functions in that language are treated like any other variable.

- Supporting Object Oriented:
    - JavaScript is a Prototype-based programming paradigm.
        But it has support for it. It has the class keyword, which is just a syntactic sugar over prototypes. We actually create prototypes in javascript, and not classes. The class keyword is there to make javascript look like an OOP language.
    - Syntactic sugar is a term for a more concise syntax that provides the same functionality for something that already exists. It aims to help make code shorter, therefore, easier to write. No new functionality is introduced.

- Imperative 
    - How the programme execute.
- Declarative
    - What programme to be executed.

### Function

In JavaScript, a function is a reusable block of code that performs a specific task or set of tasks. Functions allow you to organize your code into modular and reusable components, making it easier to manage and maintain. Here's a basic syntax for creating a function in JavaScript:

    function functionName(parameters) {
    // code to be executed
     return result; // optional
}

1. Function Keyword: The function keyword is used to declare a function.

1. Function Name: This is the user-defined name of the function. It follows the function keyword. The name is used to call the function later.

1. Parameters: These are placeholders for values that the function will receive when it is called. Parameters are optional, and a function can have zero or more of them.

1. Function Body: The block of code enclosed in curly braces {} is the function body. It contains the code that is executed when the function is called.

1. Return Statement (Optional): The return statement is used to specify the value that the function should return. It is optional, and a function may not have a return statement. If a function does not have a return statement, it implicitly returns undefined.

Here's an example of a simple function that adds two numbers:

    function addNumbers(a, b) {
    var sum = a + b;
    return sum;
    }
    // Calling the function
    var result = addNumbers(5, 3);
    console.log(result); // Output: 8


In this example, the addNumbers function takes two parameters (a and b), adds them together, and returns the result. The function is then called with arguments 5 and 3, and the result is logged to the console.

Functions in JavaScript can also be assigned to variables, passed as arguments to other functions, and returned from other functions. This flexibility is a key aspect of JavaScript's functional programming capabilities.
