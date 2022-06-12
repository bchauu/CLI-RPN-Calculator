# Cli-RPN-Calculator
Command Line Utility for Reverse Polish Notation Calculator


1) A high-level description of your solution
    asnycprompt to continously handle inputs from user

    readline handles repeateded input from user
         also checks if inputs from user are valid into an rpn
    
    rpn.js module for RPN class which has all the methods for rpn behavior

    operator module checks for which operator will be used and computes with both operands


2) Reasoning behind your technical choices, including architectural
    - Nodejs
        - simple to scale with web socket, files, etc
        - Readline over zx terminal: 
    - Jest: for simplicity and ease of starting testing. Easier for others without testing knowledge to be integrated and contribute 


3) Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project
    - Would implement mocha for testing as it stays lightweight from custom configuration as opposed to Jest coming with a full suite of tools that might not necessarily be needed

4) How to run your code, if applicable
    currently - node index.js
    later - script "start calculator" (have not been written)

5) Link to the hosted application, if applicable
