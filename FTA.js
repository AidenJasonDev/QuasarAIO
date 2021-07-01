//Imports
const axios = require('axios-proxy-fix');
const shortid = require('shortid')
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();
const adyenEncrypt = require('node-adyen-encrypt')(18);
const perf = require('execution-time')();
const webhook = require("webhook-discord");
const os = require('os');
const chalk = require('chalk');
const base64 = require('base-64');
const utf8 = require('utf8');

//Variables

let userhook = 'https://discordapp.com/api/webhooks/766055188406337546/vUzGtrH1HxIHvNhQrd6VFqVvuRgBoRGfN1_5mUK1gdpevoW-r1huyRxMQlvXcrWbBn_8'
const publichook = 'https://discord.com/api/webhooks/822240944723853333/4LFZWDU7nOKGdMo1TJyQb4zfZmPrXLYLw7gvlCE5k0Jny0TC0KnvvA9lFUiFuWOWGRrT'

let sku = 622100
let monDelay = 6666
let errDelay = 4444
let resDelay = 5555

let size = 'XL'
let sizelist = size.split(' ')

let fineProxy;
//let rawProxy = 'suec2mlhczrxs.025.npx.is:10581' // FIX THIS
//let rawProxy = 'zj.r.npx.is:1338:nus:3PCwXuX89'
let rawProxy = ''
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

const adyenKey = '10001|E348EBBFF1F0C3FCD819E9433A29D1ED7218D5C48EAFF60F58CE3ADD10F34A3D2FA7FEF3248BFED219534DCC83D45578F24BA9FA870FC4DE900CBCB92E4AB1988F9DCBA93B7392D77E7550B1A9E91F66C79358EAF8808230414A9F3ECB9129F7369E95A462EA99DB52167E4583D06975DE1C28100355B1CEA372B83EDD19DBBFA1A4F1566F656DC8F9D93D4FA5341B4F3D8CA94F56CDF8F666C1D6F4AA077BC998FC3A3F74BED84B34CD6B9888D831B0546272A185F9DA9CF8C09CCDA8344A0F7CE5291D13FE6DF24E5C51FA8E35A0885E7113DB45DB121A54E367E7C9695CE24FE7FCBCA305363B57CFEA8B70DBA192CCD9BC68B2328D3465DD9C2960AEA93F'
const cseInstance = adyenEncrypt.createEncryption(adyenKey);



let profile = {
  "name": "Quasar",
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
  "expiryYear": "27",
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

function delay(func,time) {
     let del =  setInterval(func, time)
    return del
}

function create_request_ID() {
	return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	  let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	  return v.toString(16);
	});
}
const userID = create_request_ID()
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

function stamp(log,type,stat,name,size) {
  if(type === 'pos') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + `[${size}] ` +  log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + `[${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + `[${stat}] ` +  `[${size}] ` +  log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` + `[${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` + `[${stat}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
    
  }
  else if (type === 'neu') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` +  `[${size}] ` +  log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` +  `[${size}] ` +  log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
  }
  else if(type === 'neg'){
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` +  `[${size}] ` +  log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        } 
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
  }
  else if(type === 'spec') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` +  `[${size}] ` +  log)) 
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }
        
      }
    }
  }
  else if(type === 'act') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + `[${size}] ` +   log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + `[${size}] ` +   log))
        }
        
      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }
        
      }
    }
  }
  else if(type === 'custom1') {
    console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + log))
  }
  else if(type === 'custom2') {
    console.log(chalk.magenta('[Footaction] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + log))
  }
  else {
    null
  }
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Main Function

async function main() {
    stamp('Starting....','custom1') //special
    stamp('Selected Proxy: ' + rawProxy,'custom2') //special
    perf.start();
    let carted = 0 
    let declines = 0
    let checkouts = 0
     async function findSizes() {
        stamp('Finding Product....','act',false,false,false)
        let config = {
            method: 'get',
            url: `https://www.footaction.com/api/products/pdp/${sku}?timestamp=${timestamp()}`,
            headers: { 
              'authority': 'www.footaction.com', 
              'accept': 'application/json', 
              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36 OPR/72.0.3815.473', 
              'x-fl-request-id': `${create_request_ID()}`, 
              'sec-fetch-site': 'same-origin', 
              'sec-fetch-mode': 'cors', 
              'sec-fetch-dest': 'empty', 
              'referer': `https://www.footaction.com/product/~/${sku}.html`, 
              'accept-language': 'en-US,en;q=0.9', 
            },
            jar: cookieJar,
            withCredentials: true,
            proxy: fineProxy
            
          };
          
        try {
             res = await axios(config)
             if(res.status == 200) {
              
                 productName = res.data.name
                 stamp('Found Product: ' + productName,'spec',res.status,productName,false)

                
                
                function singleSize() {
                  stamp('Selecting Size....','act',false,productName,false)
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
                                            stamp('Selected Size: ' + size,'spec',false,productName,size)
                                            sizeID = sizes[i].code
    
                                        }
                                    }
                                }
                            }
                        }
                    }
                  }
                  function multiSize() { // FIXXXXX
                    stamp('Selecting Size....','act',false,productName)
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
                                           stamp('Selected Size: ' + size,'spec',productName,size)
                                          sizeID = sizes[i].code
    
                                      } 
    
                                    }
                                }
                            }
                        }
                    }
                  }
                  function randSize() { // FIXXXXX
                    stamp('Selecting Size....','act',false,productName)
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
                                           stamp('Selected Size: ' + size,'spec',productName,size)
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
                  else if (sizelist[0] == 'RA') {
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
                    stamp("Grabbing Token....",'act',false,productName,size)
                    let config = {
                        method: 'get',
                        url: `https://www.footaction.com/api/v3/session?timestamp=${timestamp()}`,
                        headers: { 
                          'authority': 'www.footaction.com', 
                          'accept': 'application/json', 
                          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36 OPR/72.0.3815.473', 
                          'x-fl-request-id': `${create_request_ID()}`, 
                          'sec-fetch-site': 'same-origin', 
                          'sec-fetch-mode': 'cors', 
                          'sec-fetch-dest': 'empty', 
                          'referer': `https://www.footaction.com/product/~/${sku}.html`, 
                          'accept-language': 'en-US,en;q=0.9', 
                          
                        },
                        jar: cookieJar,
                        withCredentials: true,
                        proxy: fineProxy
                      };
                      try{
                        res = await axios(config)
                        if(res.status == 200) {
                            stamp("Grabbed Token",'spec',res.status,productName,size)
                            let token = res.data.data.csrfToken
                            let cartID = res.data.data.cart.cartId
                            async function ATC() {
                                stamp('Adding To Cart....','act',false,productName,size)
                                let data = JSON.stringify({"productQuantity":1,"productId":sizeID});
                                let config = {
                                  method: 'post',
                                  url: `https://www.footaction.com/api/users/carts/current/entries?timestamp=${timestamp()}`,
                                  headers: { 
                                    'authority': 'www.footaction.com', 
                                    'accept': 'application/json', 
                                    'x-csrf-token': `${token}`, 
                                    'x-fl-productid': `${sizeID}`, 
                                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OPR/73.0.3856.400', 
                                    'x-fl-request-id': `${create_request_ID()}`, 
                                    'content-type': 'application/json', 
                                    'origin': 'https://www.footaction.com', 
                                    'sec-fetch-site': 'same-origin', 
                                    'sec-fetch-mode': 'cors', 
                                    'sec-fetch-dest': 'empty', 
                                    'referer': `https://www.footaction.com/product/${ReferID}/${sku}.html`, 
                                    'accept-language': 'en-US,en;q=0.9', 
                                    'cookie': `${cookieJar}`
                                  },
                                  data : data,
                                  jar: cookieJar,
                                  withCredentials: true,
                                  proxy: fineProxy
                                };
                                try {
                                    res = await axios(config)
                                    if(res.status == 200) {
                                        stamp('Carted','spec',res.status,productName,size)
                                        carted++
                                        async function billingOne() {
                                          stamp('Sending Billing 1....','act',false,productName,size)
                                          let data = JSON.stringify({"country":{"isocode": `${profile.Country}`,"name":`${countries[profile.Country]}`},"region":{"countryIso":  `${profile.Country}`,"isocode": `${profile.Country + '-' + profile.State}`,"isocodeShort": `${profile.State}`,"name":`${states[profile.State]}`},"line1":`${profile.Address}`,"line2":`${profile.Apt}`,"postalCode":`${profile.Zip}`,"town":`${profile.City.toUpperCase()}`});
                                          let config = {
                                            method: 'post',
                                            url: `https://www.footaction.com/api/v3/users/addresses/verification?timestamp=${timestamp()}`,
                                            headers: { 
                                              'authority': 'www.footaction.com', 
                                              'pragma': 'no-cache', 
                                              'cache-control': 'no-cache', 
                                              'accept': 'application/json', 
                                              'x-csrf-token': `${token}`, 
                                              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
                                              'x-fl-request-id': `${create_request_ID()}`, 
                                              'content-type': 'application/json', 
                                              'sec-gpc': '1', 
                                              'origin': 'https://www.footaction.com', 
                                              'sec-fetch-site': 'same-origin', 
                                              'sec-fetch-mode': 'cors', 
                                              'sec-fetch-dest': 'empty', 
                                              'referer': 'https://www.footaction.com/checkout', 
                                              'accept-language': 'en-US,en;q=0.9', 
                                              'cookie': `${cookieJar}`
                                            },
                                            jar: cookieJar,
                                             withCredentials: true,
                                            data : data,
                                            proxy: fineProxy
                                            
                                          };
                                          try {
                                            res = await axios(config)
                                            if(res.status == 200) {
                                              stamp('Sent Billing 1','spec',res.status,productName,size)
                                              let postalCode = res.data.suggestedAddresses[0].postalCode
                                              async function billingTwo() {
                                                stamp("Sending Billing 2....",'act',false,productName,size)
                                                let data = JSON.stringify({"shippingAddress":{"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`,"email":false,"phone":`${profile.Phone}`,"country":{"isocode":`${profile.Country}`,"name":`${countries[profile.Country]}`},"id":null,"setAsBilling":true,"region":{"countryIso":`${profile.Country}`,"isocode":`${profile.Country + '-' + profile.State}`,"isocodeShort":`${profile.state}`,"name":`${states[profile.State]}`},"type":"default","LoqateSearch":"","line1":`${profile.Address}`,"postalCode":`${postalCode}`,"town":`${profile.City.toUpperCase()}`,"regionFPO":null,"shippingAddress":true,"recordType":"S"}});
                                                let config = {
                                                  method: 'post',
                                                  url: `https://www.footaction.com/api/users/carts/current/addresses/shipping?timestamp=${timestamp()}`,
                                                  headers: { 
                                                    'authority': 'www.footaction.com', 
                                                    'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"', 
                                                    'accept': 'application/json', 
                                                    'x-csrf-token': `${token}`, 
                                                    'sec-ch-ua-mobile': '?0', 
                                                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 
                                                    'x-fl-request-id': `${create_request_ID}`, 
                                                    'content-type': 'application/json', 
                                                    'origin': 'https://www.footaction.com', 
                                                    'sec-fetch-site': 'same-origin', 
                                                    'sec-fetch-mode': 'cors', 
                                                    'sec-fetch-dest': 'empty', 
                                                    'referer': 'https://www.footaction.com/checkout', 
                                                    'accept-language': 'en-US,en;q=0.9', 
                                                    'cookie': `${cookieJar}`
                                                  },
                                                  jar: cookieJar,
                                                  withCredentials: true,
                                                  data : data,
                                                  proxy: fineProxy
                                                };
                                                try{ 
                                                  res = await axios(config)
                                                }
                                                catch(err) {
                                                  if(res.status == 200) {
                                                    stamp("Sent Billing 2",'spec',res.status,productName,size)

                                                      async function billingThree() {
                                                        stamp("Sending Billing 3....",'act',false,productName,size)
                                                        let data = JSON.stringify({"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`,"email":false,"phone":`${profile.phone}`,"country":{"isocode":`${profile.country}`,"name":`${countries[profile.country]}`},"id":null,"setAsBilling":false,"region":{"countryIso":`${profile.country}`,"isocode":`${profile.Country + '-' + profile.State}`,"isocodeShort":`${profile.state}`,"name":`${states[profile.state]}`},"type":"default","LoqateSearch":"","line1":`${profile.Address}`,"postalCode":`${postalCode}`,"town":`${profile.City.toUpperCase()}`,"regionFPO":null,"shippingAddress":true,"recordType":"S"});
                                                        let config = {
                                                          method: 'post',
                                                          url: `https://www.footaction.com/api/users/carts/current/set-billing?timestamp=${timestamp()}`,
                                                          headers: { 
                                                            'authority': 'www.footaction.com', 
                                                            'pragma': 'no-cache', 
                                                            'cache-control': 'no-cache', 
                                                            'accept': 'application/json', 
                                                            'x-csrf-token': `${token}`, 
                                                            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
                                                            'x-fl-request-id': `${create_request_ID()}`, 
                                                            'content-type': 'application/json', 
                                                            'sec-gpc': '1', 
                                                            'origin': 'https://www.footaction.com', 
                                                            'sec-fetch-site': 'same-origin', 
                                                            'sec-fetch-mode': 'cors', 
                                                            'sec-fetch-dest': 'empty', 
                                                            'referer': 'https://www.footaction.com/checkout', 
                                                            'accept-language': 'en-US,en;q=0.9', 
                                                            'cookie': `${cookieJar}`
                                                          },
                                                          data : data,
                                                          jar: cookieJar,
                                                          withCredentials: true ,
                                                          proxy: fineProxy
                                                        };
                                                        try {
                                                          res = await axios(config) 
                                                        }
                                                        catch(err) {
                                                          if(res.status == 200) {
                                                            stamp('Sent Billing 3','spec',res.status,productName,size)
                                                            async function sendDelivery() {
                                                              stamp("Sending Delivery....",'act',false,productName,size)
                                                              let data = JSON.stringify({"deliveryModeId":"fl-standard"});
                                                              let config = {
                                                                method: 'put',
                                                                url: `https://www.footaction.com/api/users/carts/current/deliverymode?timestamp=${timestamp()}`,
                                                                headers: { 
                                                                  'authority': 'www.footaction.com', 
                                                                  'pragma': 'no-cache', 
                                                                  'cache-control': 'no-cache', 
                                                                  'accept': 'application/json', 
                                                                  'x-csrf-token': `${token}`, 
                                                                  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
                                                                  'x-fl-request-id': `${create_request_ID()}`, 
                                                                  'content-type': 'application/json', 
                                                                  'sec-gpc': '1', 
                                                                  'origin': 'https://www.footaction.com', 
                                                                  'sec-fetch-site': 'same-origin', 
                                                                  'sec-fetch-mode': 'cors', 
                                                                  'sec-fetch-dest': 'empty', 
                                                                  'referer': 'https://www.footaction.com/checkout', 
                                                                  'accept-language': 'en-US,en;q=0.9', 
                                                                  'cookie': `${cookieJar}`
                                                                },
                                                                data : data,
                                                                jar: cookieJar,
                                                                withCredentials: true,
                                                                proxy: fineProxy
                                                              };
                                                              try{ 
                                                                res = await axios(config)
                                                              }
                                                              catch(err) {
                                                                if(res.status == 200) {
                                                                  stamp("Sent Delivery",'spec',res.status,productName,size)

                                                                  async function sendEmail() {
                                                                    stamp("Setting Email....",'act',false,productName,size)
                                                                    let data = JSON.stringify({"email":`${profile.Email}`,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`});
                                                                    let config = {
                                                                      method: 'put',
                                                                      url: `https://www.footaction.com/api/users/carts/current/pickperson?timestamp=${timestamp()}`,
                                                                      headers: { 
                                                                        'authority': 'www.footaction.com', 
                                                                        'pragma': 'no-cache', 
                                                                        'cache-control': 'no-cache', 
                                                                        'accept': 'application/json', 
                                                                        'x-csrf-token': `${token}`, 
                                                                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
                                                                        'x-fl-request-id': `${create_request_ID()}`, 
                                                                        'content-type': 'application/json', 
                                                                        'sec-gpc': '1', 
                                                                        'origin': 'https://www.footaction.com', 
                                                                        'sec-fetch-site': 'same-origin', 
                                                                        'sec-fetch-mode': 'cors', 
                                                                        'sec-fetch-dest': 'empty', 
                                                                        'referer': 'https://www.footaction.com/checkout', 
                                                                        'accept-language': 'en-US,en;q=0.9', 
                                                                        'cookie': `${cookieJar}`
                                                                      },
                                                                      data : data,
                                                                      jar: cookieJar,
                                                                      withCredentials: true,
                                                                      proxy: fineProxy
                                                                    };
                                                                    try{ 
                                                                      res = await axios(config)
                                                                      if(res.status == 200) {
                                                                        stamp("Sent Email",'spec',res.status,productName,size)
                                                                        async function sendPerson() {
                                                                          stamp("Sending Person....",'act',false,productName,size)
                                                                          let data = JSON.stringify({"email":`${profile.Email}`,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`});
                                                                          let config = {
                                                                            method: 'put',
                                                                            url: `https://www.footaction.com/api/users/carts/current/pickperson?timestamp=${timestamp()}`,
                                                                            headers: { 
                                                                              'authority': 'www.footaction.com', 
                                                                              'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"', 
                                                                              'accept': 'application/json', 
                                                                              'x-csrf-token': `${token}`, 
                                                                              'sec-ch-ua-mobile': '?0', 
                                                                              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 
                                                                              'x-fl-request-id': `${create_request_ID()}`, 
                                                                              'content-type': 'application/json', 
                                                                              'origin': 'https://www.footaction.com', 
                                                                              'sec-fetch-site': 'same-origin', 
                                                                              'sec-fetch-mode': 'cors', 
                                                                              'sec-fetch-dest': 'empty', 
                                                                              'referer': 'https://www.footaction.com/checkout', 
                                                                              'accept-language': 'en-US,en;q=0.9', 
                                                                              'cookie': `${cookieJar}`
                                                                            },
                                                                            data : data,
                                                                            jar: cookieJar,
                                                                            withCredentials: true,
                                                                            proxy: fineProxy
                                                                          };
                                                                          try{ 
                                                                            res = await axios(config)
                                                                            if(res.status == 200) {
                                                                              stamp("Sent Person",'spec',res.status,productName,size)
                                                                              async function sendPayment() {
                                                                                stamp("Sending Payment....",'act',false,productName,size)
                                                                                const deviceID = create_request_ID()
                                                                                cseInstance.validate(profile.cardNumber);
                                                                                cseInstance.validate(profile.Csc);
                                                                                cseInstance.validate(profile.expiryMonth);
                                                                                cseInstance.validate(profile.expiryYear);
                                                                                cseInstance.validate(deviceID);
                                                                                let encryptedCardNumber = cseInstance.encrypt(adyenKey, profile.cardNumber)
                                                                                let encryptedCVC = cseInstance.encrypt(adyenKey, profile.Csc)
                                                                                let encryptedExpiryMonth = cseInstance.encrypt(adyenKey, profile.expiryMonth)
                                                                                let encryptedExpiryYear = cseInstance.encrypt(adyenKey, profile.expiryYear)
                                                                                let bytes = utf8.encode(deviceID);
                                                                                let encodedDeviceID = base64.encode(bytes);
                                                                                //console.log(encryptedCardNumber)
                                                                                let data = JSON.stringify({"preferredLanguage":"en","termsAndCondition":false,"deviceId":`${encodedDeviceID}`,"cartId":`${cartID}`,"encryptedCardNumber":`${encryptedCardNumber}`,"encryptedExpiryMonth":`${encryptedExpiryMonth}`,"encryptedSecurityCode":`${encryptedCVC}`,"encryptedExpiryYear": `${encryptedExpiryYear}`, "paymentMethod":"CREDITCARD","returnUrl":"https://www.footaction.com/adyen/checkout","browserInfo": {"screenWidth": 1920,"screenHeight": 1080,"colorDepth": 24,"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36","timeZoneOffset": 240,"language": "en-US","javaEnabled": false}});                                                                              
                                                                                let config = {
                                                                                  method: 'post',
                                                                                  url: `https://www.footaction.com/api/v2/users/orders?timestamp=${timestamp()}`,
                                                                                  headers: { 
                                                                                    'authority': 'www.footaction.com', 
                                                                                    'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"', 
                                                                                    'accept': 'application/json', 
                                                                                    'x-csrf-token':   `${token}`, 
                                                                                    'sec-ch-ua-mobile': '?0', 
                                                                                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 
                                                                                    'x-fl-request-id': `${create_request_ID()}`, 
                                                                                    'content-type': 'application/json', 
                                                                                    'origin': 'https://www.footaction.com', 
                                                                                    'sec-fetch-site': 'same-origin', 
                                                                                    'sec-fetch-mode': 'cors', 
                                                                                    'sec-fetch-dest': 'empty', 
                                                                                    'referer': 'https://www.footaction.com/checkout', 
                                                                                    'accept-language': 'en-US,en;q=0.9', 
                                                                                    'cookie': `${cookieJar}`
                                                                                  },
                                                                                  data : data,
                                                                                  jar: cookieJar,
                                                                                  withCredentials: true,
                                                                                  proxy: fineProxy
                                                                                };
                                                                                try{ 
                                                                                  res = await axios(config)
                                                                                }
                                                                                catch(err) {
                                                                                  stamp("Processing....",'pos',false,productName,size)
                                                                                  console.log(res.data)
                                                                                  console.log(res.status)
                                                                                }
                                                                              }
                                                                              sendPayment()
                                                                            }
                                                                            else {
                                                                              stamp("Unknown Error",'neg',res.status,productName,size)
                                                                              setTimeout(() => { sendPerson() }, errDelay)
                                                                            }

                                                                          }
                                                                          catch(err) {
                                                                            if (res.status == 400 ) {
                                                                              stamp("Bad Request",'neg',res.status,productName,size)
                                                                              setTimeout(() => { sendPerson() }, errDelay)
                                                                            }
                                                                            else if (res.status == 404 ) {
                                                                              stamp("Bad Request",'neg',res.status,productName,size)
                                                                              setTimeout(() => { sendPerson() }, errDelay)
                                                                            }
                                                                            else if (res.status == 500) {
                                                                              stamp("Dead Site",'neg',res.status,productName,size)
                                                                              setTimeout(() => { sendPerson() }, errDelay)
                                                                            }
                                                                            else if (res.status == 429) {
                                                                              stamp("Rate Limited",'neg',res.status,productName,size)
                                                                              setTimeout(() => { sendPerson() }, errDelay)
                                                                            }
                                                                            else if (res.status == 403) {
                                                                              stamp("Proxy Banned",'neg',res.status,productName,size)
                                                                              setTimeout(() => { sendPerson() }, errDelay,size)
                                                                            }
                                                                            else if (res.status == 401) {
                                                                              stamp("Bad Proxy",'neg',res.status,productName,size)
                                                                              setTimeout(() => { sendPerson() }, errDelay)
                                                                            }
                                                                            else {
                                                                              stamp("Unknown Error",'neg',res.status,productName,size)
                                                                              setTimeout(() => { sendPerson() }, errDelay)
                                                                            }
                                                                          }
                                                                        }
                                                                        sendPerson()
                                                                      }
                                                                      else {
                                                                        stamp("Unknown Error",'neg',res.status,productName,size)
                                                                        setTimeout(() => { sendEmail() }, errDelay)
                                                                      }
                                                                    }
                                                                    catch(err) {
                                                                       if (res.status == 400 ) {
                                                                        stamp("Bad Request",'neg',res.status,productName,size)
                                                                        setTimeout(() => { sendEmail() }, errDelay)
                                                                      }
                                                                      else if (res.status == 404 ) {
                                                                        stamp("Bad Request",'neg',res.status,productName,size)
                                                                        setTimeout(() => { sendEmail() }, errDelay)
                                                                      }
                                                                      else if (res.status == 500) {
                                                                        stamp("Dead Site",'neg',res.status,productName)
                                                                        setTimeout(() => { sendEmail() }, errDelay)
                                                                      }
                                                                      else if (res.status == 429) {
                                                                        stamp("Rate Limited",'neg',res.status,productName,size)
                                                                        setTimeout(() => { sendEmail() }, errDelay)
                                                                      }
                                                                      else if (res.status == 403) {
                                                                        stamp("Proxy Banned",'neg',res.status,productName,size)
                                                                        setTimeout(() => { sendEmail() }, errDelay)
                                                                      }
                                                                      else if (res.status == 401) {
                                                                        stamp("Bad Proxy",'neg',res.status,productName,size)
                                                                        setTimeout(() => { sendEmail() }, errDelay)
                                                                      }
                                                                      else {
                                                                        stamp("Unknown Error",'neg',res.status,productName,size)
                                                                        setTimeout(() => { sendEmail() }, errDelay)
                                                                      }
                                                                    }
                                                                  }
                                                                  sendEmail()
                                                                }
                                                                else if (res.status == 400 ) {
                                                                  stamp("Bad Request",'neg',res.status,productName,size)
                                                                  setTimeout(() => { sendDelivery() }, errDelay)
                                                                }
                                                                else if (res.status == 404 ) {
                                                                  stamp("Bad Request",'neg',res.status,productName,size)
                                                                  setTimeout(() => { sendDelivery() }, errDelay)
                                                                }
                                                                else if (res.status == 500) {
                                                                  stamp("Dead Site",'neg',res.status,productName,size)
                                                                  setTimeout(() => { sendDelivery() }, errDelay)
                                                                }
                                                                else if (res.status == 429) {
                                                                  stamp("Rate Limited",'neg',res.status,productName,size)
                                                                  setTimeout(() => { sendDelivery() }, errDelay)
                                                                }
                                                                else if (res.status == 403) {
                                                                  stamp("Proxy Banned",'neg',res.status,productName,size)
                                                                  setTimeout(() => { sendDelivery() }, errDelay)
                                                                }
                                                                else if (res.status == 401) {
                                                                  stamp("Bad Proxy",'neg',res.status,productName,size)
                                                                  setTimeout(() => { sendDelivery() }, errDelay)
                                                                }
                                                                else {
                                                                  stamp("Unknown Error",'neg',res.status,productName,size)
                                                                  setTimeout(() => { sendDelivery() }, errDelay)
                                                                }
                                                              }
                                                            }
                                                            sendDelivery()
                                                          }  
                                                           else if (res.status == 400 ) {
                                                            stamp("Bad Request",'neg',res.status,productName,size)
                                                            setTimeout(() => { billingThree() }, errDelay)
                                                          }
                                                          else if (res.status == 404 ) {
                                                            stamp("Bad Request",'neg',res.status,productName,size)
                                                            setTimeout(() => { billingThree() }, errDelay)
                                                          }
                                                          else if (res.status == 500) {
                                                            stamp("Dead Site",'neg',res.status,productName,size)
                                                            setTimeout(() => { billingThree() }, errDelay)
                                                          }
                                                          else if (res.status == 429) {
                                                            stamp("Rate Limited",'neg',res.status,productName,size)
                                                            setTimeout(() => { billingThree() }, errDelay)
                                                          }
                                                          else if (res.status == 403) {
                                                            stamp("Proxy Banned",'neg',res.status,productName,size)
                                                            setTimeout(() => { billingThree() }, errDelay)
                                                          }
                                                          else if (res.status == 401) {
                                                            stamp("Bad Proxy",'neg',res.status,productName,size)
                                                            setTimeout(() => { billingThree() }, errDelay)
                                                          }
                                                          else {
                                                            stamp("Unknown Error",'neg',res.status,productName,size)
                                                            setTimeout(() => { billingThree() }, errDelay)
                                                          }
                                                        }
                                                      }
                                                      billingThree()                       
                                                  }
                                                  else if (res.status == 400 ) {
                                                    stamp("Bad Request",'neg',res.status,productName,size)
                                                    setTimeout(() => { billingTwo() }, errDelay)
                                                  }
                                                  else if (res.status == 404 ) {
                                                    stamp("Bad Request",'neg',res.status,productName,size)
                                                    setTimeout(() => { billingTwo() }, errDelay)
                                                  }
                                                  else if (res.status == 500) {
                                                    stamp("Dead Site",'neg',res.status,productName,size)
                                                    setTimeout(() => { billingTwo() }, errDelay)
                                                  }
                                                  else if (res.status == 429) {
                                                    stamp("Rate Limited",'neg',res.status,productName,size)
                                                    setTimeout(() => { billingTwo() }, errDelay)
                                                  }
                                                  else if (res.status == 403) {
                                                    stamp("Proxy Banned",'neg',res.status,productName,size)
                                                    setTimeout(() => { billingTwo() }, errDelay)
                                                  }
                                                  else if (res.status == 401) {
                                                    stamp("Bad Proxy",'neg',res.status,productName,size)
                                                    setTimeout(() => { billingTwo() }, errDelay)
                                                  }
                                                  else {                                  
                                                      stamp("Unknown Error",'neg',res.status,productName,size)
                                                      setTimeout(() => { billingTwo() }, errDelay)
                                                  } 
                                                }
                                              }
                                              billingTwo()
                                            }
                                            else {
                                              stamp("Unknown Error",'neg',res.status,productName,size)
                                              setTimeout(() => { billingOne() }, errDelay)
                                            }  
                                          }
                                          catch(err) {
                                            if(err.response.status == 500) {
                                              stamp("Dead Site",'neg',res.status,productName,size)
                                              setTimeout(() => { billingOne() }, errDelay)
                                            }else if (res.status == 400 ) {
                                              stamp("Bad Request",'neg',res.status,productName,size)
                                              setTimeout(() => { billingOne() }, errDelay)
                                            }
                                            else if (res.status == 404 ) {
                                              stamp("Bad Request",'neg',res.status,productName,size)
                                              setTimeout(() => { billingOne() }, errDelay)
                                            }
                                            else if (res.status == 500) {
                                              stamp("Dead Site",'neg',res.status,productName,size)
                                              setTimeout(() => { billingOne() }, errDelay)
                                            }
                                            else if (res.status == 429) {
                                              stamp("Rate Limited",'neg',res.status,productName,size)
                                              setTimeout(() => { billingOne() }, errDelay)
                                            }
                                            else if (res.status == 403) {
                                              stamp("Proxy Banned",'neg',res.status,productName,size)
                                              setTimeout(() => { billingOne() }, errDelay)
                                            }
                                            else if (res.status == 401) {
                                              stamp("Bad Proxy",'neg',res.status,productName,size)
                                              setTimeout(() => { billingOne() }, errDelay)
                                            }
                                            else {
                                              stamp("Unknown Error",'neg',res.status,productName,size)
                                              setTimeout(() => { billingOne() }, errDelay)
                                            }  
      
                                          }

                                        }
                                        billingOne()

                                    }
                                    else {
                                      stamp("Unknown Error",'neg',res.status,productName,size)
                                      setTimeout(() => { ATC() }, errDelay)
                                    } 
                                }
                                catch(err){
                                   if (res.status == 400 ) {
                                    stamp("Bad Request",'neg',res.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (res.status == 404 ) {
                                    stamp("Bad Request",'neg',res.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (res.status == 500) {
                                    stamp("Dead Site",'neg',res.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (res.status == 429) {
                                    stamp("Rate Limited",'neg',res.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (res.status == 403) {
                                    stamp("Proxy Banned",'neg',res.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (res.status == 401) {
                                    stamp("Bad Proxy",'neg',res.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }

                                }
                            }
                            ATC()
                        }
                        else {
                          stamp("Unknown Error",'neg',res.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        } 
                      }
                      catch(err) {
                         if (res.status == 400 ) {
                          stamp("Bad Request",'neg',res.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (res.status == 404 ) {
                          stamp("Bad Request",'neg',res.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (res.status == 500) {
                          stamp("Dead Site",'neg',res.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (res.status == 429) {
                          stamp("Rate Limited",'neg',res.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (res.status == 403) {
                          stamp("Proxy Banned",'neg',res.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (res.status == 401) {
                          stamp("Bad Proxy",'neg',res.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else {
                          stamp("Unknown Error",'neg',res.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        } 
                      }
                  }
                  grabCSRF()
              }
                 
    
        } catch(err) {
           if (res.status == 400 ) {
            stamp("Bad Request",'neg',res.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (res.status == 404 ) {
            stamp("Bad Request",'neg',res.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (res.status == 500) {
            stamp("Dead Site",'neg',res.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (res.status == 429) {
            stamp("Rate Limited",'neg',false,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (res.status == 403) {
            stamp("Proxy Banned",'neg',res.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (res.status == 401) {
            stamp("Bad Proxy",'neg',res.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else {
            stamp("Unknown Error",'neg',res.status,false,false)
            console.log(err)
            setTimeout(() => { findSizes() }, errDelay)
          } 
        }
          
    }
    findSizes()
}
main()