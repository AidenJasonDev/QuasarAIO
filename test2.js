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
      'x-fl-request-id': `${uuidv4()}`, 
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
    console.log(res)
    
  }
}
sendPayment()