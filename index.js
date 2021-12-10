
const process = require('process');
const RPC = require("discord-rpc");
const chalk = require('chalk');
const prompt = require('prompt');

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
let colored = chalk.hex('#643dff')
let mono = chalk.hex('#EAEAEA')
let errcolor = chalk.hex('#FF605C')
let licenseKey = ''
process.title = `QuasarAIO Version: 1 Build: 1| Carted: ${carts} | Declined: ${declines} | Checkouts: ${checkouts}`; 

const auth = async () => {
  console.log(mono('Welcome to ') + colored('QuasarAIO'))
  while(licenseKey == ''){
    licenseKey = prompt.get(['Enter Key'])
    if(licenseKey == ' ') {
      console.log(licenseKey)
      console.log(errcolor('Invalid License'))
    }
  }
}
auth()