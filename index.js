// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

    
inquirer
    .prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username" 
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of this project?",
        name: "title"
    },
    {
        type: "input",
        message: "Short project desciption",
        name: "description"
    },
    {
        type: "list",
        message: "Choose a license for your project",
        name: "license",
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'BSD', 'None'],
    }
]).then((data) => {
    console.log(data);
    fs.writeFile('README.md', generateMarkdown(data),
    error =>{
        if (error) {
            console.log('Fill out all data')
        }
        console.log('README was generated')
    }
)})