const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs') 
const path = require('path') 
const myTeam = [];

const promptManager= () => {
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
        },
    ]).then(answer => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        myTeam.push(manager);
        promtMenu();
    })
};

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
            default:
                buildMyTeam();
        }
    });
};

const promptEngineer = () => {
  console.log(`
==================
Add a New Engineer
==================
`);

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
        }

])
}
        

        