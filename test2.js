
async function verifyAddress() {
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
    "line1": `${profiles.Address}`,
    "line2":`${profile.Apt}`,
    "postalCode": `${postalCode}`,
    "town": `${toUpperCase(profile.City)}`
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
      'x-fl-request-id': `${create_request_ID()}`, 
      'content-type': 'application/json', 
      'sec-gpc': '1', 
      'origin': 'https://www.footlocker.com', 
      'sec-fetch-site': 'same-origin', 
      'sec-fetch-mode': 'cors', 
      'sec-fetch-dest': 'empty', 
      'referer': 'https://www.footlocker.com/checkout', 
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
      stamp('Verified Address','spec',false,productName,size)
      async function setShipping() {
        stamp("Sending Shipping....",'act',false,productName,size)
        let data = JSON.stringify({"shippingAddress":{"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`,"email":false,"phone":`${profile.Phone}`,"country":{"isocode":`${profile.Country}`,"name":`${countries[profile.Country]}`},"id":null,"setAsBilling":true,"region":{"countryIso":`${profile.Country}`,"isocode":`${profile.Country + '-' + profile.State}`,"isocodeShort":`${profile.state}`,"name":`${states[profile.State]}`},"type":"default","LoqateSearch":"","line1":`${profile.Address}`,"postalCode":`${profile.Zip}`,"town":`${profile.City.toUpperCase()}`,"regionFPO":null,"shippingAddress":true,"recordType":"S"}});
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
            'x-fl-request-id': `${create_request_ID}`, 
            'content-type': 'application/json', 
            'origin': 'https://www.footlocker.com', 
            'sec-fetch-site': 'same-origin', 
            'sec-fetch-mode': 'cors', 
            'sec-fetch-dest': 'empty', 
            'referer': 'https://www.footlocker.com/checkout', 
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
            stamp("Sent Shipping",'spec',res.status,productName,size)
    
            async function setBilling() {
              stamp("Sending Billing....",'act',false,productName,size)
              let data = JSON.stringify({"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`,"email":false,"phone":`${profile.phone}`,"country":{"isocode":`${profile.country}`,"name":`${countries[profile.country]}`},"id":null,"setAsBilling":false,"region":{"countryIso":`${profile.country}`,"isocode":`${profile.Country + '-' + profile.State}`,"isocodeShort":`${profile.state}`,"name":`${states[profile.state]}`},"type":"default","LoqateSearch":"","line1":`${profile.Address}`,"postalCode":`${profile.Zip}`,"town":`${profile.City.toUpperCase()}`,"regionFPO":null,"shippingAddress":true,"recordType":"S"});
              let config = {
                method: 'post',
                url: `https://www.footlocker.com/api/users/carts/current/set-billing?timestamp=${timestamp()}`,
                headers: { 
                  'authority': 'www.footlocker.com', 
                  'pragma': 'no-cache', 
                  'cache-control': 'no-cache', 
                  'accept': 'application/json', 
                  'x-csrf-token': `${token}`, 
                  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
                  'x-fl-request-id': `${create_request_ID()}`, 
                  'content-type': 'application/json', 
                  'sec-gpc': '1', 
                  'origin': 'https://www.footlocker.com', 
                  'sec-fetch-site': 'same-origin', 
                  'sec-fetch-mode': 'cors', 
                  'sec-fetch-dest': 'empty', 
                  'referer': 'https://www.footlocker.com/checkout', 
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
                  stamp('Sent Billing','spec',res.status,productName,size)
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
                        'x-fl-request-id': `${create_request_ID()}`, 
                        'content-type': 'application/json', 
                        'origin': 'https://www.footlocker.com', 
                        'sec-fetch-site': 'same-origin', 
                        'sec-fetch-mode': 'cors', 
                        'sec-fetch-dest': 'empty', 
                        'referer': 'https://www.footlocker.com/checkout', 
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
                      console.log(res)
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
          else if (res.status == 400 ) {
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
verifyAddress()