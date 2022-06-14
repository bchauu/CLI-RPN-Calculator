# Cli-RPN-Calculator
Command Line Utility for Reverse Polish Notation Calculator


1) A high-level description of your solution
    The command line reverse polish notation calculator works by having readline module prompt the user with a question that allows for receiving input through the command line. dThe readline is nested within a function that is recursively called to allow for repeated entry of input without having to run the module again. 

    The readline module then responds according to what the user inputs. If the entered string is either a single operand, operator, or multiples of both, then the methods from the RPN function will be invoked accorddingly. For each operand that is entered, it will then be pushed onto a stack. Since a RPN calculator uses the last two numbers entered by the user to calculate, a stack is used for its last in, first out (LIFO) characteristics. The stack will store as many numbers the user enters. As long as there are at least two numbers in the stack and an operator of either '+', '-', '*', or '/', the last two values from the stack will be removed and used to be calculated with the according operation symbol inputted by the user. The computed number is then pushed back into the stack. 



2) Reasoning behind your technical choices, including architectural
    Node.js is being implemented for its ease of scalabilty not only because its written in JavaScript that would allow future integrations with a frontend, but for its non-blocking nature of the event loop. Since the readline for the user input is async and potential tasks in the future such as fetching from a database would also be async, Node.js' non blocking event loop would allow the thread of execution to continue without waiting. In any case, Node.js also has a big support from the community which includes 1.3 million packages that can be installed as dependencies to ease scalability when implementing sockets, files, and etc.

    In terms of the ability to prompt the user through the command line, ReadLine was chosen over zx terminal. The zx terminal had all the tools necessary for a command line, but it also meant using another terminal. Instead, readline is part of the Node.js community and only needs to be installed as a dependency without changing terminals. 

    For testing, Jest was chosen for its out of the box usage. It alraedy comes with a full suite of test tools so no additional dependencies would be required. Its syntax is also easy to understand since it is more logical so even those without knowledge of testing can contribute.

    In regards to architechural designs, different modules were created with scalability in mind. Operators.js is separated from the actual rpn calculator to not only keep the code clean, but make it easier to add in additional computational symbols such as power or converting to decimal point. RPN calculations is handled in rpn.js; this is done so again, the code can be clean and also allow for additional types of calculations in the future. By keeping rpn.js separate, infix and prefix calculations can easily be added without tangling the codebase. 


3) Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project
    Would implement mocha for testing as it stays lightweight from custom configuration as opposed to Jest coming with a full suite of tools that might not necessarily be needed. 

4) How to run your code, if applicable
    The code can be ran with 'node index.js'

5) Link to the hosted application, if applicable
