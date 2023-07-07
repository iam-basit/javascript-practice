# Values and variables

> Values:

values are the smallest units of information javascript.

Values can be of two types:
- Object

  example:
  
   let me = {
    name = "Basit";
  }

- Primitive

A value is only primitive when it is not object.

  example:

let firstName = "Basit";
let age = 24;

example:
let js = "amazing";
 * here "amazing" is the value for variable "js"

> Variables:

 a variable is simply name of storage location.

  - Rules for variable name:
    - should not start with special character
    - should not start with number character
    - it can contain only numbers, underscore and dollar sign
    - it should not be any reserved name like "function".
    - it must start with lowercase letters
    - it is suggested to be descriptive

> Data Types:

Here five primitive data types in javascript.

1. Number
1. Strings : a sequence of characters, used for text.
1. Boolean: which can only take only one of these true or false values, used for decision taking.

1. Undefined: value taken by a variable that is not defined (empty).
1. Null, empty value

1. Symbol (ES2015): a value that is unique and can not be changed
1. Bigint(ES2020): larger integer than the Number data type can hold 

Note 📝: Javascript also has the dynamic typing that by considering the data it will determine the type of it also. 

- typeof:

  is an operator used to show the type of any variable

    example: 

    let firstName ="Basit"
    console.log(typeof firstName);

    > let, const and var 

 Note 📝:  Mutating means reassigning value to a variable.
    
- let : is blocked scoped 
 In two cases we let data type :
 1. if we want to declare a variable without value/ empty variable
 1. if we want to mutate variable later
  
- const : most recommended because mutating variables creates bugs in programme

The value in const variable will not change later.
1. mutating is not allowed for const data type / they are immutable.
1. it needs to  have initial value/  or can not be assigned to empty variable.

- var: is function scoped 

  - not recommended

var was being in use mostly before ES6, in ES6 let replaced it.

> Operators

operators are special symbols that are used to perform operation on operands.
(+,-,*,%,/)


