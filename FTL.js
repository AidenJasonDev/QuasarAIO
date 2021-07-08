
const site = 'Footlocker US'

//Imports
const cluster = require('cluster');
const axios = require('axios-proxy-fix');
const shortid = require('shortid')
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();
const adyenEncrypt = require('node-adyen-encrypt')(18);
const perf = require('execution-time')();
const os = require('os');
const chalk = require('chalk');
const { v4: uuidv4 } = require('uuid');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs').promises;
const Jimp = require('jimp');
const pixelmatch = require('pixelmatch');
const { cv } = require('opencv-wasm');

puppeteer.use(StealthPlugin())

//Variables

let userhook = 'https://discordapp.com/api/webhooks/766055188406337546/vUzGtrH1HxIHvNhQrd6VFqVvuRgBoRGfN1_5mUK1gdpevoW-r1huyRxMQlvXcrWbBn_8'
const publichook = 'https://discord.com/api/webhooks/822240944723853333/4LFZWDU7nOKGdMo1TJyQb4zfZmPrXLYLw7gvlCE5k0Jny0TC0KnvvA9lFUiFuWOWGRrT'

let task_number = 1

let sku = '622100'
let monDelay = 6666
let errDelay = 5555
let resDelay = 5555

let size = 'XL'
let sizelist = size.split(' ')

let fineProxy;
//let rawProxy = 'suec2mlhczrxs.025.npx.is:10581' // FIX THIS
//let rawProxy = 'zj.r.npx.is:1338:nus:3PCwXuX89'
let rawProxy = ''
//let rawProxy = 'basic.maskedproxy.xyz:31112:maskedhhrillslrn:8BT3hTG49UplvWGQ_country-UnitedStates_session-MDuItCD9'
if(rawProxy == '') {
  function getIP() {
    let interfaces = os.networkInterfaces();
    let addresses = [];
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }
     fineProxy = false
     rawProxy = 'local'
  }
  getIP()
}
else{
  let proxyList = rawProxy.split(':')
  let proxyHost = proxyList[0]
  let proxyPort = proxyList[1]
  let proxyUser = proxyList[2]
  let proxyPass = proxyList[3]
  fineProxy = {
    host: proxyHost,
    port: proxyPort,
    auth: {
      username: proxyUser,
      password: proxyPass
    }
  }
}

let profile = {
  "name": "Main",
  "firstName": "Aiden",
  "lastName": "Williams",
  "Email": "Jawsome2015@gmail.com",
  "Phone": "2026990770",
  "Address": "6601 River Trail Ct",
  "Apt": "",
  "City": "Bethesda",
  "Zip": "20817",
  "State": "MD",
  "Country": "US",
  "sameBilling": false,
  "billingAddress": "",
  "billingApt": "",
  "billingCity": "",
  "billingZip": "",
  "billingState": "",
  "billingCountry": "",
  "cardNumber": "4767718420860167",
  "expiryMonth": "03",
  "expiryYear": "07",
  "Csc": "210"
}
let states = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AS": "American Samoa",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FM": "Federated States Of Micronesia",
  "FL": "Florida",
  "GA": "Georgia",
  "GU": "Guam",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MH": "Marshall Islands",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "MP": "Northern Mariana Islands",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PW": "Palau",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VI": "Virgin Islands",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
}
let countries = {
  "US": "United States"
}
//Helper Functions

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
let ReferID = 'QZR' + shortid.generate()

function timestamp() {
	let ts = new Date().getTime();
	return ts
  //console.log(ts)

}

function delay(time) {
  return new Promise(function(resolve) {
      setTimeout(resolve, time)
  });
}


'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	  let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	  requestID = v.toString(16);
	});


function getDateTime() {

  let date = new Date();

  let hr;
  let hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;
  if(hour > 10) {
    let normTimeRaw = hour / 2
     hr = Math.floor(normTimeRaw) - 1

  }
  else {
    hr = hour
  }

  let min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  let sec  = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  return '[' + hr + ":" + min + ":" + sec + '] ';

}

function stamp(task,log,type,stat,name,size) {
  if(type === 'pos') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + `[${size}] ` +  log))
        }

      }
      else {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }

      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + `[${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + `[${stat}] ` +  `[${size}] ` +  log))
        }

      }
      else {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` + `[${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` + `[${stat}] ` +  `[${size}] ` +  log))
        }

      }
    }

  }
  else if (type === 'neu') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` +  `[${size}] ` +  log))
        }

      }
      else {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }

      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` +  `[${size}] ` +  log))
        }

      }
      else {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` +  `[${size}] ` +  log))
        }

      }
    }
  }
  else if(type === 'neg'){
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` +  `[${size}] ` +  log))
        }

      }
      else {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }

      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }

      }
      else {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` +  `[${size}] ` +  log))
        }

      }
    }
  }
  else if(type === 'spec') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` +  `[${size}] ` +  log))
        }

      }
      else {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }

      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }

      }
      else {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }

      }
    }
  }
  else if(type === 'act') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + `[${size}] ` +   log))
        }

      }
      else {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + `[${size}] ` +   log))
        }

      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }

      }
      else {
        if(size === false) {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta(task + " - " + '[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }

      }
    }
  }
  else if(type === 'custom1') {
    console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + log))
  }
  else if(type === 'custom2') {
    console.log(chalk.magenta(task + '[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + log))
  }
  else {
    null
  }

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Main Function
stamp('Starting....','custom1') //special
async function main() {

    stamp(`[Task ${cluster.worker.id}]`,'Selected Proxy: ' + rawProxy,'custom2') //special
    perf.start();
    let carted = 0
    let declines = 0
    let checkouts = 0
     async function findSizes() {
        stamp(`[Task ${cluster.worker.id}]`,'Finding Product....','act',false,false,false)
        let config = {
            method: 'get',
            url: `https://www.footlocker.com/api/products/pdp/${sku}?timestamp=${timestamp()}?channel=MOBILE#quasarontopLolz`,
            //url: `https://www.footlocker.com/api/products/pdp/${sku}?timestamp=${timestamp()}`,
            jar: cookieJar,
            withCredentials: true,
            //proxy: fineProxy

          };

        try {
             res = await axios(config)
             if(res.status == 200) {

                 productName = res.data.name
                 stamp(`[Task ${cluster.worker.id}]`,'Found Product: ' + productName,'spec',res.status,productName,false)



                function singleSize() {
                  stamp(`[Task ${cluster.worker.id}]`,'Selecting Size....','act',false,productName,false)
                    let info = res.data
                    let pids = info.variantAttributes
                     pidFound = false;
                    for(let x = 0; x < pids.length; x++) {
                        if(pids[x].stockLevelStatus.includes('inStock')) {
                            pidFound = true
                            if(pids[x].sku == sku) {
                                 productID = pids[x].code
                                 price = pids[x].price.formattedValue
                                //console.log(productID)

                                let sizes = info.sellableUnits
                                 sizeIDFound = false;
                                for(let i = 0; i < sizes.length; i++) {
                                    if(sizes[i].stockLevelStatus.includes('inStock')) {
                                        sizeIDFound = true;

                                        if (sizes[i].attributes[0].value == size && sizes[i].attributes[1].id == productID ) {
                                            //console.log(sizes[i].code)
                                             size = sizes[i].attributes[0].value
                                            stamp(`[Task ${cluster.worker.id}]`,'Selected Size: ' + size,'spec',false,productName,size)
                                            sizeID = sizes[i].code

                                        }
                                    }
                                }
                            }
                        }
                    }
                  }
                  function multiSize() { // FIXXXXX
                    stamp(`[Task ${cluster.worker.id}]`,'Selecting Size....','act',false,productName)
                    let info = res.data
                    let pids = info.variantAttributes
                     pidFound = false;
                    for(let x = 0; x < pids.length; x++) {
                        if(pids[x].stockLevelStatus.includes('inStock')) {
                            pidFound = true
                            if(pids[x].sku == sku) {
                                 productID = pids[x].code
                                 price = pids[x].price.formattedValue
                                //console.log(productID)

                                let sizes = info.sellableUnits
                                 sizeIDFound = false;
                                for(let i = 0; i < sizes.length; i++) {
                                    if(sizes[i].stockLevelStatus.includes('inStock')) {
                                        sizeIDFound = true;

                                        if (sizelist.includes(sizes[i].attributes[0].value)  && sizes[i].attributes[1].id == productID ) {
                                          //console.log(sizes[i].code)
                                           size = sizes[i].attributes[0].value
                                           stamp(`[Task ${cluster.worker.id}]`,'Selected Size: ' + size,'spec',productName,size)
                                          sizeID = sizes[i].code

                                      }

                                    }
                                }
                            }
                        }
                    }
                  }
                  function randSize() { // FIXXXXX
                    stamp(`[Task ${cluster.worker.id}]`,'Selecting Size....','act',false,productName)
                    let info = res.data
                    let pids = info.variantAttributes
                     pidFound = false;

                    for(let x = 0; x < pids.length; x++) {
                        if(pids[x].stockLevelStatus.includes('inStock')) {
                            pidFound = true
                            if(pids[x].sku == sku) {
                                 productID = pids[x].code
                                 price = pids[x].price.formattedValue
                                //console.log(productID)

                                let sizes = info.sellableUnits
                                 sizeIDFound = false;
                                for(let i = 0; i < sizes.length; i++) {
                                    if(sizes[i].stockLevelStatus.includes('inStock')) {
                                      let allSizes = info.sizeChartGridMap[0].sizes
                                      let randSize = Math.floor(Math.random() * allSizes.length + 1);
                                      let size = allSizes[randSize]
                                        sizeIDFound = true;
                                        if (sizes[i].attributes[0].value == size && sizes[i].attributes[1].id == productID ) {
                                          //console.log(sizes[i].code)
                                           size = sizes[i].attributes[0].value
                                           stamp(`[Task ${cluster.worker.id}]`,'Selected Size: ' + size,'spec',productName,size)
                                          sizeID = sizes[i].code

                                      }
                                    }
                                }
                            }
                        }
                    }
                  }
                  if(sizelist.length > 1) {
                    multiSize()
                  }
                  else if (size == 'RA') {
                    randSize()
                  }
                  else{
                    singleSize()
                  }

                  let info = res.data
                  let images = info.images
                  for(let x = 0; x < images.length; x++) {
                      if(images[x].code == productID) {
                        image = images[x].variations[4].url

                     }

                  }

                  async function grabCSRF() {
                    stamp(`[Task ${cluster.worker.id}]`,"Grabbing Token....",'act',false,productName,size)
                    let config = {
                        method: 'get',
                        url: `https://www.footlocker.com/api/session?timestamp=${timestamp()}`,
                        jar: cookieJar,
                        withCredentials: true,
                        proxy: fineProxy
                      };
                      try{
                        res = await axios(config)
                        if(res.status == 200) {
                            stamp(`[Task ${cluster.worker.id}]`,"Grabbed Token",'spec',res.status,productName,size)


                            let csrf = res.data.data.csrfToken
                            //console.log(csrf)
                            //let cartID = res.data.data.cart.cartId
                            //console.log(res.data)
                            async function ATC() {
                              function getFlapi(){
                                se = cookieJar.store.idx['www.footlocker.com']
                                ses = se['/']
                                session = ses['JSESSIONID'] + ''
                                flapiID = session.split('=')[1].split(";")[0]
                                return flapiID
                              }
                              flapi = getFlapi()
                              //console.log(flapi)
                              //flapi = getFlapi()
                             // console.log(cookieJar)
                             // console.log(fineProxy)
                                stamp(`[Task ${cluster.worker.id}]`,'Adding To Cart....','act',false,productName,size)
                                let data = JSON.stringify({"productQuantity":1,"productId":`${sizeID}`});
                                let config = {
                                  method: 'post',
                                  url: `https://WwW.footlocker.com/api/users/carts/current/entries?timestamp=${new Date().getTime()}?channel=MOBILE#quasarontopLolz`,
                                  headers: {
                                    'Fastly-Orig-Accept-Encoding':'gzip, deflate',
                                    'Fastly-Client-IP':'213.165.190.50',
                                    'X-Timer':'S1542133246.162954,VS0',
                                    'X-Varnish':'2429674486',
                                    'X-Varnish':'1846707052',
                                    'Fastly-Client':'1',
                                    'Fastly-FF':'4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1543-HHN, 4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1544-HHN',
                                    'CDN-Loop':'Fastly',
                                    'x-cache': 'MISS, MISS',
                                    'X-Powered-By': 'ZendServer 8.5.0,ASP.NET',
                                    'accept-encoding':'gzip, deflate, br',
                                    'connection': 'keep-alive',
                                    'authority': 'www.footlocker.com',
                                    'sec-ch-ua': 'Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90',
                                    'x-csrf-token': `${csrf}`,
                                    'sec-ch-ua-mobile': '?0',
                                    'x-fl-productid': `${sizeID}`,
                                    'content-type': 'application/json',
                                    'accept': 'application/json',
                                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
                                    'x-fl-request-id': `${uuidv4()}`,
                                    'origin': 'https://www.footlocker.com',
                                    'sec-fetch-site': 'same-origin',
                                    'sec-fetch-mode': 'cors',
                                    'sec-fetch-dest': 'empty',
                                    'referer': `https://www.footlocker.com/product/~/Q6806100.html`,
                                    'accept-language': 'en-US,en;q=0.9',

                                  },
                                  data : data,
                                  jar: cookieJar,
                                  withCredentials: true,
                                  proxy: fineProxy
                                };

                                try {
                                    res = await axios(config)
                                    if(res.status == 200) {
                                        stamp(`[Task ${cluster.worker.id}]`,'Carted','spec',res.status,productName,size)
                                        carted++
                                       async function grabNewCSRF() {
                                        stamp(`[Task ${cluster.worker.id}]`,"Grabbing New Token....",'act',false,productName,size)
                                        let config = {
                                            method: 'get',
                                            url: `https://www.footlocker.com/api/session?timestamp=${timestamp()}`,
                                            jar: cookieJar,
                                            withCredentials: true,
                                            proxy: fineProxy
                                          };
                                          try{
                                            res = await axios(config)
                                            if(res.status == 200) {
                                              stamp(`[Task ${cluster.worker.id}]`,"Grabbed New Token",'spec',res.status,productName,size)

                                              token = res.data.data.csrfToken
                                              //console.log(token)
                                              let cartID = res.data.data.cart.cartId
                                              async function setEmail () {
                                                stamp(`[Task ${cluster.worker.id}]`,'Setting Email....','act',false,productName,size)
                                                let config = {
                                                  method: 'put',
                                                  url: `https://www.footlocker.com/api/users/carts/current/email/${profile.Email}?timestamp=${timestamp()}`,
                                                  headers: {
                                                    'Fastly-Orig-Accept-Encoding':'gzip, deflate',
                                                    'Fastly-Client-IP':'213.165.190.50',
                                                    'X-Timer':'S1542133246.162954,VS0',
                                                    'X-Varnish':'2429674486',
                                                    'X-Varnish':'1846707052',
                                                    'Fastly-Client':'1',
                                                    'Fastly-FF':'4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1543-HHN, 4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1544-HHN',
                                                    'CDN-Loop':'Fastly',

                                                    'authority': 'www.footlocker.com',
                                                    'content-length': '0',
                                                    'pragma': 'no-cache',
                                                    'cache-control': 'no-cache',
                                                    'accept': 'application/json',
                                                    'x-csrf-token': `${token}`,
                                                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36',
                                                    'x-fl-request-id': `${uuidv4()}`,
                                                    'sec-gpc': '1',
                                                    'origin': 'https://www.footlocker.com',
                                                    'sec-fetch-site': 'same-origin',
                                                    'sec-fetch-mode': 'cors',
                                                    'sec-fetch-dest': 'empty',
                                                    'referer': 'https://www.footlocker.com/checkout',
                                                    'accept-language': 'en-US,en;q=0.9',
                                                    //'cookie': `${cookieJar}`
                                                      //'cookie': `csrf=${token}`
                                                  },

                                                  jar: cookieJar,
                                                  withCredentials: true,
                                                  proxy: fineProxy
                                                };
                                                try {
                                                  res = await axios(config)
                                                  if(res.status == 200) {
                                                    stamp(`[Task ${cluster.worker.id}]`,'Email Set','spec',res.status,productName,size)

                                                    async function verifyAddress() {
                                                      stamp(`[Task ${cluster.worker.id}]`,'Verifying Address....','act',false,productName,size)
                                                      let data = JSON.stringify({
                                                        "country": {
                                                          "isocode": `${profile.Country}`,
                                                          "name": `${countries[profile.Country]}`
                                                        },
                                                        "region": {
                                                          "countryIso": `${profile.Country}`,
                                                          "isocode": `${profile.Country}-${profile.State}`,
                                                          "isocodeShort": `${profile.State}`,
                                                          "name": `${states[profile.State]}`
                                                        },
                                                        "line1": `${profile.Address}`,
                                                        "line2":`${profile.Apt}`,
                                                        "postalCode": `${profile.Zip}`,
                                                        "town": `${profile.City.toUpperCase()}`
                                                      });

                                                      let config = {
                                                        method: 'post',
                                                        url: `https://www.footlocker.com/api/v3/users/addresses/verification?timestamp=${timestamp()}`,
                                                        headers: {
                                                          'Fastly-Orig-Accept-Encoding':'gzip, deflate',
                                                          'Fastly-Client-IP':'213.165.190.50',
                                                          'X-Timer':'S1542133246.162954,VS0',
                                                          'X-Varnish':'2429674486',
                                                          'X-Varnish':'1846707052',
                                                          'Fastly-Client':'1',
                                                          'Fastly-FF':'4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1543-HHN, 4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1544-HHN',
                                                          'CDN-Loop':'Fastly',

                                                          'authority': 'www.footlocker.com',
                                                          'pragma': 'no-cache',
                                                          'cache-control': 'no-cache',
                                                          'accept': 'application/json',
                                                          'x-csrf-token': `${token}`,
                                                          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36',
                                                          'x-fl-request-id': `${uuidv4()}`,
                                                          'content-type': 'application/json',
                                                          'sec-gpc': '1',
                                                          'origin': 'https://www.footlocker.com',
                                                          'sec-fetch-site': 'same-origin',
                                                          'sec-fetch-mode': 'cors',
                                                          'sec-fetch-dest': 'empty',
                                                          'referer': 'https://www.footlocker.com/checkout',
                                                          'accept-language': 'en-US,en;q=0.9',

                                                          'authority': 'www.footlocker.com',
                                                        },
                                                        data : data,
                                                        jar: cookieJar,
                                                        withCredentials: true,
                                                        proxy: fineProxy
                                                      };
                                                      try {
                                                        res = await axios(config)
                                                        if(res.status == 200) {
                                                          stamp(`[Task ${cluster.worker.id}]`,'Verified Address','spec',res.status,productName,size)
                                                           postalCode = res.data.suggestedAddresses[0].postalCode
                                                           //console.log(postalCode)

                                                           async function setShipping() {
                                                            stamp(`[Task ${cluster.worker.id}]`,"Sending Shipping....",'act',false,productName,size)
                                                            let data = JSON.stringify({"id": null, "shippingAddress":{"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`,"email":false,"phone":`${profile.Phone}`,"country":{"isocode":`${profile.Country}`,"name":`${countries[profile.Country]}`},"id":null,"setAsBilling":true,"region":{"countryIso":`${profile.Country}`,"isocode":`${profile.Country + '-' + profile.State}`,"isocodeShort":`${profile.state}`,"name":`${states[profile.State]}`},"type":"default","LoqateSearch":"","line1":`${profile.Address}`,"postalCode":`${postalCode}`,"town":`${profile.City.toUpperCase()}`,"regionFPO":null,"shippingAddress":true,"recordType":"S"}});
                                                            let config = {
                                                              method: 'post',
                                                              url: `https://www.footlocker.com/api/users/carts/current/addresses/shipping?timestamp=${timestamp()}`,
                                                              headers: {
                                                              'Fastly-Orig-Accept-Encoding':'gzip, deflate',
                                                              'Fastly-Client-IP':'213.165.190.50',
                                                              'X-Timer':'S1542133246.162954,VS0',
                                                              'X-Varnish':'2429674486',
                                                              'X-Varnish':'1846707052',
                                                              'Fastly-Client':'1',
                                                              'Fastly-FF':'4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1543-HHN, 4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1544-HHN',
                                                              'CDN-Loop':'Fastly',

                                                                'authority': 'www.footlocker.com',
                                                                'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
                                                                'accept': 'application/json',
                                                                'x-csrf-token': `${token}`,
                                                                'sec-ch-ua-mobile': '?0',
                                                                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
                                                                'x-fl-request-id': `${uuidv4()}`,
                                                                'content-type': 'application/json',
                                                                'origin': 'https://www.footlocker.com',
                                                                'sec-fetch-site': 'same-origin',
                                                                'sec-fetch-mode': 'cors',
                                                                'sec-fetch-dest': 'empty',
                                                                'referer': 'https://www.footlocker.com/checkout',
                                                                'accept-language': 'en-US,en;q=0.9',
                                                              },
                                                              jar: cookieJar,
                                                              withCredentials: true,
                                                              data : data,
                                                              proxy: fineProxy
                                                            };
                                                            try{
                                                              res = await axios(config)

                                                              if(res.status == 201) {
                                                                stamp(`[Task ${cluster.worker.id}]`,"Sent Shipping",'spec',res.status,productName,size)
                                                                //console.log(cookieJar)
                                                                //console.log(res)
                                                                 //console.log(res.data)
                                                                 //console.log(cookieJar)
                                                                  billingID  = res.data.id
                                                                  async function setBilling() {
                                                                    stamp(`[Task ${cluster.worker.id}]`,"Sending Billing....",'act',false,productName,size)
                                                                    let data = JSON.stringify({
                                                                      "setAsDefaultBilling": false,
                                                                      "setAsDefaultShipping": false,
                                                                      "firstName": `${profile.firstName}`,
                                                                      "lastName": `${profile.lastName}`,
                                                                      "email": false,
                                                                      "phone": `${profile.Phone}`,
                                                                      "country": {
                                                                        "isocode": `${profile.Country}`,
                                                                        "name": `${countries.US}`,
                                                                      },
                                                                      "id": null,
                                                                      "setAsBilling": false,
                                                                      "saveInAddressBook": false,
                                                                      "region": {
                                                                        "countryIso": `${profile.Country}`,
                                                                        "isocode": `${profile.Country}` + '-' + `${profile.State}`,
                                                                        "isocodeShort": `${profile.State}`,
                                                                        "name": `${states.MD}`
                                                                      },
                                                                      "type": "default",
                                                                      "line1": `${profile.Address}`,
                                                                      "postalCode": `${postalCode}`,
                                                                      "town": `${profile.City.toUpperCase()}`,
                                                                      "regionFPO": null,
                                                                      "shippingAddress": true,
                                                                      "recordType": "S",
                                                                      "visibleInAddressBook": false
                                                                    });
                                                                    let config = {
                                                                      method: 'post',
                                                                      url: `https://www.footlocker.com/api/users/carts/current/set-billing?timestamp=${timestamp()}`,
                                                                      headers: {
                                                                        'Fastly-Orig-Accept-Encoding':'gzip, deflate',
                                                                        'Fastly-Client-IP':'213.165.190.50',
                                                                        'X-Timer':'S1542133246.162954,VS0',
                                                                        'X-Varnish':'2429674486',
                                                                        'X-Varnish':'1846707052',
                                                                        'Fastly-Client':'1',
                                                                        'Fastly-FF':'4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1543-HHN, 4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1544-HHN',
                                                                        'CDN-Loop':'Fastly',

                                                                       'authority': 'www.footlocker.com',
                                                                      'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                                                                      'x-csrf-token': `${token}`,
                                                                      'sec-ch-ua-mobile': '?0',
                                                                      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                                                                      'content-type': 'application/json',
                                                                      'accept': 'application/json',
                                                                      //'x-flapi-session-id': '2959jkdcspkz9h3tbzgffg05.fzcexflapipdb658880',
                                                                      'x-fl-request-id': `${uuidv4()}`,
                                                                      'origin': 'https://www.footlocker.com',
                                                                      'sec-fetch-site': 'same-origin',
                                                                      'sec-fetch-mode': 'cors',
                                                                      'sec-fetch-dest': 'empty',
                                                                      'referer': 'https://www.footlocker.com/checkout',
                                                                      'accept-language': 'en-US,en;q=0.9',
                                                                     },
                                                                     data : data,
                                                                     jar: cookieJar,
                                                                     withCredentials: true,
                                                                     proxy: fineProxy
                                                                    };
                                                                    //console.log(billingID)
                                                                    try {
                                                                      res = await axios(config)
                                                                      //console.log(res)
                                                                      if(res.status == 200) {
                                                                        stamp(`[Task ${cluster.worker.id}]`,'Sent Billing','spec',res.status,productName,size)
                                                                        //console.log(res.data)
                                                                        //console.log(cookieJar)
                                                                        async function sendPayment() {
                                                                          stamp(`[Task ${cluster.worker.id}]`,"Sending Payment....",'act',false,productName,size)
                                                                          //console.log(cartID)
                                                                          const adyenKey  =   '10001|A237060180D24CDEF3E4E27D828BDB6A13E12C6959820770D7F2C1671DD0AEF4729670C20C6C5967C664D18955058B69549FBE8BF3609EF64832D7C033008A818700A9B0458641C5824F5FCBB9FF83D5A83EBDF079E73B81ACA9CA52FDBCAD7CD9D6A337A4511759FA21E34CD166B9BABD512DB7B2293C0FE48B97CAB3DE8F6F1A8E49C08D23A98E986B8A995A8F382220F06338622631435736FA064AEAC5BD223BAF42AF2B66F1FEA34EF3C297F09C10B364B994EA287A5602ACF153D0B4B09A604B987397684D19DBC5E6FE7E4FFE72390D28D6E21CA3391FA3CAADAD80A729FEF4823F6BE9711D4D51BF4DFCB6A3607686B34ACCE18329D415350FD0654D'
                                                                          let options = {}


                                                                          let cardNumberData = {
                                                                            number: `${profile.cardNumber}`,
                                                                            holderName: `${profile.firstName}`,
                                                                            generationTime: `${timestamp()}`
                                                                          }
                                                                          let expiryMonthData = {
                                                                            number: `${profile.expiryMonth}`,
                                                                            holderName: `${profile.firstName}`,
                                                                            generationTime: `${timestamp()}`
                                                                          }
                                                                          let expiryYearData = {
                                                                            number: `${profile.expiryYear}`,
                                                                            holderName: `${profile.firstName}`,
                                                                            generationTime: `${timestamp()}`
                                                                          }
                                                                          let CVCData = {
                                                                            number: `${profile.Csc}`,
                                                                            holderName: `${profile.firstName}`,
                                                                            generationTime: `${timestamp()}`
                                                                          }

                                                                          const cseInstance = adyenEncrypt.createEncryption(adyenKey, options);
                                                                          cseInstance.validate(cardNumberData);
                                                                          let encryptedCardNumber = cseInstance.encrypt(cardNumberData)
                                                                          //console.log(encryptedCardNumber)

                                                                          cseInstance.validate(expiryMonthData);
                                                                          let encryptedExpiryMonth = cseInstance.encrypt(adyenKey, expiryMonthData)
                                                                          //console.log(encryptedExpiryMonth)

                                                                          cseInstance.validate(expiryYearData);
                                                                          let encryptedExpiryYear = cseInstance.encrypt(adyenKey, expiryYearData)
                                                                          //console.log(encryptedExpiryYear)

                                                                          cseInstance.validate(CVCData);
                                                                          let encryptedCVC = cseInstance.encrypt(adyenKey, CVCData)
                                                                          //console.log(encryptedCVC)

                                                                          let deviceID = "0400tyDoXSFjKeoNf94lis1ztrjQCvk297SBnrp/XmcfWoVVgr+Rt2dAZIo7BJIRIWDNtjiuvPP9Vk+xH1ZPRIwM6njw/ujAyYdbGKZt5JLThTvosS1xgSAgNfLEMokGoGJxkQoETU844t3be5HdI2Avs3MJcUsQStJDt76hTZ7PKsYZ6ufnFNM4e/jfQVVPLDecnQ1km36ttttdSDvFsQ9SoX7ry6XZ5LGKgriaMoAypQuyPr0t8ztVFisjUV4dJsOym9ceHDKRCiK4xI1RTIYC8ouD71qCKcmZqa+c5UMfdLNXqLz+1vlqUAr9dE2jcfl0wgroQBfpyuLRk/z1phNizF4S8oEAuavFeFUoW2PhFQQ+rqTLMfHvuGtGMuSZx2KT1CNpFT98aJ1ptY56kr106HRoXMeGj8wSHh+Oj1mfH8m1jGhvnm6ovrhw4xeKk77zd8QXzT4BxAffylLIgKAlHSZ3ZJvaGz6yveIhvjm8GpcHYYNdyOmCGb2SVUU7DsShjNXsgMEghG0w/Sp/nxaSrvPoP5g1QwsRjnfQJozwSCdw8sk7dcd0fil3YUS/jvR5YTtUNo5lYHw6D3DsjsRSNhVB+a2qzpt1yKwKHNdp4qImlBgAVSsOV9IpG/94dXdCJuhcu7D0ubrJeu5cWRiMSzBVcV4ZEE6mPOTZX7QyRug4Q2BjiRVT3AHzj486sjgySgPiIcnlrVBLh7h/QYTtLXHkmZDeoqbLq4HnEqNOos1c6njJgQh/4vXJiqy0MXMQOThNipDmXv9I185O+yC2f3lLEO0Tay66NZEyiLNePemJKSIdwO9O5ZtntuUkG6NTW3LNfdqVZ1eCRhFZJVSYOruvNvEfRkJupBy3Z8hSEMHL9kaL85lzU9YPUST3gTYnG+8gClZWFN+P1XHbFbWdu9IgF8s35HQzv0w6dFMy2EviowOTkzaKUULZ3B5njwvtUsHozl+XYShmK7Ltd63OEQm68rvRvAGkcYv1IEAR88cFJGkaA+tmVepKv5vLB2TgzaQMyAhcKr7620x9uboXZsauRhisYxRHzQKJUIXYEsnIWs40CelyTZ2n6CRCn7Faj1jr7iez7I/N/pUHAdD/mH6mAJ3ZTHu23WaFMcpDuPL1gw2Oo7OBFX/vBB/er9JcFFAN6Q1x80UdCdGdyqwwbekDud5uWuFSNOZcrdb3mKRzbr+7IIVjhHoqCGUZ5gtF5toZSvOic/RO1Tp84e7/t4xclsdqZxx1bLpf2AjfHoTka9rzfWr4uO+FQCHXxHN9sJCNWQe4Cu4lMZ/ZiHzFeA=="

                                                                          //console.log(encryptedCardNumber)
                                                                          let data1 = JSON.stringify(
                                                                            {
                                                                            "preferredLanguage":"en",
                                                                            "termsAndCondition":false,
                                                                            "deviceId":`${deviceID}`,
                                                                            "cartId":`${cartID}`,
                                                                            "encryptedCardNumber":`${encryptedCardNumber}`,
                                                                            "encryptedExpiryMonth":`${encryptedExpiryMonth}`,
                                                                            "encryptedSecurityCode":`${encryptedCVC}`,
                                                                            "encryptedExpiryYear": `${encryptedExpiryYear}`,
                                                                            "paymentMethod":"CREDITCARD",
                                                                            "returnUrl":"https://www.footlocker.com/adyen/checkout",
                                                                            "browserInfo":
                                                                                {
                                                                                "screenWidth": 1920,
                                                                                "screenHeight": 1080,
                                                                                "colorDepth": 24,
                                                                                "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
                                                                                "timeZoneOffset": 240,
                                                                                "language": "en-US",
                                                                                "javaEnabled": false
                                                                              }
                                                                            }
                                                                          );
                                                                          let config1 = {
                                                                            method: 'post',
                                                                            url: `https://www.footlocker.com/api/v2/users/orders?timestamp=${timestamp()}`,
                                                                            headers: {
                                                                              'Fastly-Orig-Accept-Encoding':'gzip, deflate',
                                                                              'Fastly-Client-IP':'213.165.190.50',
                                                                              'X-Timer':'S1542133246.162954,VS0',
                                                                              'X-Varnish':'2429674486',
                                                                              'X-Varnish':'1846707052',
                                                                              'Fastly-Client':'1',
                                                                              'Fastly-FF':'4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1543-HHN, 4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1544-HHN',
                                                                              'CDN-Loop':'Fastly',

                                                                              'Host': 'www.footlocker.com',
                                                                              'Accept-Encoding':'gzip, deflate, br',
                                                                              'accept-language': 'en-US,en;q=0.9',
                                                                              'connection': 'keep-alive',
                                                                              'authority': 'www.footlocker.com',
                                                                              'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
                                                                              'x-csrf-token': `${token}`,
                                                                              'sec-ch-ua-mobile': '?0',
                                                                              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
                                                                              'content-type': 'application/json',
                                                                              'accept': 'application/json',
                                                                              'x-fl-request-id': `${uuidv4()}`,
                                                                              'origin': 'https://www.footlocker.com',
                                                                              'sec-fetch-site': 'same-origin',
                                                                              'sec-fetch-mode': 'cors',
                                                                              'sec-fetch-dest': 'empty',
                                                                              'referer': 'https://www.footlocker.com/checkout',
                                                                              'accept-language': 'en-US,en;q=0.9',
                                                                            },
                                                                            data : data1,
                                                                            jar: cookieJar,
                                                                            withCredentials: true,
                                                                            proxy: fineProxy
                                                                          };
                                                                          //console.log(cookieJar)
                                                                          try{
                                                                            ress = await axios(config1)
                                                                            console.log(ress)
                                                                           //console.log(res.status)
                                                                          }catch(err) {
                                                                            //console.log(res)
                                                                            stamp(`[Task ${cluster.worker.id}]`,"Processing....",'pos',false,productName,size)
                                                                            //console.log(err.response.data)
                                                                            //console.log(cookieJar)
                                                                            //console.log(res.status)
                                                                            console.log(err.response.data)
                                                                            if(err.response.status == 200) {
                                                                              stamp(`[Task ${cluster.worker.id}]`,'Successful Checkout','pos',err.response.status,productName,size)
                                                                              //console.log(res.data)
                                                                              let completeTime = perf.stop()
                                                                              let time = completeTime.time / 1000 + 's'
                                                                              //console.log(completeTime)
                                                                              //console.log(time)
                                                                              if (rawProxy == '') {
                                                                                proxyUsed = 'localhost'
                                                                              }
                                                                              else{
                                                                                proxyUsed = rawProxy
                                                                              }

                                                                              async function privateSuccessWebhook(){
                                                                                let data = JSON.stringify({
                                                                                  "content": null,
                                                                                  "embeds": [
                                                                                    {
                                                                                      "title": "Successful Checkout",
                                                                                      "color": 4264447,
                                                                                      "fields": [
                                                                                        {
                                                                                          "name": "Site",
                                                                                          "value": `${site}`
                                                                                        },
                                                                                        {
                                                                                          "name": "SKU",
                                                                                          "value": `${sku}`
                                                                                        },
                                                                                        {
                                                                                          "name": "Link",
                                                                                          "value": `https://www.footlocker.com/product/~/${sku}.html`
                                                                                        },
                                                                                        {
                                                                                          "name": "Products",
                                                                                          "value": `${productName}`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Size",
                                                                                          "value": `${size}`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Profile",
                                                                                          "value": `||${profile.name}||`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Proxy",
                                                                                          "value": `||${proxyUsed}||`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Email",
                                                                                          "value": `||${profile.Email}||`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Price",
                                                                                          "value": `${price}`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Time",
                                                                                          "value": `${time}`
                                                                                        }
                                                                                      ],
                                                                                      "footer": {
                                                                                        "text": "Quasar AIO | V-ALPHA",
                                                                                        "icon_url": "https://i.ibb.co/GQpFDXw/quasar-aio.png"
                                                                                      },
                                                                                      "thumbnail": {
                                                                                        "url": image
                                                                                      }
                                                                                    }
                                                                                  ],
                                                                                  "username": "Quasar AIO",
                                                                                  "avatar_url": "https://i.ibb.co/GQpFDXw/quasar-aio.png"
                                                                                });

                                                                                let config = {
                                                                                  method: 'post',
                                                                                  url: userhook,
                                                                                  headers: {
                                                                                    'Content-Type': 'application/json',
                                                                                    'Cookie': '__dcfduid=b1fdca35b059486eba2d20ea0fa84bc5'
                                                                                  },
                                                                                  data : data,
                                                                                  proxy: fineProxy
                                                                                };
                                                                                try {
                                                                                  res = await axios(config)
                                                                                  if(res.status == 204) {
                                                                                    null
                                                                                  }
                                                                                  else {
                                                                                    console.log('Unknown Webhook Error')
                                                                                  }
                                                                                }
                                                                                catch(err) {
                                                                                  if(res.status == 400) {
                                                                                    Console.log('Webhook Send Error')
                                                                                  }
                                                                                  else {
                                                                                    console.log('Unknown Webhook Error')
                                                                                  }
                                                                                }
                                                                              }
                                                                              privateSuccessWebhook()

                                                                              async function publicSuccessWebhook() {
                                                                                let data = JSON.stringify({
                                                                                  "content": null,
                                                                                  "embeds": [
                                                                                    {
                                                                                      "title": "Successful Checkout",
                                                                                      "color": 4264447,
                                                                                      "fields": [
                                                                                        {
                                                                                          "name": "Site",
                                                                                          "value": `${site}`
                                                                                        },
                                                                                        {
                                                                                          "name": "SKU",
                                                                                          "value": `${sku}`
                                                                                        },
                                                                                        {
                                                                                          "name": "Link",
                                                                                          "value": `https://www.footlocker.com/product/~/${sku}.html`
                                                                                        },
                                                                                        {
                                                                                          "name": "Products",
                                                                                          "value": `${productName}`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Size",
                                                                                          "value":`${size}`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Price",
                                                                                          "value": `${price}`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Time",
                                                                                          "value": `${time}`
                                                                                        }
                                                                                      ],
                                                                                      "footer": {
                                                                                        "text": "Quasar AIO | V-ALPHA",
                                                                                        "icon_url": "https://i.ibb.co/GQpFDXw/quasar-aio.png"
                                                                                      },
                                                                                      "thumbnail": {
                                                                                        "url": image
                                                                                      }
                                                                                    }
                                                                                  ],
                                                                                  "username": "Quasar AIO",
                                                                                  "avatar_url": "https://i.ibb.co/GQpFDXw/quasar-aio.png"
                                                                                });

                                                                                let config = {
                                                                                  method: 'post',
                                                                                  url: userhook,
                                                                                  //url: publichook,
                                                                                  headers: {
                                                                                    'Content-Type': 'application/json',
                                                                                    'Cookie': '__dcfduid=b1fdca35b059486eba2d20ea0fa84bc5'
                                                                                  },
                                                                                  data : data
                                                                                };
                                                                                try {
                                                                                  res = await axios(config)
                                                                                  if(res.status == 204) {
                                                                                    null
                                                                                  }
                                                                                  else {
                                                                                    console.log('Unknown Webhook Error')
                                                                                  }
                                                                                }
                                                                                catch(err) {
                                                                                  if(res.status == 400) {
                                                                                    Console.log('Webhook Send Error')
                                                                                  }
                                                                                  else {
                                                                                    console.log('Unknown Webhook Error')
                                                                                  }
                                                                                }
                                                                              }
                                                                              publicSuccessWebhook()
                                                                            }
                                                                            else if (err.response.status == 400 ) {
                                                                              stamp(`[Task ${cluster.worker.id}]`,"Decline",'neg',err.response.status,productName,size)
                                                                              //setTimeout(() => { setBilling() }, errDelay)
                                                                              //console.log(res.data)
                                                                              let completeTime = perf.stop()
                                                                              let time = completeTime.time / 1000 + 's'
                                                                              //console.log(completeTime)
                                                                              //console.log(time)
                                                                              if (rawProxy == '') {
                                                                                proxyUsed = 'localhost'
                                                                              }
                                                                              else{
                                                                                proxyUsed = rawProxy
                                                                              }

                                                                             async function declineWebhook(){
                                                                                let data = JSON.stringify({
                                                                                  "content": null,
                                                                                  "embeds": [
                                                                                    {
                                                                                      "title": "Decline",
                                                                                      "color": 16711726,
                                                                                      "fields": [
                                                                                        {
                                                                                          "name": "Site",
                                                                                          "value": `${site}`
                                                                                        },
                                                                                        {
                                                                                          "name": "SKU",
                                                                                          "value": `${sku}`
                                                                                        },
                                                                                        {
                                                                                          "name": "Link",
                                                                                          "value": `https://www.footlocker.com/product/~/${sku}.html`
                                                                                        },
                                                                                        {
                                                                                          "name": "Products",
                                                                                          "value": `${productName}`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Size",
                                                                                          "value": `${size}`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Profile",
                                                                                          "value": `||${profile.name}||`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Proxy",
                                                                                          "value": `||${proxyUsed}||`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Email",
                                                                                          "value": `||${profile.Email}||`,
                                                                                          "inline": true
                                                                                        },
                                                                                        {
                                                                                          "name": "Price",
                                                                                          "value": `${price}`,
                                                                                          "inline": true
                                                                                        }
                                                                                      ],
                                                                                      "footer": {
                                                                                        "text": "Quasar AIO | V-ALPHA",
                                                                                        "icon_url": "https://i.ibb.co/GQpFDXw/quasar-aio.png"
                                                                                      },
                                                                                      "thumbnail": {
                                                                                        "url": image
                                                                                      }
                                                                                    }
                                                                                  ],
                                                                                  "username": "Quasar AIO",
                                                                                  "avatar_url": "https://i.ibb.co/GQpFDXw/quasar-aio.png"
                                                                                });

                                                                                let config = {
                                                                                  method: 'post',
                                                                                  url: 'https://discordapp.com/api/webhooks/766055188406337546/vUzGtrH1HxIHvNhQrd6VFqVvuRgBoRGfN1_5mUK1gdpevoW-r1huyRxMQlvXcrWbBn_8',
                                                                                  headers: {
                                                                                    'Content-Type': 'application/json',
                                                                                    'Cookie': '__dcfduid=b1fdca35b059486eba2d20ea0fa84bc5'
                                                                                  },
                                                                                  data : data
                                                                                };
                                                                                try {
                                                                                  res = await axios(config)
                                                                                  if(res.status == 204) {
                                                                                    null
                                                                                  }
                                                                                  else {
                                                                                    console.log('Unknown Webhook Error')
                                                                                  }
                                                                                }
                                                                                catch(err) {
                                                                                  if(res.status == 400) {
                                                                                    Console.log('Webhook Send Error')
                                                                                  }
                                                                                  else {
                                                                                    console.log('Unknown Webhook Error')
                                                                                  }
                                                                                }

                                                                              }
                                                                              declineWebhook()
                                                                            }
                                                                            else if (res.status == 404 ) {
                                                                              stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',res.status,productName,size)
                                                                              setTimeout(() => { setBilling() }, errDelay)
                                                                            }
                                                                            else if (res.status == 500) {
                                                                              stamp(`[Task ${cluster.worker.id}]`,"Dead Site",'neg',res.status,productName,size)
                                                                              setTimeout(() => { setBilling() }, errDelay)
                                                                            }
                                                                            else if (res.status == 429) {
                                                                              stamp(`[Task ${cluster.worker.id}]`,"Rate Limited",'neg',res.status,productName,size)
                                                                              setTimeout(() => { setBilling() }, errDelay)
                                                                            }
                                                                            else if (res.status == 403) {
                                                                              stamp(`[Task ${cluster.worker.id}]`,"Proxy Banned",'neg',res.status,productName,size)
                                                                              setTimeout(() => { setBilling() }, errDelay)
                                                                            }
                                                                            else if (res.status == 401) {
                                                                              stamp(`[Task ${cluster.worker.id}]`,"Bad Proxy",'neg',res.status,productName,size)
                                                                              setTimeout(() => { setBilling() }, errDelay)
                                                                            }
                                                                            else {
                                                                              stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',res.status,productName,size)
                                                                              setTimeout(() => { setBilling() }, errDelay)
                                                                            }


                                                                          }
                                                                        }
                                                                        sendPayment()

                                                                      }
                                                                      else {
                                                                        stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',res.status,productName,size)
                                                                        setTimeout(() => { setBilling() }, errDelay)
                                                                      }
                                                                    }
                                                                    catch(err) {
                                                                     //console.log(res)
                                                                      if(res.status == 200) {
                                                                        stamp(`[Task ${cluster.worker.id}]`,'Sent Billing','spec',res.status,productName,size)
                                                                        console.log(res.data)


                                                                      }
                                                                      else if (res.status == 400 ) {
                                                                        stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',res.status,productName,size)
                                                                        setTimeout(() => { setBilling() }, errDelay)

                                                                      }
                                                                      else if (res.status == 404 ) {
                                                                        stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',res.status,productName,size)
                                                                        setTimeout(() => { setBilling() }, errDelay)
                                                                      }
                                                                      else if (res.status == 500) {
                                                                        stamp(`[Task ${cluster.worker.id}]`,"Dead Site",'neg',res.status,productName,size)
                                                                        setTimeout(() => { setBilling() }, errDelay)
                                                                      }
                                                                      else if (res.status == 429) {
                                                                        stamp(`[Task ${cluster.worker.id}]`,"Rate Limited",'neg',res.status,productName,size)
                                                                        setTimeout(() => { setBilling() }, errDelay)
                                                                      }
                                                                      else if (res.status == 403) {
                                                                        stamp(`[Task ${cluster.worker.id}]`,"Proxy Banned",'neg',res.status,productName,size)
                                                                        setTimeout(() => { setBilling() }, errDelay)
                                                                      }
                                                                      else if (res.status == 401) {
                                                                        stamp(`[Task ${cluster.worker.id}]`,"Bad Proxy",'neg',res.status,productName,size)
                                                                        setTimeout(() => { setBilling() }, errDelay)
                                                                      }
                                                                      else {
                                                                        stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',res.status,productName,size)
                                                                        setTimeout(() => { setBilling() }, errDelay)
                                                                      }
                                                                    }
                                                                  }
                                                                  setBilling()

                                                              }
                                                              else {
                                                                stamp(`[Task ${cluster.worker.id}]`,"Unknown Error2",'neg',res.status,productName,size)
                                                                setTimeout(() => { setShipping() }, errDelay)
                                                            }
                                                            }
                                                            catch(err) {
                                                               if (res.status == 400 ) {
                                                                stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',res.status,productName,size)
                                                                setTimeout(() => { setShipping() }, errDelay)
                                                              }
                                                              else if (res.status == 404 ) {
                                                                stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',res.status,productName,size)
                                                                setTimeout(() => { setShipping() }, errDelay)
                                                              }
                                                              else if (res.status == 500) {
                                                                stamp(`[Task ${cluster.worker.id}]`,"Dead Site",'neg',res.status,productName,size)
                                                                setTimeout(() => { setShipping() }, errDelay)
                                                              }
                                                              else if (res.status == 429) {
                                                                stamp(`[Task ${cluster.worker.id}]`,"Rate Limited",'neg',res.status,productName,size)
                                                                setTimeout(() => { setShipping() }, errDelay)
                                                              }
                                                              else if (res.status == 403) {
                                                                stamp(`[Task ${cluster.worker.id}]`,"Proxy Banned",'neg',res.status,productName,size)
                                                                setTimeout(() => { setShipping() }, errDelay)
                                                              }
                                                              else if (res.status == 401) {
                                                                stamp(`[Task ${cluster.worker.id}]`,"Bad Proxy",'neg',res.status,productName,size)
                                                                setTimeout(() => { setShipping() }, errDelay)
                                                              }
                                                              else {
                                                                  stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',res.status,productName,size)
                                                                  console.log(res)
                                                                  setTimeout(() => { setShipping() }, errDelay)
                                                              }
                                                            }
                                                          }
                                                          setShipping()

                                                        }
                                                        else {
                                                          stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',res.status,productName,size)
                                                          setTimeout(() => { verifyAddress() }, errDelay)
                                                        }
                                                      }
                                                      catch{
                                                        /*
                                                        if(res.status == 200) {
                                                          stamp('Verified Address','spec',res.status,productName,size)
                                                          let postalCode = res.data.suggestedAddresses[0].postalCode
                                                          //console.log(cookieJar)



                                                        }
                                                        else */ if (res.status == 400 ) {
                                                          stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',res.status,productName,size)
                                                          setTimeout(() => { verifyAddress() }, errDelay)
                                                        }
                                                        else if (res.status == 404 ) {
                                                          stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',res.status,productName,size)
                                                          setTimeout(() => { verifyAddress() }, errDelay)
                                                        }
                                                        else if (res.status == 500) {
                                                          stamp(`[Task ${cluster.worker.id}]`,"Dead Site",'neg',res.status,productName,size)
                                                          setTimeout(() => { verifyAddress() }, errDelay)
                                                        }
                                                        else if (res.status == 429) {
                                                          stamp(`[Task ${cluster.worker.id}]`,"Rate Limited",'neg',res.status,productName,size)
                                                          setTimeout(() => { verifyAddress() }, errDelay)
                                                        }
                                                        else if (res.status == 403) {
                                                          stamp(`[Task ${cluster.worker.id}]`,"Proxy Banned",'neg',res.status,productName,size)
                                                          setTimeout(() => { verifyAddress() }, errDelay)
                                                        }
                                                        else if (res.status == 401) {
                                                          stamp(`[Task ${cluster.worker.id}]`,"Bad Proxy",'neg',res.status,productName,size)
                                                          setTimeout(() => { verifyAddress() }, errDelay)
                                                        }

                                                      }
                                                    }
                                                    verifyAddress()

                                                  }
                                                  else {
                                                    stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',err.response.status,productName,size)
                                                    setTimeout(() => { setEmail() }, errDelay)
                                                  }
                                                }
                                                catch(err) {

                                                  if(res.status == 200) {
                                                    stamp(`[Task ${cluster.worker.id}]`,'Set Email','spec',res.status,productName,size)



                                                  }
                                                   else if (res.status == 400 ) {
                                                    stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',res.status,productName,size)
                                                    setTimeout(() => { setEmail() }, errDelay)
                                                  }
                                                  else if (res.status == 404 ) {
                                                    stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',res.status,productName,size)
                                                    setTimeout(() => { setEmail() }, errDelay)
                                                  }
                                                  else if (res.status == 500) {
                                                    stamp(`[Task ${cluster.worker.id}]`,"Dead Site",'neg',res.status,productName,size)
                                                    setTimeout(() => { setEmail() }, errDelay)
                                                  }
                                                  else if (res.status == 429) {
                                                    stamp(`[Task ${cluster.worker.id}]`,"Rate Limited",'neg',res.status,productName,size)
                                                    setTimeout(() => { setEmail() }, errDelay)
                                                  }
                                                  else if (res.status == 403) {
                                                    stamp(`[Task ${cluster.worker.id}]`,"Proxy Banned",'neg',res.status,productName,size)
                                                    setTimeout(() => { setEmail() }, errDelay)
                                                  }
                                                  else if (res.status == 401) {
                                                    stamp(`[Task ${cluster.worker.id}]`,"Bad Proxy",'neg',res.status,productName,size)
                                                    setTimeout(() => { setEmail() }, errDelay)
                                                  }
                                                  else {
                                                    stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',res.status,productName,size)
                                                    setTimeout(() => { setEmail() }, errDelay)
                                                  }
                                                }
                                              }
                                              setEmail()
                                            }
                                            else if (err.response.status == 404 ) {
                                              stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',err.response.status,productName,size)
                                              setTimeout(() => { grabNewCSRF() }, errDelay)
                                            }
                                            else if (err.response.status == 500) {
                                              stamp(`[Task ${cluster.worker.id}]`,"Dead Site",'neg',err.response.status,productName,size)
                                              setTimeout(() => { grabNewCSRF() }, errDelay)
                                            }
                                            else if (err.response.status == 429) {
                                              stamp(`[Task ${cluster.worker.id}]`,"Rate Limited",'neg',err.response.status,productName,size)
                                              setTimeout(() => { grabNewCSRF() }, errDelay)
                                            }
                                            else if (err.response.status == 403) {
                                              stamp(`[Task ${cluster.worker.id}]`,"Proxy Banned",'neg',err.response.status,productName,size)
                                              console.log(err.response)
                                              setTimeout(() => { grabNewCSRF() }, errDelay)
                                            }
                                            else if (err.response.status == 401) {
                                              stamp(`[Task ${cluster.worker.id}]`,"Bad Proxy",'neg',err.response.status,productName,size)
                                              setTimeout(() => { grabNewCSRF() }, errDelay)
                                            }
                                            else {
                                              stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',err.response.status,productName,size)
                                              setTimeout(() => { grabNewCSRF() }, errDelay)
                                            }
                                          }
                                          catch(err){

                                          }
                                       }
                                       grabNewCSRF()

                                    }
                                    else {
                                      stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',err.response.status,productName,size)
                                      setTimeout(() => { ATC() }, errDelay)
                                    }
                                }
                                catch(err){
                                  //console.log(err.response)
                                   if (err.response.status == 400 ) {
                                    stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (err.response.status == 404 ) {
                                    stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (err.response.status == 500) {
                                    stamp(`[Task ${cluster.worker.id}]`,"Dead Site",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (err.response.status == 429) {
                                    stamp(`[Task ${cluster.worker.id}]`,"Rate Limited",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (err.response.status == 403) {
                                      stamp(`[Task ${cluster.worker.id}]`,`Caught By Datadome! Captcha - Solving....`,'neg',err.response.status,productName,size)
                                    //console.log(err.response)
                                    setTimeout(() => {

                                      async function findPuzzlePosition (page) {
                                        let images = await page.$$eval('.geetest_canvas_img canvas', canvases => canvases.map(canvas => canvas.toDataURL().replace(/^data:image\/png;base64,/, '')))

                                        await fs.writeFile(`./puzzle.png`, images[1], 'base64')

                                        let srcPuzzleImage = await Jimp.read('./puzzle.png')
                                        let srcPuzzle = cv.matFromImageData(srcPuzzleImage.bitmap)
                                        let dstPuzzle = new cv.Mat()

                                        cv.cvtColor(srcPuzzle, srcPuzzle, cv.COLOR_BGR2GRAY)
                                        cv.threshold(srcPuzzle, dstPuzzle, 127, 255, cv.THRESH_BINARY)

                                        let kernel = cv.Mat.ones(5, 5, cv.CV_8UC1)
                                        let anchor = new cv.Point(-1, -1)
                                        cv.dilate(dstPuzzle, dstPuzzle, kernel, anchor, 1)
                                        cv.erode(dstPuzzle, dstPuzzle, kernel, anchor, 1)

                                        let contours = new cv.MatVector()
                                        let hierarchy = new cv.Mat()
                                        cv.findContours(dstPuzzle, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)

                                        let contour = contours.get(0)
                                        let moment = cv.moments(contour)

                                        return [Math.floor(moment.m10 / moment.m00), Math.floor(moment.m01 / moment.m00)]
                                    }

                                    async function findDiffPosition (page) {
                                        await await delay(100);

                                        let srcImage = await Jimp.read('./diff.png')
                                        let src = cv.matFromImageData(srcImage.bitmap)

                                        let dst = new cv.Mat()
                                        let kernel = cv.Mat.ones(5, 5, cv.CV_8UC1)
                                        let anchor = new cv.Point(-1, -1)

                                        cv.threshold(src, dst, 127, 255, cv.THRESH_BINARY)
                                        cv.erode(dst, dst, kernel, anchor, 1)
                                        cv.dilate(dst, dst, kernel, anchor, 1)
                                        cv.erode(dst, dst, kernel, anchor, 1)
                                        cv.dilate(dst, dst, kernel, anchor, 1)

                                    cv.cvtColor(dst, dst, cv.COLOR_BGR2GRAY)
                                    cv.threshold(dst, dst, 150, 255, cv.THRESH_BINARY_INV)

                                        let contours = new cv.MatVector()
                                        let hierarchy = new cv.Mat()
                                        cv.findContours(dst, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)

                                        let contour = contours.get(0)
                                        let moment = cv.moments(contour)

                                        return [Math.floor(moment.m10 / moment.m00), Math.floor(moment.m01 / moment.m00)]
                                    }

                                    async function saveSliderCaptchaImages(page) {
                                        //await page.waitForSelector('.tab-item.tab-item-1')
                                        //await page.click('.tab-item.tab-item-1')

                                        await page.waitForSelector('[aria-label="Click to verify"]')
                                        await await delay(1000);

                                        await page.click('[aria-label="Click to verify"]')

                                        await page.waitForSelector('.geetest_canvas_img canvas', { visible: true })
                                        await await delay(1000);
                                        let images = await page.$$eval('.geetest_canvas_img canvas', canvases => {
                                            return canvases.map(canvas => canvas.toDataURL().replace(/^data:image\/png;base64,/, ''))
                                        })

                                        await fs.writeFile(`./captcha.png`, images[0], 'base64')
                                        await fs.writeFile(`./original.png`, images[2], 'base64')
                                    }

                                    async function saveDiffImage() {
                                        const originalImage = await Jimp.read('./original.png')
                                        const captchaImage = await Jimp.read('./captcha.png')

                                        const { width, height } = originalImage.bitmap
                                        const diffImage = new Jimp(width, height)

                                        const diffOptions = { includeAA: true, threshold: 0.2 }

                                        pixelmatch(originalImage.bitmap.data, captchaImage.bitmap.data, diffImage.bitmap.data, width, height, diffOptions)
                                        diffImage.write('./diff.png')
                                    }

                                    async function run () {

                                       //console.log(JSON.stringify(err.response.data.url).replace(/['"]+/g, ''))

                                        const width = 480
                                        const height = 680

                                        const browser = await puppeteer.launch({
                                            headless: false,
                                            defaultViewport: { width: 480, height: 680 },
                                            args: [`--window-size=${width},${height}`]
                                        })

                                        const page = await browser.newPage()

                                        await page.goto(`${JSON.stringify(err.response.data.url).replace(/['"]+/g, '')}`, { waitUntil: 'networkidle2' })
                                        //await page.waitForSelector('#__next > header > nav > div.jsx-2691257117.navigation-container > div > div:nth-child(1) > a')
                                        //await page.click('#__next > header > nav > div.jsx-2691257117.navigation-container > div > div:nth-child(1) > a')

                                        await delay(2500);

                                        await saveSliderCaptchaImages(page)
                                        await saveDiffImage()

                                        let [cx, cy] = await findDiffPosition(page)

                                        const sliderHandle = await page.$('.geetest_slider_button')
                                        const handle = await sliderHandle.boundingBox()

                                        let xPosition = handle.x + handle.width / 2
                                        let yPosition = handle.y + handle.height / 2
                                        await page.mouse.move(xPosition, yPosition)
                                        await page.mouse.down()

                                        xPosition = handle.x + cx - handle.width / 2
                                        yPosition = handle.y + handle.height / 3
                                        await page.mouse.move(xPosition, yPosition, { steps: 25 })

                                        await delay(100);

                                        let [cxPuzzle, cyPuzzle] = await findPuzzlePosition(page)

                                        xPosition = xPosition + cx - cxPuzzle
                                        yPosition = handle.y + handle.height / 2
                                        await page.mouse.move(xPosition, yPosition, { steps: 5 })
                                        await page.mouse.up()

                                        await await delay(3000);


                                        await fs.unlink('./original.png')
                                        await fs.unlink('./captcha.png')
                                        await fs.unlink('./diff.png')
                                        await fs.unlink('./puzzle.png')

                                        await browser.close()
                                        await ATC()
                                    }

                                      run()

                                    }, errDelay)
                                  }
                                  else if (err.response.status == 401) {
                                    stamp(`[Task ${cluster.worker.id}]`,"Bad Proxy",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else {
                                    stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }

                                }
                            }
                            ATC()
                        }
                        else {
                          stamp(`[Task ${cluster.worker.id}]`,"Unknown Error #1",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                      }
                      catch(err) {
                         if (err.response.status == 400 ) {
                          stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (err.response.status == 404 ) {
                          stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (err.response.status == 500) {
                          stamp(`[Task ${cluster.worker.id}]`,"Dead Site",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (err.response.status == 429) {
                          stamp(`[Task ${cluster.worker.id}]`,"Rate Limited",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (err.response.status == 403) {
                          stamp(`[Task ${cluster.worker.id}]`,`Proxy Error - ${JSON.stringify(err.response.data)}`,'neg',err.response.status,productName,size)
                          //console.log(err)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (err.response.status == 401) {
                          stamp(`[Task ${cluster.worker.id}]`,"Bad Proxy",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if(err.response.status == undefined) {
                          stamp(`[Task ${cluster.worker.id}]`,"Unknown Error #3",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if(err.response.status == null) {
                          stamp(`[Task ${cluster.worker.id}]`,"Unknown Error #4",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else {
                          stamp(`[Task ${cluster.worker.id}]`,"Unknown Error #2",'neg',err.response.status,productName,size)
                          console.log(err)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                      }
                  }
                  grabCSRF()
              }


        } catch(err) {
           if (err.response.status == 400 ) {
            stamp(`[Task ${cluster.worker.id}]`,"Product Pulled",'neg',err.response.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 404 ) {
            stamp(`[Task ${cluster.worker.id}]`,"Bad Request",'neg',err.response.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 500) {
            stamp(`[Task ${cluster.worker.id}]`,"Dead Site",'neg',err.response.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 429) {
            stamp(`[Task ${cluster.worker.id}]`,"Rate Limited",'neg',err.response.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 403) {
            stamp(`[Task ${cluster.worker.id}]`,"Proxy Banned",'neg',err.response.status,false,false)
            console.log(err)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 401) {
            stamp(`[Task ${cluster.worker.id}]`,"Bad Proxy",'neg',err.response.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 529) {
            stamp(`[Task ${cluster.worker.id}]`,'In Queue....','act',false,false,false)
            setTimeout(() => { findSizes() }, 5000)
          }
          else {
            stamp(`[Task ${cluster.worker.id}]`,"Unknown Error",'neg',err.response.status,false,false)
            console.log(err)
            setTimeout(() => { findSizes() }, errDelay)
          }
        }

    }
    findSizes()
}
//timestamp()

//     multipletasks or multithreading
  if (cluster.isMaster) {

      for (let i = 0; i < task_number; i++) {
      cluster.fork();
      }
        cluster.on('exit', (worker, code, signal) => {
        console.log(`Task ${cluster.worker.id} died`);
          });
        } else {
          main()
    }
