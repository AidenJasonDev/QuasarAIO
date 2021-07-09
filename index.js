const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const csv = require('csvtojson');
const req = require('req-fast');
const readline = require('readline');
const fs = require('fs');
const process = require('process');
const getProfiles = require('./getProfiles.js')

const rpc = require('./discordrpc.js');
const e = require("express");
rpc
let carts = 0
let declines = 0
let checkouts = 0
process.title = `QuasarAIO CLI vBETA | Carted: ${carts} | Declined: ${declines} | Checkouts: ${checkouts}`; 
 const startAuth = () => {
    console.log(
        chalk.rgb(65,17,255)(
        figlet.textSync('Quasar Auth', {
            font: "Graffiti",
            horizontalLayout: "default",
            verticalLayout: "default"
        })
        )
    );
 }
 function footlockerTasks() {
    const file = './FTLTasks.csv';
    let linesCount = 0;
    let rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        terminal: false
    });
    rl.on('line', function (line) {
        linesCount++; // on each linebreak, add +1 to 'linesCount'
    });
    rl.on('close', function () {
      let tasks = linesCount - 1
        console.log(chalk.hex('#FF1158')('Imported: ') + chalk.hex('#11FFB8')( tasks ) + ' Footlocker tasks'); // print the result when the 'close' event is called
    });
  }
  function kidsFootlockerTasks() {
    const file = './KFTLTasks.csv';
    let linesCount = 0;
    let rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        terminal: false
    });
    rl.on('line', function (line) {
        linesCount++; // on each linebreak, add +1 to 'linesCount'
    });
    rl.on('close', function () {
      let tasks = linesCount - 1
        console.log(chalk.hex('#FF1158')('Imported: ') + chalk.hex('#11FFB8')( tasks ) + ' Kids Footlocker tasks'); // print the result when the 'close' event is called
    });
  }
  function ladyFootlockerTasks() {
    const file = './LFTLTasks.csv';
    let linesCount = 0;
    let rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        terminal: false
    });
    rl.on('line', function (line) {
        linesCount++; // on each linebreak, add +1 to 'linesCount'
    });
    rl.on('close', function () {
      let tasks = linesCount - 1
        console.log(chalk.hex('#FF1158')('Imported: ') + chalk.hex('#11FFB8')( tasks ) + ' Lady Footlocker tasks'); // print the result when the 'close' event is called
    });
  }
  function champssportsTasks() {
    const file = './CSTasks.csv';
    let linesCount = 0;
    let rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        terminal: false
    });
    rl.on('line', function (line) {
        linesCount++; // on each linebreak, add +1 to 'linesCount'
    });
    rl.on('close', function () {
      let tasks = linesCount - 1
        console.log(chalk.hex('#FF1158')('Imported: ') + chalk.hex('#11FFB8')( tasks ) +  ' Champs Sports tasks'); // print the result when the 'close' event is called
    });
  }
  function footactionTasks() {
    const file = './FTATasks.csv';
    let linesCount = 0;
    let rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        terminal: false
    });
    rl.on('line', function (line) {
        linesCount++; // on each linebreak, add +1 to 'linesCount'
    });
    rl.on('close', function () {
      let tasks = linesCount - 1
        console.log(chalk.hex('#FF1158')('Imported: ') + chalk.hex('#11FFB8')( tasks ) +  ' Footaction tasks'); // print the result when the 'close' event is called
    });
  }
  function eastbayTasks() {
    const file = './EBTasks.csv';
    let linesCount = 0;
    let rl = readline.createInterface({
        input: fs.createReadStream(file),
        output: process.stdout,
        terminal: false
    });
    rl.on('line', function (line) {
        linesCount++; // on each linebreak, add +1 to 'linesCount'
    });
    rl.on('close', function () {
        let tasks = linesCount - 1
        console.log(chalk.hex('#FF1158')( 'Imported: ') + chalk.hex('#11FFB8')( tasks ) +  ' East Bay tasks' ); // print the result when the 'close' event is called
    });
  }
  const start = async () => {
    console.log(
        chalk.rgb(65,17,255)(
        figlet.textSync('Quasar AIO CLI', {
            font: "Graffiti",
            horizontalLayout: "default",
            verticalLayout: "default"
        })
        )

    );

 }
const run = async () => {
  await start()
  const profiles = getProfiles.getProfiles()
  const tasks = ['KFTL','KITH','EB']

  let CHOICES = [];

  for (var i = 0; i < tasks.length; i++) {
    CHOICES.push(chalk.hex('#643dff')('Start '+tasks[i]+' Tasks'))
  }

  CHOICES.push(chalk.hex('#643dff')('Task Count'))
  CHOICES.push(chalk.hex('#643dff')('View Settings'))
  CHOICES.push(chalk.hex('#643dff')('Webhook Test'))

  const menu = () => {
    const questions = [
      { type: 'list', 
      message:chalk.hex('#643dff')(  "What Would You Like To Do?:  "), 
      name: "Option",
      choices: CHOICES
    }
  ];
    return inquirer.prompt(questions)
  
  }
  
  
  const main = async () => {
    for(let count = 0; count < 10; count ++) {
      await menu()
      .then(answers => {
        let SelectedOption = ''
        if(answers.Option ==  chalk.hex('#643dff')('Webhook Test')) {
            const webhookTest = require('./hookTest.js')
            webhookTest()
            console.log('Test Sent')
            //run()
        }
        else if(answers.Option == chalk.hex('#643dff')('View Settings')) {
            csv().fromFile("./Settings.csv").then((jsonObj) =>{
                userHook = jsonObj[0]
                console.log(userHook)
                //run()
            })
        }
        else if(answers.Option == chalk.hex('#643dff')('Task Count')) {
            footlockerTasks()
            champssportsTasks()
            footactionTasks()
            eastbayTasks()
            kidsFootlockerTasks()
            ladyFootlockerTasks()
        }
        else{    
          for (var i = 0; i < CHOICES.length; i++) {
            if (answers.Option == CHOICES[i]) {
              console.log(CHOICES[i]);
            }
          }
        }
    })
    .catch(error => {
  
    if(error.isTtyError) {
  
    } else {
  
    }
    });
    }
  }
  main()  
  };

  

const auth = async () => {
    startAuth()
    const options = {
        url: `http://localhost:8080/getUsers`,
        method: 'GET',
        timeout: 200
      }
      req(options, function(err,res) {
        run()
        /*let authorized = false
        if(err) {
          console.log('Problem Authenticating Key')
          process.exit()
        }
        else {
          
          let users = JSON.parse(res.body)
          let key = '00e656bf-2e9a-8793-q078-6f9dd000fcfd'
         // let key = 'xxxxxx'
          
          if(users[key].keyBound == false) {
            const data = JSON.stringify({"key":`${key}`});
            const config = {
              url: `http://localhost:8080/getUsers`,
              method: 'POST',
              data: data,
              headers: { 
                'Content-Type': 'application/json'
              },
              timeout: 200
            }
            req(config, function(err,res){
              if(res.statusCode == 200) {
                console.log('Key Bound')
                authorized = true
                run()
              }

            })

          }
          else {
            console.log(res.body)
            authorized = false
            process.exit()
          }
        }*/
      })

}    
    
auth();

