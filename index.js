const inquirer=require('inquirer');

const employeeInfo=[];


async function engineerOption()
{
    inquirer.prompt([{
        name: "initialPrompt",
        type: "text",
        message: "Please enter your team manager's name, employee ID, email address, and office number",
    },
    {
        name: "teamManagerName",
        type: "input",
        message: "Team Manager Name: ",
    },
    {
        name: "teamManagerEmployeeID",
        type: "input",
        message: "Team Manager Employee ID: ",
    },
    {
        name: "teamManagerEmailAddress",
        type: "input",
        message: "Team Manager Email Address: ",
    },
    {
        name: "teamManagerOfficeNumber",
        type: "input",
        message: "Team Manager Office Number: ",
    }
    ]).then((answer) => {
        
        inquirer.prompt(
            
        );
    });
};

async function internOption()
{
    inquirer.prompt([{
        name: "initialPrompt",
        type: "text",
        message: "Please enter your team manager's name, employee ID, email address, and office number",
    },
    {
        name: "teamManagerName",
        type: "input",
        message: "Team Manager Name: ",
    },
    {
        name: "teamManagerEmployeeID",
        type: "input",
        message: "Team Manager Employee ID: ",
    },
    {
        name: "teamManagerEmailAddress",
        type: "input",
        message: "Team Manager Email Address: ",
    },
    {
        name: "teamManagerOfficeNumber",
        type: "input",
        message: "Team Manager Office Number: ",
    }
    ]).then((answer) => {
        
        inquirer.prompt(
            
        );
    });
}

async function teamManagerInit()
{
    inquirer.prompt([{
        name: "initialPrompt",
        type: "text",
        message: "Please enter your team manager's name, employee ID, email address, and office number",
    },
    {
        name: "teamManagerName",
        type: "input",
        message: "Team Manager Name: ",
    },
    {
        name: "teamManagerEmployeeID",
        type: "input",
        message: "Team Manager Employee ID: ",
    },
    {
        name: "teamManagerEmailAddress",
        type: "input",
        message: "Team Manager Email Address: ",
    },
    {
        name: "teamManagerOfficeNumber",
        type: "input",
        message: "Team Manager Office Number: ",
    }
    ]).then((answer) => {
        
        inquirer.prompt(
            inquirer.prompt([{
                name: "askEngIntern",
                type: "text",
                message: "Enter 1 for Engineer, Enter 2 for Intern, and Enter 0 to quit",
            }
        ).then((answer) => {
            if parseInt(answer.askEngIntern)===1
            {
                
            }
            else if parseInt(answer.askEngIntern)===2
            {

            }
            else
            {
                
            }
        })
    });
}

teamManagerInit();