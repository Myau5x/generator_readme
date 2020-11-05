const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
/**
 * Prompt your user with the following questions:

"What is your name?"

"What languages do you know?"

What is your preferred method of communciation?"

Then write the user response to a file.
 */
const questions = [    
{ type: "input",
  message: "What is your project title?",
  name: "title"
},
{ type:"input",
  message: 'Description of your project',
  name: "description"

},
{
  type:"input",
  message: "Whats is your email?",
  name: "email"
},
{
  type: "list",
  choices: ["ISC", "MIT", "Apache License 2.0", "BSD 3-Clause License", "BSD 2-Clause License", "Boost Software License 1.0", "CC0","Eclipse Public License 1.0","GNU GPL v3.0","GNU GPL v2","GNU AGPL v3","GNU LGPL v3","Mozilla Public License 2.0", "The Unlicense"],
  message: "What license do you use?",
  name: "license"
},
{
  type: "list",
  choices: ["email","phone","mail"],
  message: "What is your preferred method of communciation?",
  name: "method"
}

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function(err) {

    if (err) {
      return console.log(err);
    }
  
    console.log("Success!");
  
  });

}

// function to initialize program
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
      writeToFile("1.md",response);

    }
  );

}

// function call to initialize program
init();

 
