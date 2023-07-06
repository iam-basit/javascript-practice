# Values and variables

> values:

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