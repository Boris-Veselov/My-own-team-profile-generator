// function to generate the page
const generateTeam = (myTeam) => {
    console.log(myTeam);

    // array to push all the employees through the loop
    const html = [];

    // functions of all the employees
    const genManager = Manager => {
        console.log(Manager);
        var managerGenHtml = ` 
        <div class="card" style="width: 20rem;">
            <div class="card-header">
           ${Manager.name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${Manager.email}">${Manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
            </ul>
        </div>
        `;
        html.push(managerGenHtml);
    }
    const genEngineer = engineer => {
        console.log(engineer);
        var engineerGenHtml = ` 
        <div class="card" style="width: 20rem;">
            <div class="card-header">
           ${engineer.name} <br/>
           <i class="fas fa-glasses"></i>Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
            </ul>
        </div>
        `;
        html.push(engineerGenHtml);
    }
    const genIntern = intern => {
        console.log(intern);
        var internGenHtml = ` 
        <div class="card" style="width: 20rem;">
            <div class="card-header">
           ${intern.name} <br/>
           <i class="fas fa-user-graduate"></i>Intern</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
        html.push(internGenHtml);
    }

    // create a loop for all of the employees
    for (var i = 0; i < myTeam.length; i++) {
        if (myTeam[i].getRole() === 'Manager') {
            genManager(myTeam[i]);
        }
        if (myTeam[i].getRole() === 'Engineer') {
            genEngineer(myTeam[i]);
        }
        if (myTeam[i].getRole() === 'Intern') {
            genIntern(myTeam[i]);
        }
    }

    // this joins all HTML blocks
    return html.join('');
}

module.exports = myTeam => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>
    <main> ${generateTeam(myTeam)} </main>
     
</body>
</html>
    `;
}