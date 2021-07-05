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
const { v4: uuidv4 } = require('uuid');

//Variables

let userhook = 'https://discordapp.com/api/webhooks/766055188406337546/vUzGtrH1HxIHvNhQrd6VFqVvuRgBoRGfN1_5mUK1gdpevoW-r1huyRxMQlvXcrWbBn_8'
const publichook = 'https://discord.com/api/webhooks/822240944723853333/4LFZWDU7nOKGdMo1TJyQb4zfZmPrXLYLw7gvlCE5k0Jny0TC0KnvvA9lFUiFuWOWGRrT'

let sku = '1261042'
let monDelay = 6666
let errDelay = 4444
let resDelay = 5555

let size = '08.0'
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

const adyenKey = '10001|E348EBBFF1F0C3FCD819E9433A29D1ED7218D5C48EAFF60F58CE3ADD10F34A3D2FA7FEF3248BFED219534DCC83D45578F24BA9FA870FC4DE900CBCB92E4AB1988F9DCBA93B7392D77E7550B1A9E91F66C79358EAF8808230414A9F3ECB9129F7369E95A462EA99DB52167E4583D06975DE1C28100355B1CEA372B83EDD19DBBFA1A4F1566F656DC8F9D93D4FA5341B4F3D8CA94F56CDF8F666C1D6F4AA077BC998FC3A3F74BED84B34CD6B9888D831B0546272A185F9DA9CF8C09CCDA8344A0F7CE5291D13FE6DF24E5C51FA8E35A0885E7113DB45DB121A54E367E7C9695CE24FE7FCBCA305363B57CFEA8B70DBA192CCD9BC68B2328D3465DD9C2960AEA93F'
const cseInstance = adyenEncrypt.createEncryption(adyenKey);



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
  "cardNumber": "4012888888881881",
  "expiryMonth": "08",
  "expiryYear": "22",
  "Csc": "143"
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

function stamp(log,type,stat,name,size) {
  if(type === 'pos') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + `[${size}] ` +  log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + `[${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + `[${stat}] ` +  `[${size}] ` +  log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` + `[${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${name}] ` + `[${stat}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
    
  }
  else if (type === 'neu') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` +  `[${size}] ` +  log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` +  `[${size}] ` +  log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.white( `[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
  }
  else if(type === 'neg'){
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` +  `[${size}] ` +  log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        } 
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.red(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
  }
  else if(type === 'spec') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` +  `[${size}] ` +  log)) 
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` +  `[${size}] ` +  log))
        }
        
      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.cyan(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }
        
      }
    }
  }
  else if(type === 'act') {
    if(stat === false) {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + `[${size}] ` +   log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + `[${size}] ` +   log))
        }
        
      }
    }
    else {
      if(name === false) {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${sku}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }
        
      }
      else {
        if(size === false) {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + log))
        }
        else {
          console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.yellow(`[${profile.name}] ` +  `[${name}] ` + `[Status Code: ${stat}] ` + `[${size}] ` +   log))
        }
        
      }
    }
  }
  else if(type === 'custom1') {
    console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + log))
  }
  else if(type === 'custom2') {
    console.log(chalk.magenta('[Footlocker US] ' + getDateTime()) + chalk.green(`[${profile.name}] ` +  `[${sku}] ` + log))
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
    
    stamp('Selected Proxy: ' + rawProxy,'custom2') //special
    perf.start();
    let carted = 0 
    let declines = 0
    let checkouts = 0
     async function findSizes() {
        stamp('Finding Product....','act',false,false,false)
        let config = {
            method: 'get',
            url: `https://www.footlocker.com/api/products/pdp/${sku}?timestamp=${timestamp()}`,
            jar: cookieJar,
            withCredentials: true,
            //proxy: fineProxy
            
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
                        url: `https://www.footlocker.com/api/session?timestamp=${timestamp()}`,
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
                                stamp('Adding To Cart....','act',false,productName,size)
                                let data = JSON.stringify({"productQuantity":1,"productId":`${sizeID}`});
                                let config = {
                                  method: 'post',
                                  url: `https://www.footlocker.com/api/users/carts/current/entries?timestamp=${new Date().getTime()}`,
                                  headers: { 
                                    'Fastly-Orig-Accept-Encoding':'gzip, deflate',
                                    'Fastly-Client-IP':'213.165.190.50',
                                    'X-Timer':'S1542133246.162954,VS0',
                                    'X-Varnish':'2429674486',
                                    'X-Varnish':'1846707052',
                                    'Fastly-Client':'1',
                                    'Fastly-FF':'4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1543-HHN, 4D8lKmpzU60D/ZSEGjdK5r2C9uuDCPe0KsjM4dmJxjg=!HHN!cache-hhn1544-HHN',
                                    'CDN-Loop':'Fastly',
          
                                    'X-Powered-By': 'ZendServer 8.5.0,ASP.NET',
                                    'accept-encoding':'gzip, deflate, br',
                                    'connection': 'keep-alive',
                                    'authority': 'www.footlocker.com', 
                                    'sec-ch-ua': 'Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90',
                                    'x-csrf-token': `${token}`, 
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
                                        stamp('Carted','spec',res.status,productName,size)
                                        carted++
                                        async function setEmail () {
                                          stamp('Setting Email....','act',false,productName,size)
                                          let config = {
                                            method: 'put',
                                            url: `https://www.footlocker.com/api/users/carts/current/email/${profile.Email}?timestamp=${timestamp()}`,
                                            headers: { 
                                              'authority': 'www.footlocker.com', 
                                              'content-length': '0', 
                                              'pragma': 'no-cache', 
                                              'cache-control': 'no-cache', 
                                              'accept': 'application/json', 
                                              'x-csrf-token': `${token}`, 
                                              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
                                              'x-fl-request-id': `${requestID}`, 
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
                                              stamp('Set Email','spec',res.status,productName,size)
                                              //console.log(cookieJar)
                                              
                                              async function verifyAddress() {
                                                stamp('Verifying Address....','act',false,productName,size)
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
                                                    'authority': 'www.footlocker.com', 
                                                    'pragma': 'no-cache', 
                                                    'cache-control': 'no-cache', 
                                                    'accept': 'application/json', 
                                                    'x-csrf-token': `${token}`, 
                                                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
                                                    'x-fl-request-id': `${requestID}`, 
                                                    'content-type': 'application/json', 
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
                                                  data : data,
                                                  jar: cookieJar,
                                                  withCredentials: true,
                                                  proxy: fineProxy
                                                };
                                                try {
                                                  res = await axios(config)
                                                  if(res.status == 200) {
                                                    stamp('Verified Address','spec',res.status,productName,size)
                                                    let postalCode = res.data.suggestedAddresses[0].postalCode
                                                    //console.log(cookieJar)
                                                    async function setShipping() {
                                                      stamp("Sending Shipping....",'act',false,productName,size)
                                                      let data = JSON.stringify({"id": null, "shippingAddress":{"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`,"email":false,"phone":`${profile.Phone}`,"country":{"isocode":`${profile.Country}`,"name":`${countries[profile.Country]}`},"id":null,"setAsBilling":true,"region":{"countryIso":`${profile.Country}`,"isocode":`${profile.Country + '-' + profile.State}`,"isocodeShort":`${profile.state}`,"name":`${states[profile.State]}`},"type":"default","LoqateSearch":"","line1":`${profile.Address}`,"postalCode":`${postalCode}`,"town":`${profile.City.toUpperCase()}`,"regionFPO":null,"shippingAddress":true,"recordType":"S"}});
                                                      let config = {
                                                        method: 'post',
                                                        url: `https://www.footlocker.com/api/users/carts/current/addresses/shipping?timestamp=${timestamp()}`,
                                                        headers: { 
                                                          'authority': 'www.footlocker.com', 
                                                          'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"', 
                                                          'accept': 'application/json', 
                                                          'x-csrf-token': `${token}`, 
                                                          'sec-ch-ua-mobile': '?0', 
                                                          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 
                                                          'x-fl-request-id': `${requestID}`, 
                                                          'content-type': 'application/json', 
                                                          'origin': 'https://www.footlocker.com', 
                                                          'sec-fetch-site': 'same-origin', 
                                                          'sec-fetch-mode': 'cors', 
                                                          'sec-fetch-dest': 'empty', 
                                                          'referer': 'https://www.footlocker.com/checkout', 
                                                          'accept-language': 'en-US,en;q=0.9', 
                                                           //'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1617401400193; s_cc=true; userStatus=guest; userVIP=unknown; _mibhv=anon-1617401401561-53537941_2389; _fbp=fb.1.1617401401594.256099100; _scid=3c562034-f0da-4733-bf81-1dfc7565a230; IR_gbd=footlocker.com; sc.ASP.NET_SESSIONID=p320rrxamsuwuaybvei2buxy; _gcl_au=1.1.44597045.1617401402; sc.UserId=96d14bec-519b-4ad9-b6f0-2a4aa42d6ad1; _ga=GA1.2.2069169940.1617401402; __zlcmid=13PjvWbTaV3N1Zp; ku1-sid=4gDrGUTkTqt0G9-gYOgDd; ku1-vid=a22d59fc-98e6-9a7d-1bdd-ff64905a6718; BVBRANDID=cf449b49-51f3-46fb-98cb-996078e866a0; BVImplmain_site=8001; s_pr_tbe66=1617401411781; cart-guid=33827e48-111c-410c-9278-0781b50c902a; s_pr_tbe67=1617401413871; rskxRunCookie=0; rCookie=ifu5nh80b1hdguw97utpomkn0v1ihh; s_pr_tbe68=1617401420097; _pin_unauth=dWlkPU9EazNNbUppT0RJdE16WmtOUzAwWXpabUxUZ3hZV1V0TTJFNE56azRPRFprT0dKbA; bluecoreNV=false; se=aks; _gid=GA1.2.164826876.1618281495; _sctr=1|1618200000000; xyz_cr_100238_et_100==NaN&cr=100238&et=100; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-1124106680%7CMCIDTS%7C18733%7CMCMID%7C46624749740323894993828667972771871295%7CMCAAMLH-1619055446%7C7%7CMCAAMB-1619055446%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1618457846s%7CNONE%7CMCSYNCSOP%7C411-18727%7CMCCIDH%7C1811066100%7CvVersion%7C5.2.0; JSESSIONID=1ri7maduyf737tx1cwlj7xtb9.fzcexflapipdb618880; s_vs=1; s_lv_s=Less%20than%201%20day; IR_11068=1618450648208%7C2193747%7C1618450648208%7C%7C; IR_PI=2b9221fe-9400-11eb-87eb-0a2fd3f6ad9e%7C1618537048208; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217894a2d0beec3-02b6e917b94762-c3f3568-1fa400-17894a2d0bfe7e%22%2C%22bc_persist_updated%22%3A%201617401449785%2C%22event_lang%22%3A%20%22en%22%2C%22bc_id%22%3A%20925531239%7D; bc_invalidateUrlCache_targeting=1618450648475; _gat_gtag_UA_50007301_5=1; _derived_epik=dj0yJnU9U2JiaVJGdXlrdFNtVEpMTkloam50T01XYi15RmFVNUkmbj0xRzNZX252WTh4VF84dVpzU0phdi1RJm09NyZ0PUFBQUFBR0IzbU5nJnJtPWUmcnQ9QUFBQUFHQjNpTXM; aa_pageHistory=[{"n":"FL: W: Cart","t":"Cart","p":"/cart"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; mbox=PC#f33401da6ba04054b11056c042f2f1a5.34_0#1681695455|session#4fc19ba34e5d4502880bdced92034c08#1618452507; lastRskxRun=1618450657116; _uetsid=4bbfadb09c0111eba57eaf387c1ca869; _uetvid=2b866ef0940011ebbe88ffcd4e28e0e4; s_lv=1618450657238; s_sq=footlockerglobalprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dfl%25253A%252520w%25253A%252520checkout%2526link%253DSAVE%252520%252526%252520CONTINUE%2526region%253Dstep2%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dfl%25253A%252520w%25253A%252520checkout%2526pidt%253D1%2526oid%253Dfunctionan%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DBUTTON; datadome=3cff37NqMcIXALkaaGO~ePlX-RofNBgzcKvkKfXqi~4l9Id7.~lhxGqxI.fnJ-nSec0XpGJfK6I8JLm2pQFMJsUhg1pWscIgFQ3BLIgP.5`
                                    //'cookie': `csrf=${token}`
                                                        },
                                                        jar: cookieJar,
                                                        withCredentials: true,
                                                        data : data,
                                                        proxy: fineProxy
                                                      };
                                                      try{ 
                                                        res = await axios(config)
                                                       let postalCode = res.data.postalCode
                                                        if(res.status == 201) {
                                                          stamp("Sent Shipping",'spec',res.status,productName,size)
                                                          //console.log(cookieJar)
                                                          //console.log(res)
                                                           //console.log(res.data)
                                                           let billingID  = res.data.id
                                                           
                                                           async function setBilling() {
                                                             stamp("Sending Billing....",'act',false,productName,size)
                                                             let data = JSON.stringify({"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`,"email":false,"phone":`${profile.phone}`,"country":{"isocode":`${profile.country}`,"name":`${countries[profile.country]}`},"billingAddress":false,"defaultAddress":false,"id":null,"region":{"countryIso":`${profile.country}`,"isocode":`${profile.Country + '-' + profile.State}`,"isocodeShort":`${profile.state}`,"name":`${states[profile.state]}`},"setAsBilling":false,"shippingAddress":true,"visibleInAddressBook":false,"saveInAddressBook":false,"type":"default","line1":`${profile.Address}`,"postalCode":`${postalCode}`,"town":`${profile.City.toUpperCase()}`,"regionFPO":null,"recordType":"S"});
                                                             let config = {
                                                               method: 'post',
                                                               url: `https://www.footlocker.com/api/users/carts/current/set-billing?timestamp=${timestamp()}`,
                                                               headers: { 
                                                                'authority': 'www.footlocker.com', 
                                                                'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"', 
                                                                'accept': 'application/json', 
                                                                'x-csrf-token': `${token}`, 
                                                                'sec-ch-ua-mobile': '?0', 
                                                                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36', 
                                                                'x-fl-request-id': `${requestID}`, 
                                                                'content-length': '568',
                                                                'content-type': 'application/json', 
                                                                'origin': 'https://www.footlocker.com', 
                                                                'sec-fetch-site': 'same-origin', 
                                                                'sec-fetch-mode': 'cors', 
                                                                'sec-fetch-dest': 'empty', 
                                                                'referer': 'https://www.footlocker.com/checkout', 
                                                                'accept-language': 'en-US,en;q=0.9', 
                                                                //'cookie': 'at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1617401400193; s_cc=true; userStatus=guest; userVIP=unknown; _mibhv=anon-1617401401561-53537941_2389; _fbp=fb.1.1617401401594.256099100; _scid=3c562034-f0da-4733-bf81-1dfc7565a230; IR_gbd=footlocker.com; sc.ASP.NET_SESSIONID=p320rrxamsuwuaybvei2buxy; _gcl_au=1.1.44597045.1617401402; sc.UserId=96d14bec-519b-4ad9-b6f0-2a4aa42d6ad1; _ga=GA1.2.2069169940.1617401402; __zlcmid=13PjvWbTaV3N1Zp; ku1-sid=4gDrGUTkTqt0G9-gYOgDd; ku1-vid=a22d59fc-98e6-9a7d-1bdd-ff64905a6718; BVBRANDID=cf449b49-51f3-46fb-98cb-996078e866a0; BVImplmain_site=8001; s_pr_tbe66=1617401411781; cart-guid=33827e48-111c-410c-9278-0781b50c902a; s_pr_tbe67=1617401413871; rskxRunCookie=0; rCookie=ifu5nh80b1hdguw97utpomkn0v1ihh; s_pr_tbe68=1617401420097; _pin_unauth=dWlkPU9EazNNbUppT0RJdE16WmtOUzAwWXpabUxUZ3hZV1V0TTJFNE56azRPRFprT0dKbA; bluecoreNV=false; se=aks; _gid=GA1.2.164826876.1618281495; _sctr=1|1618200000000; xyz_cr_100238_et_100==NaN&cr=100238&et=100; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-1124106680%7CMCIDTS%7C18733%7CMCMID%7C46624749740323894993828667972771871295%7CMCAAMLH-1619055446%7C7%7CMCAAMB-1619055446%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1618457846s%7CNONE%7CMCSYNCSOP%7C411-18727%7CMCCIDH%7C1811066100%7CvVersion%7C5.2.0; JSESSIONID=1ri7maduyf737tx1cwlj7xtb9.fzcexflapipdb618880; s_vs=1; s_lv_s=Less%20than%201%20day; IR_11068=1618450648208%7C2193747%7C1618450648208%7C%7C; IR_PI=2b9221fe-9400-11eb-87eb-0a2fd3f6ad9e%7C1618537048208; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217894a2d0beec3-02b6e917b94762-c3f3568-1fa400-17894a2d0bfe7e%22%2C%22bc_persist_updated%22%3A%201617401449785%2C%22event_lang%22%3A%20%22en%22%2C%22bc_id%22%3A%20925531239%7D; bc_invalidateUrlCache_targeting=1618450648475; _gat_gtag_UA_50007301_5=1; _derived_epik=dj0yJnU9U2JiaVJGdXlrdFNtVEpMTkloam50T01XYi15RmFVNUkmbj0xRzNZX252WTh4VF84dVpzU0phdi1RJm09NyZ0PUFBQUFBR0IzbU5nJnJtPWUmcnQ9QUFBQUFHQjNpTXM; aa_pageHistory=[{"n":"FL: W: Cart","t":"Cart","p":"/cart"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; mbox=PC#f33401da6ba04054b11056c042f2f1a5.34_0#1681695455|session#4fc19ba34e5d4502880bdced92034c08#1618452507; lastRskxRun=1618450657116; _uetsid=4bbfadb09c0111eba57eaf387c1ca869; _uetvid=2b866ef0940011ebbe88ffcd4e28e0e4; s_lv=1618450657238; s_sq=footlockerglobalprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dfl%25253A%252520w%25253A%252520checkout%2526link%253DSAVE%252520%252526%252520CONTINUE%2526region%253Dstep2%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dfl%25253A%252520w%25253A%252520checkout%2526pidt%253D1%2526oid%253Dfunctionan%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DBUTTON; datadome=3cff37NqMcIXALkaaGO~ePlX-RofNBgzcKvkKfXqi~4l9Id7.~lhxGqxI.fnJ-nSec0XpGJfK6I8JLm2pQFMJsUhg1pWscIgFQ3BLIgP.5'
                                                              },
                                                              jar: cookieJar,
                                                              withCredentials: true,
                                                              data : data,
                                                              proxy: fineProxy
                                                             };
                                                             //console.log(billingID)
                                                             try {
                                                               res = await axios(config) 
                                                               //console.log(res)
                                                             }
                                                             catch(err) {
                                                              //console.log(res)
                                                               if(res.status == 200 || 201) {
                                                                 stamp('Sent Billing','spec',res.status,productName,size)
                                                                 //console.log(res)
                                                                 //console.log(cookieJar)
                                                                 async function sendPayment() {
                                                                   stamp("Sending Payment....",'act',false,productName,size)
                                                                   const deviceID = requestID
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
                                                                   let data = JSON.stringify({"preferredLanguage":"en","termsAndCondition":false,"deviceId":`${encodedDeviceID}`,"cartId":`${cartID}`,"encryptedCardNumber":`${encryptedCardNumber}`,"encryptedExpiryMonth":`${encryptedExpiryMonth}`,"encryptedSecurityCode":`${encryptedCVC}`,"encryptedExpiryYear": `${encryptedExpiryYear}`, "paymentMethod":"CREDITCARD","returnUrl":"https://www.footlocker.com/adyen/checkout","browserInfo": {"screenWidth": 1920,"screenHeight": 1080,"colorDepth": 24,"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36","timeZoneOffset": 240,"language": "en-US","javaEnabled": false}});                                                                              
                                                                   let config = {
                                                                     method: 'post',
                                                                     url: `https://www.footlocker.com/api/v2/users/orders?timestamp=${timestamp()}`,
                                                                     headers: { 
                                                                       'authority': 'www.footlocker.com', 
                                                                       'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"', 
                                                                       'accept': 'application/json', 
                                                                       'x-csrf-token':   `${token}`, 
                                                                       'sec-ch-ua-mobile': '?0', 
                                                                       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 
                                                                       'x-fl-request-id': `${requestID}`, 
                                                                       'content-type': 'application/json', 
                                                                       'origin': 'https://www.footlocker.com', 
                                                                       'sec-fetch-site': 'same-origin', 
                                                                       'sec-fetch-mode': 'cors', 
                                                                       'sec-fetch-dest': 'empty', 
                                                                       'referer': 'https://www.footlocker.com/checkout', 
                                                                       'accept-language': 'en-US,en;q=0.9', 
                                                                       //'cookie': `${cookieJar}`
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
                                                                     console.log(res.status)
                                                                     //console.log(cookieJar)
                                                                     //console.log(res.data.suggestedAddresses)
                                                                   }
                                                                 }
                                                                 sendPayment()
                                                               }  
                                                               else if (res.status == 400 ) {
                                                                 stamp("Bad Request",'neg',res.status,productName,size)
                                                                 setTimeout(() => { setBilling() }, errDelay)
                                                               }
                                                               else if (res.status == 404 ) {
                                                                 stamp("Bad Request",'neg',res.status,productName,size)
                                                                 setTimeout(() => { setBilling() }, errDelay)
                                                               }
                                                               else if (res.status == 500) {
                                                                 stamp("Dead Site",'neg',res.status,productName,size)
                                                                 setTimeout(() => { setBilling() }, errDelay)
                                                               }
                                                               else if (res.status == 429) {
                                                                 stamp("Rate Limited",'neg',res.status,productName,size)
                                                                 setTimeout(() => { setBilling() }, errDelay)
                                                               }
                                                               else if (res.status == 403) {
                                                                 stamp("Proxy Banned",'neg',res.status,productName,size)
                                                                 setTimeout(() => { setBilling() }, errDelay)
                                                               }
                                                               else if (res.status == 401) {
                                                                 stamp("Bad Proxy",'neg',res.status,productName,size)
                                                                 setTimeout(() => { setBilling() }, errDelay)
                                                               }
                                                               else {
                                                                 stamp("Unknown Error",'neg',res.status,productName,size)
                                                                 setTimeout(() => { setBilling() }, errDelay)
                                                               }
                                                             }
                                                           }
                                                           setBilling() 
                                                        }
                                                        else {                                  
                                                          stamp("Unknown Error2",'neg',res.status,productName,size)
                                                          setTimeout(() => { setShipping() }, errDelay)
                                                      } 
                                                      }
                                                      catch(err) {
                                                         if (res.status == 400 ) {
                                                          stamp("Bad Request",'neg',res.status,productName,size)
                                                          setTimeout(() => { setShipping() }, errDelay)
                                                        }
                                                        else if (res.status == 404 ) {
                                                          stamp("Bad Request",'neg',res.status,productName,size)
                                                          setTimeout(() => { setShipping() }, errDelay)
                                                        }
                                                        else if (res.status == 500) {
                                                          stamp("Dead Site",'neg',res.status,productName,size)
                                                          setTimeout(() => { setShipping() }, errDelay)
                                                        }
                                                        else if (res.status == 429) {
                                                          stamp("Rate Limited",'neg',res.status,productName,size)
                                                          setTimeout(() => { setShipping() }, errDelay)
                                                        }
                                                        else if (res.status == 403) {
                                                          stamp("Proxy Banned",'neg',res.status,productName,size)
                                                          setTimeout(() => { setShipping() }, errDelay)
                                                        }
                                                        else if (res.status == 401) {
                                                          stamp("Bad Proxy",'neg',res.status,productName,size)
                                                          setTimeout(() => { setShipping() }, errDelay)
                                                        }
                                                        else {                                  
                                                            stamp("Unknown Error",'neg',res.status,productName,size)
                                                            setTimeout(() => { setShipping() }, errDelay)
                                                        } 
                                                      }
                                                    }
                                                    setShipping()
                                                  
                                                  }
                                                  else {
                                                    stamp("Unknown Error",'neg',res.status,productName,size)
                                                    setTimeout(() => { verifyAddress() }, errDelay)
                                                  }
                                                }
                                                catch{
                                                  if (res.status == 400 ) {
                                                    stamp("Bad Request",'neg',res.status,productName,size)
                                                    setTimeout(() => { verifyAddress() }, errDelay)
                                                  }
                                                  else if (res.status == 404 ) {
                                                    stamp("Bad Request",'neg',res.status,productName,size)
                                                    setTimeout(() => { verifyAddress() }, errDelay)
                                                  }
                                                  else if (res.status == 500) {
                                                    stamp("Dead Site",'neg',res.status,productName,size)
                                                    setTimeout(() => { verifyAddress() }, errDelay)
                                                  }
                                                  else if (res.status == 429) {
                                                    stamp("Rate Limited",'neg',res.status,productName,size)
                                                    setTimeout(() => { verifyAddress() }, errDelay)
                                                  }
                                                  else if (res.status == 403) {
                                                    stamp("Proxy Banned",'neg',res.status,productName,size)
                                                    setTimeout(() => { verifyAddress() }, errDelay)
                                                  }
                                                  else if (res.status == 401) {
                                                    stamp("Bad Proxy",'neg',res.status,productName,size)
                                                    setTimeout(() => { verifyAddress() }, errDelay)
                                                  }
                                                  else {                                  
                                                      stamp("Unknown Error",'neg',res.status,productName,size)
                                                      setTimeout(() => { verifyAddress() }, errDelay)
                                                  } 
                                                }
                                              }
                                              verifyAddress()
                                            }
                                          }
                                          catch(err) {
                                            
                                            if(res.status == 200) {
                                              stamp('Set Email','spec',res.status,productName,size)
                                              //console.log(res)
                                            }
                                             else if (res.status == 400 ) {
                                              stamp("Bad Request",'neg',res.status,productName,size)
                                              setTimeout(() => { setEmail() }, errDelay)
                                            }
                                            else if (res.status == 404 ) {
                                              stamp("Bad Request",'neg',res.status,productName,size)
                                              setTimeout(() => { setEmail() }, errDelay)
                                            }
                                            else if (res.status == 500) {
                                              stamp("Dead Site",'neg',res.status,productName,size)
                                              setTimeout(() => { setEmail() }, errDelay)
                                            }
                                            else if (res.status == 429) {
                                              stamp("Rate Limited",'neg',res.status,productName,size)
                                              setTimeout(() => { setEmail() }, errDelay)
                                            }
                                            else if (res.status == 403) {
                                              stamp("Proxy Banned",'neg',res.status,productName,size)
                                              setTimeout(() => { setEmail() }, errDelay)
                                            }
                                            else if (res.status == 401) {
                                              stamp("Bad Proxy",'neg',res.status,productName,size)
                                              setTimeout(() => { setEmail() }, errDelay)
                                            }
                                            else {
                                              stamp("Unknown Error",'neg',res.status,productName,size)
                                              setTimeout(() => { setEmail() }, errDelay)
                                            }
                                          }
                                        }
                                        setEmail()

                                    }
                                    else {
                                      stamp("Unknown Error",'neg',err.response.status,productName,size)
                                      setTimeout(() => { ATC() }, errDelay)
                                    } 
                                }
                                catch(err){
                                  console.log(err.response)
                                   if (err.response.status == 400 ) {
                                    stamp("Bad Request",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (err.response.status == 404 ) {
                                    stamp("Bad Request",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (err.response.status == 500) {
                                    stamp("Dead Site",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (err.response.status == 429) {
                                    stamp("Rate Limited",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (err.response.status == 403) {
                                    stamp("Proxy Banned",'neg',err.response.status,productName,size)
                                    console.log(err.response)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else if (err.response.status == 401) {
                                    stamp("Bad Proxy",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  }
                                  else {
                                    stamp("Unknown Error",'neg',err.response.status,productName,size)
                                    setTimeout(() => { ATC() }, errDelay)
                                  } 

                                }
                            }
                            ATC()
                        }
                        else {
                          stamp("Unknown Error #1",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        } 
                      }
                      catch(err) {
                         if (err.response.status == 400 ) {
                          stamp("Bad Request",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (err.response.status == 404 ) {
                          stamp("Bad Request",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (err.response.status == 500) {
                          stamp("Dead Site",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (err.response.status == 429) {
                          stamp("Rate Limited",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (err.response.status == 403) {
                          stamp("Proxy Banned",'neg',err.response.status,productName,size)
                          console.log(err)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if (err.response.status == 401) {
                          stamp("Bad Proxy",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if(err.response.status == undefined) {
                          stamp("Unknown Error #3",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else if(err.response.status == null) {
                          stamp("Unknown Error #4",'neg',err.response.status,productName,size)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        }
                        else {
                          stamp("Unknown Error #2",'neg',err.response.status,productName,size)
                          console.log(err)
                          setTimeout(() => { grabCSRF() }, errDelay)
                        } 
                      }
                  }
                  grabCSRF()
              }
                 
    
        } catch(err) {
           if (err.response.status == 400 ) {
            stamp("Cart Not Found",'neg',err.response.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 404 ) {
            stamp("Bad Request",'neg',err.response.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 500) {
            stamp("Dead Site",'neg',err.response.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 429) {
            stamp("Rate Limited",'neg',err.response.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 403) {
            stamp("Proxy Banned",'neg',err.response.status,false,false)
            console.log(err)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 401) {
            stamp("Bad Proxy",'neg',err.response.status,false,false)
            setTimeout(() => { findSizes() }, errDelay)
          }
          else if (err.response.status == 529) {
            stamp('In Queue....','act',false,false,false)
            setTimeout(() => { findSizes() }, 5000)
          }
          else {
            stamp("Unknown Error",'neg',err.response.status,false,false)
            console.log(err)
            setTimeout(() => { findSizes() }, errDelay)
          } 
        }
          
    }
    findSizes()
}
//timestamp()
main()