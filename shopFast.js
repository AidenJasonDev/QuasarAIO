
siteName = 'kith'

//IMPORTS
const axios = require('axios-proxy-fix');
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();
const os = require('os');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const perf = require('execution-time')();
const status = require('statuses')

puppeteer.use(StealthPlugin())


//VARIABLES

let userhook = 'https://discordapp.com/api/webhooks/766055188406337546/vUzGtrH1HxIHvNhQrd6VFqVvuRgBoRGfN1_5mUK1gdpevoW-r1huyRxMQlvXcrWbBn_8'
const publichook = 'https://discord.com/api/webhooks/822240944723853333/4LFZWDU7nOKGdMo1TJyQb4zfZmPrXLYLw7gvlCE5k0Jny0TC0KnvvA9lFUiFuWOWGRrT'

//let task_number = 1

//let kws = 'Puma Mayze PRM '
let kws = 'https://kith.com/products/pu382782-01'

let negKws = 'Luxe Chelsea'

let size = '6'
let sizelist = size.split(' ')

let fineProxy;

let rawProxy = ''

function proxy() {
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
}
proxy()

let link;
let keywrd;
let variant;

function inputType() {
    if(kws.includes('http')) {
        link = true
        monitorURL = `${kws}.json?q=QUASARONTOP`
        return monitorURL
    }
    else if(kws.includes(' ')) {
        function keywords() {
            keywordList = kws.split(' ')
            negativeKeywordList = negKws.split(' ')
            //console.log(keywordList)
        }
        
        keywords()
        keywrd = true
        monitorURL = `https://${siteName}.com/products.json?q=QUASARONTOP`
        return monitorURL
    } 
    else if(kws[0] <='9') {
        variant = true

    }
    else {
        console.error('ERROR STATUS 10')
    }

    
}

//inputType()
console.log('Starting....')

async function main() {
    perf.start()

    async function getProduct() {
        let config = {
            method: 'get',
            //url: `https://kith.com/products.json?limit=250&page=1#quasarontoplolz`,
            url: inputType(),
            jar: cookieJar,
            withCredentials: true,
            proxy: fineProxy
        }

        try {
            res = await axios(config)
            let productName;
            //console.log(link)
            //console.log(res.data)
            let fullProductList = res.data.products
            let productFound = false
            let sizeFound = false
            function findProduct() {
                if(link = true) {
                    console.log('Finding Product By Link....')
                    productName = res.data.product.title
                    console.log('Product Found: ' + productName)
                    let linkProductInfo = res.data.product
                   
                        console.log('Finding Size....')
                        //console.log(linkProductInfo.variants[6].title)
                        for(let i = 0; i < linkProductInfo.variants.length; i++) {
                             if(linkProductInfo.variants[i].title === sizelist[0]) {
                                console.log('Size Found: ' + linkProductInfo.variants[i].title)
                                sizeVariant = linkProductInfo.variants[i].id
                                //console.log(linkProductInfo.variants[i].id)
                            }
                            
                        } 
                    
                }
                else if(keywrd = true) {
                    
                    while( productFound = false) {
                        console.log('Finding Product By Keyword....')
                        for(let x = 0; x < fullProductList.length; x++) {
                            if(keywordList.every(item => fullProductList[x].title.includes(item))) {
                                productFound = true

                              console.log('Product Found!' + fullProductList[x].title)
                            }
    
                        }
                    }

                }
                else if(variant = true) {

                }
                else {
                    console.error('ERROR STATUS 11')
                }
                

            }
            findProduct()
            async function ATC() {
                console.log('Adding To Cart....')
                let data = `form_type=product&utf8=%E2%9C%93&properties%5Bupsell%5D=wmns&id=${sizeVariant}&quantity=1`;
                let config = {
                    method: 'post',
                    url: `https://${siteName}.com/cart/add.js?q=QUASARONTOP`,
                    headers: { 
                      'authority': `${siteName}.com`, 
                      'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"', 
                      'accept': 'application/json, text/javascript, */*; q=0.01', 
                      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 
                      'x-requested-with': 'XMLHttpRequest', 
                      'sec-ch-ua-mobile': '?0', 
                      'user-agent': 'APIs-Google', 
                      'sec-ch-ua-platform': '"Windows"', 
                      'origin': `https://${siteName}.com`, 
                      'sec-fetch-site': 'same-origin', 
                      'sec-fetch-mode': 'cors', 
                      'sec-fetch-dest': 'empty', 
                      'referer': monitorURL, 
                      'accept-language': 'en-US,en;q=0.9', 
                      
                    },
                    jar: cookieJar,
                    withCredentials: true,
                    proxy: fineProxy,
                    data : data
                  };
                  try {
                    res = await axios(config)
                    //console.log(res.data)
                    console.log('Carted!')
                    async function sendPayment() {
                        console.log('Sending Payment....')
                        let data = JSON.stringify({
                            "credit_card": {
                              "number": "4767 7184 2086 0167",
                              "name": "Aiden Williams",
                              "month": 3,
                              "year": 2027,
                              "verification_value": "210"
                            },
                            "payment_session_scope": `${siteName}.com`
                          });
                          
                          let config = {
                            method: 'post',
                            url: 'https://deposit.us.shopifycs.com/sessions?q=QUASARONTOP',
                            headers: { 
                              'Connection': 'keep-alive', 
                              'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"', 
                              'Accept': 'application/json', 
                              'Content-Type': 'application/json', 
                              'sec-ch-ua-mobile': '?0', 
                              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36', 
                              'sec-ch-ua-platform': '"Windows"', 
                              'Origin': 'https://checkout.shopifycs.com', 
                              'Sec-Fetch-Site': 'same-site', 
                              'Sec-Fetch-Mode': 'cors', 
                              'Sec-Fetch-Dest': 'empty', 
                              'Referer': 'https://checkout.shopifycs.com/', 
                              'Accept-Language': 'en-US,en;q=0.9'
                            },
                            jar: cookieJar,
                            withCredentials: true,
                            proxy: fineProxy,
                            data : data
                          };
                          try {
                            res = await axios(config)
                            console.log(res.status)
                            console.log(res.data)
                            let time = perf.stop().time / 1000
                            console.log('Checked Out In ' + time + ' seconds')
                            
                          }
                          catch(err) {
                            console.log(err)
                            //console.log(status(err.response.status))
                          }
                    }
                    sendPayment();
                  }
                  catch(err) {
                    console.log(err)
                    //console.log(status(err.response.status))
                  }
                  
            }
            ATC()
        }
        catch(err) {
            console.log(err)
            //console.log(status(err.response.status))
        }
    }
    getProduct()
}
main()
//inputType()