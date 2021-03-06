const inquirer = require('inquirer');
const fs = require('fs'); 
const generatePage = require('./src/generatePage.js'); 

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const myTeam = [];

// manager prompts
const promptManager = () => {
    return inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            messgae: 'Please enter your employee ID (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter your ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            messgae: 'Please enter your EMAIL (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your EMAIL');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            messgae: 'Please enter your office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter your office number');
                    return false;
                }
            }
        }
    ]).then(answer => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        myTeam.push(manager);
        promptMenu();
    })
};

// menu prompts to choose who to add to the team
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please choose from a variety of the following options presented here:',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }
    ])
    .then(options => {
        switch (options.menu) {
            case 'add an engineer':
                promptEngineer();
                break;
            case 'add an intern':
                promptIntern();
                break;
            case 'finish building my team':
                console.log('Finished building the team!');
                writeFile();
                break;
            default:
                promptMenu();
        
        }
    });
};

// engineer prompt
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your engineer?',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enther the name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            messgae: 'Please enter your employee ID (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter your ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            messgae: 'Please enter your EMAIL (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your EMAIL');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            messgae: 'Enter your Github username (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your username');
                    return false;
                }
            }
        }
    ]).then(answer => {
        console.log(answer);
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        myTeam.push(engineer);
        promptMenu();
    })
};

// intern prompt
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your intern?',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enther the name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            messgae: 'Please enter your employee ID (Required)',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter your ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            messgae: 'Please enter your EMAIL (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your EMAIL');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            messgae: 'Enter the name of your school. (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your school name');
                    return false;
                }
            }
        }
    ]).then(answer => {
        console.log(answer);
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        myTeam.push(intern);
        promptMenu();
    })
};

// function to generate HTML using writeFile
const writeFile = () => {
    fs.writeFile('./dist/index.html', generatePage(myTeam), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team has been added!")
        }
    })
};

promptManager()