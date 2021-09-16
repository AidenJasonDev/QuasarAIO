const axios = require('axios');

const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();


async function main() {
  
    let config = {
      method: 'get',
      //url: 'https://staging.kidsfootlocker.com/product/~/A2MY3001.html',
      
      url: 'https://footlocker.queue-it.net/?c=footlocker&e=stgtimtest&ver=fastly-vcl-1.0&cver=0&t=https%3A%2F%2Fstaging.kidsfootlocker.com%2Fproduct%2F~%2FA2MY3001.html',
      jar: cookieJar,
      withCredentials: true,
    }
    
    try {
        response = await axios(config)
        console.log('getting product')

        console.log(response.data)
    }
    catch(err) {
        console.log(err)
    }
  }

  main()