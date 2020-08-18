const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "Project Name"
    }, {
        type: "input",
        name: "description",
        message: "Project Description"
    },  {
        type: "input",
        name: "install",
        message: "Project install"
    },{
        type: "input",
        name: "usage",
        message: "Project usage explain"
    }, {
        type: "input",
        name: "screenshot",
        message: "Screenshot"
    }, {
        type: "input",
        name: "language",
        message: "Project Use Language"
    },{
        type: "input",
        name: "homePage",
        message: "Project Home Page URL (empty value to skip)"
    }, {
        type: "input",
        name: "github",
        message: "Project Github URL (empty value to skip)"
    },{
        type: "list",
        message: "License",
        name: "license",
        choices: [
        "ISC",
        "MIT",
        "Apache-2.0",
        "IPL-1.0",
        "Zlib"
        ]
    },  {
        type: "input",
        name: "author",
        message: "Github Userame"
    }, {
        type: "input",
        name: "test",
        message: "Testing File"
    }, {
        type: "input",
        name: "email",
        message: "Email"
    }
];

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(answer => {
            // console.log(answer);
            return generateMarkdown(answer);
        })
        .then(data => {
            // console.log(data);
            writeFileAsync("README.md", data);
            console.log("README file created!");
            })
        .catch(err => { console.log(err) });
}

// function call to initialize program
init();
