const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const csv = require('csvtojson');
const req = require('req-fast');
const readline = require('readline');
const fs = require('fs');
const process = require('process');
//const getProfiles = require('./getProfiles.js')
const taskCount = require('./taskCount.js')
const e = require("express");
const RPC = require("discord-rpc");
const { exit } = require("process");

function rich() {
    const rpc = new RPC.Client({
      transport: "ipc"
  });

  rpc.on("ready",() => {
    rpc.setActivity({
      details: "version: alpha",
      startTimestamp: new Date(),
      largeImageKey: "quasar-aio",
      largeImageText: "Menacing...",
    });
    //console.log("Rich presence is now active")
  });

  rpc.login({
      clientId: "809515898649051196"
  });
}



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
  await rich()
  taskCount.taskCount();
  const menu = () => {
    const questions = [
      { type: 'list', 
      message:chalk.hex('#643dff')(  "What Would You Like To Do?:  "), 
      name: "Option",
      choices: [
          chalk.hex('#643dff')('Start Tasks'),
          chalk.hex('#643dff')('Webhook Test'),
          //chalk.hex('#643dff')('Exit')
      ]}
  ];
  return inquirer.prompt(questions)
  
  }
  
  
  const main = async () => {
    for(let count = 0; count < 10^10^100; count ++) {
      await menu()
      .then(answers => {
        let SelectedOption = ''
        if(answers.Option ==  chalk.hex('#643dff')('Webhook Test')) {
            const webhookTest = require('./hookTest.js')
            webhookTest()
            console.log('Test Sent')
            //run()
        }
        else if(asnwers.Option == chalk.hex('#643dff')('Start Tasks')) { 
          
        }
        else { 
          process.exit()
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

