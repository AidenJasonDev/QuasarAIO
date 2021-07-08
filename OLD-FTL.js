const axios = require('axios').default;
const color = require('cli-color')
const webhook = require("webhook-discord");

const shortid = require('shortid')
const open = require("open");
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const hostile = require('hostile')
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');
axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();
const cheerio = require('cheerio');
const { v4: uuidv4 } = require('uuid');
const adyenEncrypt = require('adyen-encryption');
const rword = require('rword');
const anticaptcha = require("@antiadmin/anticaptchaofficial");
const puppeteer = require("puppeteer");

// general task settings


// referer ID
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
let ReferID = 'QZR' + shortid.generate()

function timestamp() {
	let ts = new Date().getTime();
	return ts

}

// encrypt payment

const KEY = '10001|E348EBBFF1F0C3FCD819E9433A29D1ED7218D5C48EAFF60F58CE3ADD10F34A3D2FA7FEF3248BFED219534DCC83D45578F24BA9FA870FC4DE900CBCB92E4AB1988F9DCBA93B7392D77E7550B1A9E91F66C79358EAF8808230414A9F3ECB9129F7369E95A462EA99DB52167E4583D06975DE1C28100355B1CEA372B83EDD19DBBFA1A4F1566F656DC8F9D93D4FA5341B4F3D8CA94F56CDF8F666C1D6F4AA077BC998FC3A3F74BED84B34CD6B9888D831B0546272A185F9DA9CF8C09CCDA8344A0F7CE5291D13FE6DF24E5C51FA8E35A0885E7113DB45DB121A54E367E7C9695CE24FE7FCBCA305363B57CFEA8B70DBA192CCD9BC68B2328D3465DD9C2960AEA93F'

let encryptedCardNumber = adyenEncrypt.encrypt(KEY, profile.cardNumber)
let encryptedCVC = adyenEncrypt.encrypt(KEY, profile.cvc)
let encryptedExpiryMonth = adyenEncrypt.encrypt(KEY, profile.expirationMonth)
let encryptedExpiryYear = adyenEncrypt.encrypt(KEY, profile.expirationYear)



function getDateTime() {

  let date = new Date();

  let hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  let min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  let sec  = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;
  
  return '[' + hour + ":" + min + ":" + sec + ']';

}

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}
function create_request_ID() {
	return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	  let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	  return v.toString(16);
	});
  }
async function grab_CSRF() {
    let config = {
      method: 'get',
      url: `https://www.footlocker.com/api/v3/session?timestamp=${timestamp()}`,
      headers: { 
        'authority': 'www.footlocker.com', 
        'accept': 'application/json', 
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36 OPR/72.0.3815.473', 
        'x-fl-request-id': `${create_request_ID()}`, 
        'sec-fetch-site': 'same-origin', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-dest': 'empty', 
        'referer': `https://www.footlocker.com/product/~/622100.html`, 
        'accept-language': 'en-US,en;q=0.9', 
        'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1601672001292; s_cc=true; janrainSSO_session=session; userStatus=guest; userVIP=unknown; _pxvid=4ed4bb59-04f1-11eb-8a7e-0242ac120005; sc.InTg=b; IR_gbd=footlocker.com; _gcl_au=1.1.925331379.1601672003; _ga=GA1.2.480505542.1601672003; _fbp=fb.1.1601672002881.762891076; _scid=8182934c-9c7f-4bf0-a5d0-8d9f114dff8b; sc.ASP.NET_SESSIONID=fcof34paiggczauxhluy1i1d; _mibhv=anon-1601672003046-7529055831_2389; sc.UserId=08ba03c8-dc3e-40db-8b3c-08e932eab11a; _pin_unauth=dWlkPVltWTRPR1l3TkRBdE5HUXpNeTAwWldFNExUazNaRFV0TkRJeE16bGpOakV4TkRNeA; __zlcmid=10TjTpfWIadELJ3; ccpa_consent=enabled; bluecoreNV=false; _abck=D13B0E9E5A22667F9FC4FE6B75ED3657~-1~YAAQHuHdF4jDww51AQAAfrjaKARO4wlDOZv+u6E5dN65Taji4Kta74c9v2HHggbW9sWpnShgJ0UZtpF8xn/dbkSZCBCi/urWn9Jxoy+e3rIcQnl/avgKRd1xMPmfO+koj9iP/XrLB+ghmsFxBahzgVO9tWAE0N1w/KElbLyaDAiwkxTaXGh+1Hcd9izCiz7TL7lfUjcoFSF/++pj1m+nVujRu61ZSXokIeOcORe7uQOkgMOJUHsr4GTEg0u9ZNugBBSUbTrzMhrEcmkWFjV8o/uyRQZ5zzSwe3rlyASVMbFyjARisXL0nqGLOlo9ezeprtpRwjpwA0ppIiDl7hU1hz98o1Weg6X3~-1~-1~-1; BVBRANDID=d1d58a8e-6f13-4bc6-ba46-5d7806304610; BVImplmain_site=8001; s_pr_tbe66=1602708225215; _gcl_aw=GCL.1604764988.CjwKCAiAqJn9BRB0EiwAJ1SztfVy-HjmcSVxG4YStw2yIbjpcSZXABdZt62N5tmL2ilgZWibQAITdxoCNXAQAvD_BwE; _gcl_dc=GCL.1604764988.CjwKCAiAqJn9BRB0EiwAJ1SztfVy-HjmcSVxG4YStw2yIbjpcSZXABdZt62N5tmL2ilgZWibQAITdxoCNXAQAvD_BwE; _gac_UA-50007301-5=1.1604764988.CjwKCAiAqJn9BRB0EiwAJ1SztfVy-HjmcSVxG4YStw2yIbjpcSZXABdZt62N5tmL2ilgZWibQAITdxoCNXAQAvD_BwE; ku1-sid=XGGI4o7cPNjzroPdBy8Uo; ku1-vid=e8a1783a-4ffe-1d87-46c4-0689ed5d38ec; s_pr_tbe67=1604765011711; rskxRunCookie=0; rCookie=nbbhumbigre5ch05ksjskh7vnlom; s_pr_tbe68=1604765019957; undefined; xyz_cr_100238_et_100==NaN&cr=100238&et=100; _sctr=1|1611464400000; lastRskxRun=1611688368526; s_sq=%5B%5BB%5D%5D; datadome=C8_9oiH_0S8rBL7i0zV4WVfXySh8DEbhdKx-FPlieYh2T5pBjslUeB_OPijezqDenQ4hjx8mNrN1nn.MQ~QOf5PHV0yXKAIGXgqBd0YTZO; JSESSIONID=1pq5pfig8ivud184a9770pfjoj.fzcexflapipdb638882; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600210%26vn%3D15; s_invisit=true; aa_pageHistory=[{"n":"","t":"","p":""},{"n":"FL: W: PDP","t":"Product","p":"/product/~/${taskInfo.pid}.html"}]; gpv_prevURL=https%3A%2F%2Fwww.footlocker.com%2Fproduct%2F%7E%2F${taskInfo.pid}.html; gpv_events=no%20value; gpv_products=${taskInfo.pid}; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-1124106680%7CMCIDTS%7C18656%7CMCMID%7C52962240272244684411397436767302630823%7CMCAAMLH-1612458467%7C7%7CMCAAMB-1612458467%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1611860867s%7CNONE%7CvVersion%7C5.2.0%7CMCCIDH%7C1811066100; BVBRANDSID=f7a26c8b-8e8c-4920-8f8f-d8e775127372; _uetsid=59542d00618b11ebbf3a353555203080; _uetvid=142787f0550a11eb83d153c3e845a1b4; IR_11068=1611853669201%7C2193747%7C1611853669201%7C%7C; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%22174eb173d0edd8-076a9ca7cc8b67-4b524b50-1fa400-174eb173d0fc05%22%2C%22bc_persist_updated%22%3A%201611688504152%2C%22event_lang%22%3A%20%22en%22%2C%22g_search_engine%22%3A%20%22google%22%2C%22bc_id%22%3A%20925531239%7D; IR_PI=4f56a571-04f1-11eb-a163-02caec40f184%7C1611940069201; _derived_epik=dj0yJnU9YTVjYnBhdnM2RzRKSnZ1RzVLR1NPM3ptQ1RHeGlacnombj14RGN6ekpReWQ1Q19FRm9aQXFJbE13Jm09MSZ0PUFBQUFBR0FTNzJZJnJtPTEmcnQ9QUFBQUFHQVM3Mlk; bc_invalidateUrlCache_targeting=1611853669395; _gid=GA1.2.1004885522.1611853670; _gat_gtag_UA_50007301_5=1; _gali=ProductDetails_radio_size_l; s_lv=1611853692106; mbox=PC#ad3324862f394ead8041e347a3439a80.34_0#1675098504|session#f4b7ac34edb740ca930825593f712e05#1611855527; JSESSIONID=yohftpw443oi56kss7xc2ysp.fzcexflapipdb648881; datadome=8FiftisGNbuhg9n1G4LY-VeLtIf-Z5HRSAiUh_8Dj82cvabu2phAi_kjyQeZkz__MFgROJ2FY5P0LnFey_1C.qf6iIE-TqP5~5-sPmDG8H`
      }
      };
      
    try {
      response = await axios(config)
      grabbedCSRF = response.data.data.csrfToken
      console.log(grabbedCSRF)
    }
    catch(err) {
      console.log(getDateTime() + 'unable to get CSRF....')
    }
       
    
}
grab_CSRF()
async function main() {
    console.log(getDateTime() + 'Initializing....')
    //grab_sizes();
       await queue();

      await add_to_cart();
  // await set_email();
   //console.log(cartGUID)
   console.log(grabbedCSRF)

     //await set_email()
     await send_zip()
     console.log(grabbedCSRF)
    await send_ship_1()
  // await  send_ship_2()
  // await send_ship_3()
  //await  get_deliveryMode()
  //await send_devliveryMode()
   //await  send_person()
  // await  send_payment()
  
  }
async function queue() {
  
  let config = {
    method: 'get',
    url: 'https://www.footlocker.com/',
    headers: { 
      'authority': 'www.footlocker.com', 
      'cache-control': 'max-age=0', 
      'upgrade-insecure-requests': '1', 
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 OPR/73.0.3856.396', 
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
      'sec-fetch-site': 'same-origin', 
      'sec-fetch-mode': 'navigate', 
      'sec-fetch-dest': 'document', 
      'referer': 'https://www.footlocker.com/', 
      'accept-language': 'en-US,en;q=0.9', 
      'cookie': 'mp_dev_mixpanel=%7B%22distinct_id%22%3A%20%221776f069e70b87-0aee64f634a9fc-44524150-384000-1776f069e71e5c%22%2C%22bc_persist_updated%22%3A%201612475446244%2C%22event_lang%22%3A%20%22en%22%2C%22g_search_engine%22%3A%20%22google%22%7D; at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1613493584765; s_cc=true; userStatus=guest; userVIP=unknown; janrainSSO_session=session; ku1-sid=U4syeg_JnJG6JEBjMM1Bw; ku1-vid=9f3df428-09a0-3632-2b7d-31dfe135530d; BVImplmain_site=8001; BVBRANDID=face2e81-0f1e-4f4e-b36a-1e8a69388755; _scid=d918e36a-2ff2-460e-8115-2c0e2495ff59; sc.ASP.NET_SESSIONID=1n1igh2lsd1gb1wiw1iohiup; _mibhv=anon-1601672003046-7529055831_2389; IR_gbd=footlocker.com; _fbp=fb.1.1613493586674.69936617; sc.UserId=667c1a89-abcc-49ec-bd00-722635f3adf2; _sctr=1|1613451600000; _gcl_au=1.1.1365459084.1613493587; s_pr_tbe66=1613493586930; _ga=GA1.2.407428181.1613493587; _pin_unauth=dWlkPVltWTRPR1l3TkRBdE5HUXpNeTAwWldFNExUazNaRFV0TkRJeE16bGpOakV4TkRNeA; bluecoreNV=false; __zlcmid=12gjoe32C0xakeQ; xyz_cr_100238_et_100==NaN&cr=100238&et=100; s_pr_tbe67=1613511066385; rskxRunCookie=0; rCookie=nbbhumbigre5ch05ksjskh7vnlom; s_pr_tbe68=1613511071790; _gid=GA1.2.1445404907.1613659688; JSESSIONID=1e69w33wp5vkzoh9hfapannpe.fzcexflapipdb638882; lastRskxRun=1613746385241; mbox=PC#ad3324862f394ead8041e347a3439a80.34_0#1676997051|session#c58c47be91dd4f9381138ba06ab6aa9a#1613754110; datadome=UH.vl0xYjBRZWv0pnVLkU06MUs00w.b._FJLoocEglreY.SrfmHyvqo8o.0EqRIWw~iMQXfKGIVVqoH0HVnpbzDOzgy8HmXyIGXiKDfHZZ; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-1124106680%7CMCIDTS%7C18677%7CMCMID%7C52962240272244684411397436767302630823%7CMCAAMLH-1614357051%7C7%7CMCAAMB-1614357051%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1613759451s%7CNONE%7CvVersion%7C5.2.0%7CMCCIDH%7C1811066100; s_vnum=1614574800322%26vn%3D22; s_sq=%5B%5BB%5D%5D; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%22174eb173d0edd8-076a9ca7cc8b67-4b524b50-1fa400-174eb173d0fc05%22%2C%22bc_persist_updated%22%3A%201611688504152%2C%22event_lang%22%3A%20%22en%22%2C%22g_search_engine%22%3A%20%22google%22%2C%22bc_id%22%3A%20925531239%7D; _uetsid=502a630071f811ebb4041dcff1ca57d9; _uetvid=142787f0550a11eb83d153c3e845a1b4; IR_11068=1613752252724%7C0%7C1613752252724%7C%7C; IR_PI=4f56a571-04f1-11eb-a163-02caec40f184%7C1613838652724; _derived_epik=dj0yJnU9Ml8tTTh1QkE0VmM5ZGo5UnlibUdSREdRbUZEY3pGaWsmbj0zMWVVSlV2QUNUUk5qaU5qdFh6TWNBJm09MSZ0PUFBQUFBR0F2NTd3JnJtPTEmcnQ9QUFBQUFHQXY1N3c; s_lv=1613752254281; waiting_room=ZGVjPXdhaXQmZXhwPTE2MTM3NTQ4MTAmdWlkPTEwOC40NS41Mi4yNTAma2lkPWtleTEmc2lnPTB4ZjI0ZjRjZTBkOTk1MGEzMjhiMTE4NDEzZmY2NmY1Y2RjMDZlYzllZDI2MzczMDY2ZTI2MGJkMTAzYjM3ZTYyNQ==; datadome=N~AKdnoLzKsrMdswUI6yS95ePV_Cqfn7NvHFAJGuCNMaoA3dK8zXg9srKojZ-wO12XWxtDNXufKJnV5ndd.zi_AJSrI4TUbySc-PtbsGWg; waiting_room=ZGVjPWFsbG93JmV4cD0xNjEzNzU1MTc2JnVpZD0xMDguNDUuNTIuMjUwJmtpZD1rZXkxJnNpZz0weGMyMmU0ZjU2ODRmNDFmMjA0YzUyMzAzNjQwZjE3ZWVjMTdhMjEzYTUzY2E1ZjBhZDQ1MzJhOTM4MGVhZmFjMzQ='
    }
  };
  
  axios(config)
  .then(function (response) {
    //console.log(response.data)
    console.log(getDateTime() + "Passed Queue....")
  })
  .catch(function (error) {
    console.log(getDateTime() + " In Queue....")
    queue()
  });
  
}


//console.log(grabbedCSRF)
async function grab_sizes() {
	let config = {
		method: 'get',
		url: `https://www.footlocker.com/api/products/pdp/${taskInfo.pid}?timestamp=${timestamp()}`,
		headers: { 
		  'authority': 'www.footlocker.com', 
		  'accept': 'application/json', 
		  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36 OPR/72.0.3815.473', 
		  'x-fl-request-id': `${create_request_ID()}`, 
		  'sec-fetch-site': 'same-origin', 
		  'sec-fetch-mode': 'cors', 
		  'sec-fetch-dest': 'empty', 
		  'referer': `https://www.footlocker.com/product/~/${taskInfo.pid}.html`, 
		  'accept-language': 'en-US,en;q=0.9', 
		}
	  };
	  
	  axios(config)
	  .then(function (response) {
    console.log(JSON.stringify(response.data));
    let productIdentity = response.data.sellableUnits
    let productCode = ''
		//296317
	  })
	  .catch(function (error) {
		console.log(error);
	  });
    try {

    } catch(err) {
      console.log(error);
    }
	  
}


async function add_to_cart() {   
  let proxy = {
      host: proxyHost,
      port:proxyPort,
      auth: {
          username:proxyUser,
          password:proxyPass
      }
      

      }
  let data = JSON.stringify({
    "productQuantity":1,
    "productId":"21025764"
  });
  let config = {
      method: 'post',
      url: `https://www.footlocker.com/api/users/carts/current/entries?timestamp=${timestamp()}`,
      headers: { 
        'authority': 'www.footlocker.com', 
        'pragma': 'no-cache', 
        'cache-control': 'no-cache', 
        'accept': 'application/json', 
        //'x-csrf-token': '9f4c5178-5e81-4562-9da9-7735054922da', // get new one everytime
        'x-csrf-token': `${grabbedCSRF}`,
        'x-fl-productid': '21025764', // figure out how it works
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36', 
        //'x-fl-request-id': `${create_request_ID()}`, 
        'x-fl-request-id': `${create_request_ID()}`,
        'content-type': 'application/json', 
        'sec-gpc': '1', 
        'origin': 'https://www.footlocker.com', 
        'sec-fetch-site': 'same-origin', 
        'sec-fetch-mode': 'cors', 
        'sec-fetch-dest': 'empty', 
        'referer': `https://www.footlocker.com/product/${ReferID}/${taskInfo.pid}.html`, 
        'accept-language': 'en-US,en;q=0.9', 
        'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1610660557356; s_cc=true; _pxvid=6b0086a1-56b1-11eb-9435-0242ac12000f; userVIP=unknown; userStatus=guest; janrainSSO_session=session; IR_gbd=footlocker.com; _mibhv=anon-1610660559021-611437609_2389; _scid=c2a7d255-9444-4860-9978-868b2c85d729; sc.ASP.NET_SESSIONID=hpsa4hre0xd5sbljbae50bhg; _fbp=fb.1.1610660559346.473920142; sc.UserId=24df6f8d-f92f-4e88-acbd-3efdcd8c1f62; _gcl_au=1.1.577915812.1610660559; _ga=GA1.2.541062857.1610660560; _sctr=1|1610600400000; __zlcmid=129jjeoIXzp7rxZ; BVBRANDID=9dae50fb-6d93-42f0-bd22-5799a7cd22ba; BVImplmain_site=8001; s_pr_tbe66=1610660625425; ku1-sid=n0IajBbMsAZpDmkxX36Ym; ku1-vid=b107fe80-f399-d08e-fb63-12d8ca7fbde3; s_pr_tbe67=1610660630649; rskxRunCookie=0; rCookie=xrluojk3jpszxp8cmtjy1mkjxdr6dn; _pin_unauth=dWlkPU9XUXpNR1EyTjJJdFltTXlZeTAwTnpGbUxXSmlPR1l0WWpsak5tUmtOVEF4TlRndw; bluecoreNV=false; xyz_cr_100238_et_100==NaN&cr=100238&et=100; datadome=B4zZdvLVcFuNmGrDiK_6vOOol9PIHF~yUJgGfllQqGKo.IR3V844jZ1FhjeKS~flV4OprUBtLWxV6o5.-v58ZEz55eYbQmyV_eIoK9GgFf; lastRskxRun=1610855976439; JSESSIONID=3qea5nvjwurtszarg2ns6w24.fzcexflapipdb648881; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-432600572%7CMCIDTS%7C18646%7CMCMID%7C47719650416069447731046573673280787188%7CMCAAMLH-1611575756%7C7%7CMCAAMB-1611575756%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1610978156s%7CNONE%7CMCSYNCSOP%7C411-18649%7CvVersion%7C4.5.2; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217702d9b8bcb47-08f3b77cbcf604-31346d-1fa400-17702d9b8bde67%22%2C%22bc_persist_updated%22%3A%201610660559220%2C%22event_lang%22%3A%20%22en%22%7D; _uetsid=21ca8d70598411eb843219a294019d59; _uetvid=6c3b2a3056b111eb8e4cfd8cbf3db3db; IR_11068=1610970960461%7C2193747%7C1610970960461%7C%7C; IR_PI=6bf7e3c8-56b1-11eb-982a-12cfcb81d2fc%7C1611057360461; _derived_epik=dj0yJnU9Nmc3VXJPRWdyWGs2c1VWWVJ0cGRTUDlPa2NfSUQxN3Umbj0yYWZVcEJiZDBDZ1ZUbVRxOWM4NURnJm09NyZ0PUFBQUFBR0FGZDFN; _gid=GA1.2.891310271.1610970961; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600354%26vn%3D13; s_invisit=true; mbox=PC#93a201fb353647f5bc624c79d3a790fc.34_0#1674219287|session#0b344007b2cd44948dbcafdb17385863#1610976342; s_lv=1610974487004; s_sq=footlockerglobalprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dfl%25253A%252520w%25253A%252520pdp%2526link%253DADD%252520TO%252520CART%2526region%253DProductDetails%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dfl%25253A%252520w%25253A%252520pdp%2526pidt%253D1%2526oid%253DADD%252520TO%252520CART%2526oidt%253D3%2526ot%253DSUBMIT; _gali=ProductDetails`
      },
      data : data,
      //      21024574
      //proxy : proxy
    };
  

try {
  response = await axios(config)
  console.log(getDateTime() + 'Added to cart....')
    delay(errorDelay)
     cartGUID =  response.data.guid
    
    console.log(cartGUID)

     
} catch (err) {
  console.log(err)
  console.log(getDateTime() + 'Error adding to cart');
  console.log(getDateTime() + 'Opening Captcha Window....')
   captchaUrl = err.data
  console.log(captchaUrl)  
  harvest_captcha(captchaUrl)
  //delay(errorDelay)
  //add_to_cart()
}

}
//console.log(cartGUID)
async function set_email() {
	let config = {
		method: 'put',
		url: `https://www.footlocker.com/api/users/carts/current/email/${profile.email}?timestamp=${timestamp()}`,
		headers: { 
		  'authority': 'www.footlocker.com', 
		  'content-length': '0', 
		  'pragma': 'no-cache', 
		  'cache-control': 'no-cache', 
		  'accept': 'application/json', 
		  'x-csrf-token':`${grabbedCSRF}`, 
		  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
		  'x-fl-request-id': `${create_request_ID()}`, 
		  'sec-gpc': '1', 
		  'origin': 'https://www.footlocker.com', 
		  'sec-fetch-site': 'same-origin', 
		  'sec-fetch-mode': 'cors', 
		  'sec-fetch-dest': 'empty', 
		  'referer': 'https://www.footlocker.com/checkout', 
		  'accept-language': 'en-US,en;q=0.9', 
		  'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1610660557356; s_cc=true; _pxvid=6b0086a1-56b1-11eb-9435-0242ac12000f; userVIP=unknown; userStatus=guest; janrainSSO_session=session; IR_gbd=footlocker.com; _mibhv=anon-1610660559021-611437609_2389; _scid=c2a7d255-9444-4860-9978-868b2c85d729; sc.ASP.NET_SESSIONID=hpsa4hre0xd5sbljbae50bhg; _fbp=fb.1.1610660559346.473920142; sc.UserId=24df6f8d-f92f-4e88-acbd-3efdcd8c1f62; _gcl_au=1.1.577915812.1610660559; _ga=GA1.2.541062857.1610660560; __zlcmid=129jjeoIXzp7rxZ; BVBRANDID=9dae50fb-6d93-42f0-bd22-5799a7cd22ba; BVImplmain_site=8001; s_pr_tbe66=1610660625425; ku1-sid=n0IajBbMsAZpDmkxX36Ym; ku1-vid=b107fe80-f399-d08e-fb63-12d8ca7fbde3; cart-guid=${cartGUID}; s_pr_tbe67=1610660630649; rskxRunCookie=0; rCookie=xrluojk3jpszxp8cmtjy1mkjxdr6dn; _pin_unauth=dWlkPU9XUXpNR1EyTjJJdFltTXlZeTAwTnpGbUxXSmlPR1l0WWpsak5tUmtOVEF4TlRndw; bluecoreNV=false; xyz_cr_100238_et_100==NaN&cr=100238&et=100; datadome=PTZybClzb~ImD_QpyBYq2VLb3AOi4sv2HkQMOsUhUMfdJJLxmJocFoco.iq_d9e0MwwpUgUze1aTGzkRsdqXlamWrJwqnUN.9-bAYPJStV; s_pr_tbe68=1610994616214; _gid=GA1.2.1003491023.1611242341; _sctr=1|1611205200000; JSESSIONID=7fh6joekx2kz1q09k9hs5csfm.fzcexflapipdb648881; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-432600572%7CMCIDTS%7C18649%7CMCMID%7C47719650416069447731046573673280787188%7CMCAAMLH-1611882121%7C7%7CMCAAMB-1611882121%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1611284521s%7CNONE%7CMCSYNCSOP%7C411-18649%7CvVersion%7C4.5.2; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600354%26vn%3D22; s_invisit=true; IR_PI=6bf7e3c8-56b1-11eb-982a-12cfcb81d2fc%7C1611363723228; mbox=PC#93a201fb353647f5bc624c79d3a790fc.34_0#1674523911|session#8968fe017f18486491df900369fc76a0#1611279181; aa_pageHistory=[{"n":"FL: W: PDP","t":"Product","p":"/product/nike-elite-crew-socks/622100.html"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; _uetsid=fd1ce1c05bfb11eba2ba33bc936b44e2; _uetvid=6c3b2a3056b111eb8e4cfd8cbf3db3db; IR_11068=1611279112334%7C2193747%7C1611277323228%7C%7C; _derived_epik=dj0yJnU9ajd5Z3FhRmJxbmRIMWRCWk9nbGJ0QUFPdUMyOXpOOGcmbj1mdjAyaDM4a3BDcVlwYjROb0tZMmZBJm09NyZ0PUFBQUFBR0FLS3dn; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217702d9b8bcb47-08f3b77cbcf604-31346d-1fa400-17702d9b8bde67%22%2C%22bc_persist_updated%22%3A%201610660559220%2C%22event_lang%22%3A%20%22en%22%7D; lastRskxRun=1611279112952; s_lv=1611279750650; s_sq=footlockerglobalprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dfl%25253A%252520w%25253A%252520checkout%2526link%253DSAVE%252520%252526%252520CONTINUE%2526region%253DContactInfo%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dfl%25253A%252520w%25253A%252520checkout%2526pidt%253D1%2526oid%253DSAVE%252520%252526%252520CONTINUE%2526oidt%253D3%2526ot%253DSUBMIT; _gali=ContactInfo; JSESSIONID=yohftpw443oi56kss7xc2ysp.fzcexflapipdb648881; datadome=JKRUXXxf9GgoFgEngUXaJIKhNy7ju4kkfw9mgUHFYgZI4GWz~hHxBmHK4Anw8bhFCVoh0_p0qNcaKdf~oUjsrkVYy7BZTr~UTc2ewu17tw`
		}
	  };
	  
	  try {
      response = await axios(config)
    } catch (err) {
      console.log(err)
      //console.log(getDateTime() + 'Error Setting Email....');
      //delay(errorDelay)
      //set_email()
    }
}

async function send_zip() {
    let data = JSON.stringify({"zipCode":`${profile.zipCode}`})
    let config = {
        method: 'post',
        url: `https://www.footlocker.com/api/satori/location-lookup/?timestamp=${timestamp()}`,
        headers: { 
          'authority': 'www.footlocker.com', 
          'pragma': 'no-cache', 
          'cache-control': 'no-cache', 
          'accept': 'application/json', 
          'x-csrf-token': `${grabbedCSRF}`, 
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
          'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1610660557356; s_cc=true; _pxvid=6b0086a1-56b1-11eb-9435-0242ac12000f; userVIP=unknown; userStatus=guest; janrainSSO_session=session; IR_gbd=footlocker.com; _mibhv=anon-1610660559021-611437609_2389; _scid=c2a7d255-9444-4860-9978-868b2c85d729; sc.ASP.NET_SESSIONID=hpsa4hre0xd5sbljbae50bhg; _fbp=fb.1.1610660559346.473920142; sc.UserId=24df6f8d-f92f-4e88-acbd-3efdcd8c1f62; _gcl_au=1.1.577915812.1610660559; _ga=GA1.2.541062857.1610660560; __zlcmid=129jjeoIXzp7rxZ; BVBRANDID=9dae50fb-6d93-42f0-bd22-5799a7cd22ba; BVImplmain_site=8001; s_pr_tbe66=1610660625425; ku1-sid=n0IajBbMsAZpDmkxX36Ym; ku1-vid=b107fe80-f399-d08e-fb63-12d8ca7fbde3; cart-guid=${cartGUID}; s_pr_tbe67=1610660630649; rskxRunCookie=0; rCookie=xrluojk3jpszxp8cmtjy1mkjxdr6dn; _pin_unauth=dWlkPU9XUXpNR1EyTjJJdFltTXlZeTAwTnpGbUxXSmlPR1l0WWpsak5tUmtOVEF4TlRndw; bluecoreNV=false; xyz_cr_100238_et_100==NaN&cr=100238&et=100; s_pr_tbe68=1610994616214; _gid=GA1.2.1003491023.1611242341; _sctr=1|1611205200000; JSESSIONID=7fh6joekx2kz1q09k9hs5csfm.fzcexflapipdb648881; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600354%26vn%3D22; s_invisit=true; IR_PI=6bf7e3c8-56b1-11eb-982a-12cfcb81d2fc%7C1611363723228; mbox=PC#93a201fb353647f5bc624c79d3a790fc.34_0#1674523911|session#8968fe017f18486491df900369fc76a0#1611279181; aa_pageHistory=[{"n":"FL: W: PDP","t":"Product","p":"/product/nike-elite-crew-socks/622100.html"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; _uetsid=fd1ce1c05bfb11eba2ba33bc936b44e2; _uetvid=6c3b2a3056b111eb8e4cfd8cbf3db3db; IR_11068=1611279112334%7C2193747%7C1611277323228%7C%7C; _derived_epik=dj0yJnU9ajd5Z3FhRmJxbmRIMWRCWk9nbGJ0QUFPdUMyOXpOOGcmbj1mdjAyaDM4a3BDcVlwYjROb0tZMmZBJm09NyZ0PUFBQUFBR0FLS3dn; lastRskxRun=1611279112952; s_sq=%5B%5BB%5D%5D; datadome=NTRM0_nf59ar9Cht1f7NE4T00JkyHlcw4-fxNB.GhOR~re8mEILGwHrOvLrmG8_Hi.zSTXK7Vh~Q.O6VxTunX~9cZo5lJ37vzZsJx5_GKx; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217702d9b8bcb47-08f3b77cbcf604-31346d-1fa400-17702d9b8bde67%22%2C%22bc_persist_updated%22%3A%201611279751224%2C%22event_lang%22%3A%20%22en%22%2C%22bc_id%22%3A%20925531239%7D; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-432600572%7CMCIDTS%7C18649%7CMCMID%7C47719650416069447731046573673280787188%7CMCAAMLH-1611884551%7C7%7CMCAAMB-1611884551%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1611286951s%7CNONE%7CMCSYNCSOP%7C411-18649%7CvVersion%7C4.5.2%7CMCCIDH%7C1811066100; s_lv=1611279753293; _gali=ShippingAddress_text_line1; JSESSIONID=yohftpw443oi56kss7xc2ysp.fzcexflapipdb648881; datadome=8FiftisGNbuhg9n1G4LY-VeLtIf-Z5HRSAiUh_8Dj82cvabu2phAi_kjyQeZkz__MFgROJ2FY5P0LnFey_1C.qf6iIE-TqP5~5-sPmDG8H`, 
          
        },
        data : data
      };


      try {
        res = await axios(config)
        //console.log(JSON.stringify(response.data));
        console.log(getDateTime() + 'Submitting Shipping....')
      }
      catch (err) {
        console.log(getDateTime() + 'Error Submitting Shipping....');
        delay(errorDelay)
        send_zip()
      }
      
}

async function send_ship_1() {
    let data = JSON.stringify({"country":{"isocode":`${profile.countryAbr}`,"name":`${profile.country}`},"region":{"countryIso":`${profile.countryAbr}`,"isocode":`${profile.countryAbr + '-' + profile.stateAbr}`,"isocodeShort":`${profile.stateAbr}`,"name":`${profile.state}`},"line1":`${profile.address}`,"line2":`${profile.apt}`,"postalCode":`${profile.zipCode}`,"town":`${profile.city}`});

let config = {
  method: 'post',
  url: `https://www.footlocker.com/api/v3/users/addresses/verification?timestamp=${timestamp()}`,
  headers: { 
    'authority': 'www.footlocker.com', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'accept': 'application/json', 
    'x-csrf-token': `${grabbedCSRF}`, 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
    'x-fl-request-id': `${create_request_ID()}`, 
    'content-type': 'application/json', 
    //'sec-gpc': '1', 
    'origin': 'https://www.footlocker.com', 
    'sec-fetch-site': 'same-origin', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://www.footlocker.com/checkout', 
    'accept-language': 'en-US,en;q=0.9', 
    'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1610660557356; s_cc=true; _pxvid=6b0086a1-56b1-11eb-9435-0242ac12000f; userVIP=unknown; userStatus=guest; janrainSSO_session=session; IR_gbd=footlocker.com; _mibhv=anon-1610660559021-611437609_2389; _scid=c2a7d255-9444-4860-9978-868b2c85d729; sc.ASP.NET_SESSIONID=hpsa4hre0xd5sbljbae50bhg; _fbp=fb.1.1610660559346.473920142; sc.UserId=24df6f8d-f92f-4e88-acbd-3efdcd8c1f62; _gcl_au=1.1.577915812.1610660559; _ga=GA1.2.541062857.1610660560; __zlcmid=129jjeoIXzp7rxZ; BVBRANDID=9dae50fb-6d93-42f0-bd22-5799a7cd22ba; BVImplmain_site=8001; s_pr_tbe66=1610660625425; ku1-sid=n0IajBbMsAZpDmkxX36Ym; ku1-vid=b107fe80-f399-d08e-fb63-12d8ca7fbde3; cart-guid=${cartGUID}; s_pr_tbe67=1610660630649; rskxRunCookie=0; rCookie=xrluojk3jpszxp8cmtjy1mkjxdr6dn; _pin_unauth=dWlkPU9XUXpNR1EyTjJJdFltTXlZeTAwTnpGbUxXSmlPR1l0WWpsak5tUmtOVEF4TlRndw; bluecoreNV=false; xyz_cr_100238_et_100==NaN&cr=100238&et=100; s_pr_tbe68=1610994616214; _gid=GA1.2.1003491023.1611242341; _sctr=1|1611205200000; JSESSIONID=7fh6joekx2kz1q09k9hs5csfm.fzcexflapipdb648881; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600354%26vn%3D22; s_invisit=true; IR_PI=6bf7e3c8-56b1-11eb-982a-12cfcb81d2fc%7C1611363723228; mbox=PC#93a201fb353647f5bc624c79d3a790fc.34_0#1674523911|session#8968fe017f18486491df900369fc76a0#1611279181; aa_pageHistory=[{"n":"FL: W: PDP","t":"Product","p":"/product/nike-elite-crew-socks/622100.html"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; _uetsid=fd1ce1c05bfb11eba2ba33bc936b44e2; _uetvid=6c3b2a3056b111eb8e4cfd8cbf3db3db; IR_11068=1611279112334%7C2193747%7C1611277323228%7C%7C; _derived_epik=dj0yJnU9ajd5Z3FhRmJxbmRIMWRCWk9nbGJ0QUFPdUMyOXpOOGcmbj1mdjAyaDM4a3BDcVlwYjROb0tZMmZBJm09NyZ0PUFBQUFBR0FLS3dn; lastRskxRun=1611279112952; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217702d9b8bcb47-08f3b77cbcf604-31346d-1fa400-17702d9b8bde67%22%2C%22bc_persist_updated%22%3A%201611279751224%2C%22event_lang%22%3A%20%22en%22%2C%22bc_id%22%3A%20925531239%7D; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-432600572%7CMCIDTS%7C18649%7CMCMID%7C47719650416069447731046573673280787188%7CMCAAMLH-1611884551%7C7%7CMCAAMB-1611884551%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1611286951s%7CNONE%7CMCSYNCSOP%7C411-18649%7CvVersion%7C4.5.2%7CMCCIDH%7C1811066100; datadome=MU5bHeh07uPlR37T.ThABxz2dsPI4fjj~Gv5-.33rCvUEh6F20oZ3pnn~fd1ueVc~_q~lOEUrWlRRn_XD0fVSIsn2YVOjwrKR58bUQA13i; s_lv=1611279788061; s_sq=footlockerglobalprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dfl%25253A%252520w%25253A%252520checkout%2526link%253DSAVE%252520%252526%252520CONTINUE%2526region%253Dstep2%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dfl%25253A%252520w%25253A%252520checkout%2526pidt%253D1%2526oid%253Dfunctionan%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DBUTTON; datadome=Hz_swNzAY_6VJP7xMst2f6XXYy1EQT.20di.XlG_qqlaXWQioccHA2KO~uqbp4zncWgW~-Z_TVVDHZ5u9sqPvL1Wf9GEPWTkxzhuYuln6m`
  },
  data : data
};

  try {
    res = await axios(config)
  }
  catch (err) {
    console.log(err)
    //console.log(getDateTime() + 'Error Submitting Shipping....');
    //delay(errorDelay)
    //send_ship_1()
  }
}
async function send_ship_2() {
    let data = JSON.stringify({"shippingAddress":{"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`,"email":false,"phone":`${profile.phoneNumber}`,"country":{"isocode":`${profile.countryAbr}`,"name":`${profile.country}`},"id":null,"setAsBilling":true,"region":{"countryIso":`${profile.countryAbr}`,"isocode":`${profile.countryAbr + '-' + profile.stateAbr}`,"isocodeShort":`${profile.stateAbr}`,"name":`${profile.state}`},"type":"default","LoqateSearch":"","line1":`${profile.address}`,"postalCode":`${profile.zipCode}`,"town":`${profile.city}`,"regionFPO":null,"shippingAddress":true,"recordType":"S"}});

let config = {
  method: 'post',
  url: `https://www.footlocker.com/api/users/carts/current/addresses/shipping?timestamp=${timestamp()}`,
  headers: { 
    'authority': 'www.footlocker.com', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'accept': 'application/json', 
    'x-csrf-token': `${grabbedCSRF}`, 
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
    'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1610660557356; s_cc=true; _pxvid=6b0086a1-56b1-11eb-9435-0242ac12000f; userVIP=unknown; userStatus=guest; janrainSSO_session=session; IR_gbd=footlocker.com; _mibhv=anon-1610660559021-611437609_2389; _scid=c2a7d255-9444-4860-9978-868b2c85d729; sc.ASP.NET_SESSIONID=hpsa4hre0xd5sbljbae50bhg; _fbp=fb.1.1610660559346.473920142; sc.UserId=24df6f8d-f92f-4e88-acbd-3efdcd8c1f62; _gcl_au=1.1.577915812.1610660559; _ga=GA1.2.541062857.1610660560; __zlcmid=129jjeoIXzp7rxZ; BVBRANDID=9dae50fb-6d93-42f0-bd22-5799a7cd22ba; BVImplmain_site=8001; s_pr_tbe66=1610660625425; ku1-sid=n0IajBbMsAZpDmkxX36Ym; ku1-vid=b107fe80-f399-d08e-fb63-12d8ca7fbde3; cart-guid=${cartGUID}; s_pr_tbe67=1610660630649; rskxRunCookie=0; rCookie=xrluojk3jpszxp8cmtjy1mkjxdr6dn; _pin_unauth=dWlkPU9XUXpNR1EyTjJJdFltTXlZeTAwTnpGbUxXSmlPR1l0WWpsak5tUmtOVEF4TlRndw; bluecoreNV=false; xyz_cr_100238_et_100==NaN&cr=100238&et=100; s_pr_tbe68=1610994616214; _gid=GA1.2.1003491023.1611242341; _sctr=1|1611205200000; JSESSIONID=7fh6joekx2kz1q09k9hs5csfm.fzcexflapipdb648881; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600354%26vn%3D22; s_invisit=true; IR_PI=6bf7e3c8-56b1-11eb-982a-12cfcb81d2fc%7C1611363723228; mbox=PC#93a201fb353647f5bc624c79d3a790fc.34_0#1674523911|session#8968fe017f18486491df900369fc76a0#1611279181; aa_pageHistory=[{"n":"FL: W: PDP","t":"Product","p":"/product/nike-elite-crew-socks/622100.html"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; _uetsid=fd1ce1c05bfb11eba2ba33bc936b44e2; _uetvid=6c3b2a3056b111eb8e4cfd8cbf3db3db; IR_11068=1611279112334%7C2193747%7C1611277323228%7C%7C; _derived_epik=dj0yJnU9ajd5Z3FhRmJxbmRIMWRCWk9nbGJ0QUFPdUMyOXpOOGcmbj1mdjAyaDM4a3BDcVlwYjROb0tZMmZBJm09NyZ0PUFBQUFBR0FLS3dn; lastRskxRun=1611279112952; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217702d9b8bcb47-08f3b77cbcf604-31346d-1fa400-17702d9b8bde67%22%2C%22bc_persist_updated%22%3A%201611279751224%2C%22event_lang%22%3A%20%22en%22%2C%22bc_id%22%3A%20925531239%7D; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-432600572%7CMCIDTS%7C18649%7CMCMID%7C47719650416069447731046573673280787188%7CMCAAMLH-1611884551%7C7%7CMCAAMB-1611884551%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1611286951s%7CNONE%7CMCSYNCSOP%7C411-18649%7CvVersion%7C4.5.2%7CMCCIDH%7C1811066100; s_lv=1611279788061; s_sq=footlockerglobalprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dfl%25253A%252520w%25253A%252520checkout%2526link%253DSAVE%252520%252526%252520CONTINUE%2526region%253Dstep2%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dfl%25253A%252520w%25253A%252520checkout%2526pidt%253D1%2526oid%253Dfunctionan%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DBUTTON; datadome=R2meE8TmeWGVMHmm2.7yV63i2AZCQPnT_YQHb.YG-oaWasaeaJxCQyyfLc.eMnpBWfAu-KYtEAr9ZGzgszV.TitkItdNMDcr9d0KZ0krgw; datadome=Hz_swNzAY_6VJP7xMst2f6XXYy1EQT.20di.XlG_qqlaXWQioccHA2KO~uqbp4zncWgW~-Z_TVVDHZ5u9sqPvL1Wf9GEPWTkxzhuYuln6m`
  },
  data : data
};

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(getDateTime() + 'Error Submitting Shipping....');
  delay(errorDelay)
  send_ship_2()
});

}
async function send_ship_3() {
    let data = JSON.stringify({"setAsDefaultBilling":false,"setAsDefaultShipping":false,"firstName":`${profile.firstName}`,"lastName":`${profile.lastName}`,"email":false,"phone":`${profile.phoneNumber}`,"country":{"isocode":`${profile.countryAbr}`,"name":`${profile.country}`},"id":null,"setAsBilling":false,"region":{"countryIso":`${profile.countryAbr}`,"isocode":`${profile.countryAbr + '-' + profile.stateAbr}`,"isocodeShort":`${profile.stateAbr}`,"name":`${profile.state}`},"type":"default","LoqateSearch":"","line1":`${profile.address}`,"postalCode":`${profile.zipCode}`,"town":`${profile.city}`,"regionFPO":null,"shippingAddress":true,"recordType":"S"});

let config = {
  method: 'post',
  url: `https://www.footlocker.com/api/users/carts/current/set-billing?timestamp=${timestamp()}`,
  headers: { 
    'authority': 'www.footlocker.com', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'accept': 'application/json', 
    'x-csrf-token': `${grabbedCSRF}`, 
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
    'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1610660557356; s_cc=true; _pxvid=6b0086a1-56b1-11eb-9435-0242ac12000f; userVIP=unknown; userStatus=guest; janrainSSO_session=session; IR_gbd=footlocker.com; _mibhv=anon-1610660559021-611437609_2389; _scid=c2a7d255-9444-4860-9978-868b2c85d729; sc.ASP.NET_SESSIONID=hpsa4hre0xd5sbljbae50bhg; _fbp=fb.1.1610660559346.473920142; sc.UserId=24df6f8d-f92f-4e88-acbd-3efdcd8c1f62; _gcl_au=1.1.577915812.1610660559; _ga=GA1.2.541062857.1610660560; __zlcmid=129jjeoIXzp7rxZ; BVBRANDID=9dae50fb-6d93-42f0-bd22-5799a7cd22ba; BVImplmain_site=8001; s_pr_tbe66=1610660625425; ku1-sid=n0IajBbMsAZpDmkxX36Ym; ku1-vid=b107fe80-f399-d08e-fb63-12d8ca7fbde3; cart-guid=${cartGUID}; s_pr_tbe67=1610660630649; rskxRunCookie=0; rCookie=xrluojk3jpszxp8cmtjy1mkjxdr6dn; _pin_unauth=dWlkPU9XUXpNR1EyTjJJdFltTXlZeTAwTnpGbUxXSmlPR1l0WWpsak5tUmtOVEF4TlRndw; bluecoreNV=false; xyz_cr_100238_et_100==NaN&cr=100238&et=100; s_pr_tbe68=1610994616214; _gid=GA1.2.1003491023.1611242341; _sctr=1|1611205200000; JSESSIONID=7fh6joekx2kz1q09k9hs5csfm.fzcexflapipdb648881; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600354%26vn%3D22; s_invisit=true; IR_PI=6bf7e3c8-56b1-11eb-982a-12cfcb81d2fc%7C1611363723228; mbox=PC#93a201fb353647f5bc624c79d3a790fc.34_0#1674523911|session#8968fe017f18486491df900369fc76a0#1611279181; aa_pageHistory=[{"n":"FL: W: PDP","t":"Product","p":"/product/nike-elite-crew-socks/622100.html"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; _uetsid=fd1ce1c05bfb11eba2ba33bc936b44e2; _uetvid=6c3b2a3056b111eb8e4cfd8cbf3db3db; IR_11068=1611279112334%7C2193747%7C1611277323228%7C%7C; _derived_epik=dj0yJnU9ajd5Z3FhRmJxbmRIMWRCWk9nbGJ0QUFPdUMyOXpOOGcmbj1mdjAyaDM4a3BDcVlwYjROb0tZMmZBJm09NyZ0PUFBQUFBR0FLS3dn; lastRskxRun=1611279112952; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217702d9b8bcb47-08f3b77cbcf604-31346d-1fa400-17702d9b8bde67%22%2C%22bc_persist_updated%22%3A%201611279751224%2C%22event_lang%22%3A%20%22en%22%2C%22bc_id%22%3A%20925531239%7D; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-432600572%7CMCIDTS%7C18649%7CMCMID%7C47719650416069447731046573673280787188%7CMCAAMLH-1611884551%7C7%7CMCAAMB-1611884551%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1611286951s%7CNONE%7CMCSYNCSOP%7C411-18649%7CvVersion%7C4.5.2%7CMCCIDH%7C1811066100; s_lv=1611279789137; s_sq=%5B%5BB%5D%5D; datadome=_.TKIBQ.bUkcdlDRh7KpHrCcyypiWERc0IAlviFyYM0Wvs0wzp9azT-ato7ezOvaeV9s4T6eMhBPo5p2gYXa~BEtUG1ABHsuvyRbWm.QEO; JSESSIONID=yohftpw443oi56kss7xc2ysp.fzcexflapipdb648881; datadome=8FiftisGNbuhg9n1G4LY-VeLtIf-Z5HRSAiUh_8Dj82cvabu2phAi_kjyQeZkz__MFgROJ2FY5P0LnFey_1C.qf6iIE-TqP5~5-sPmDG8H`
  },
  data : data
};

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(getDateTime() + 'Error Submitting Shipping....');
  delay(errorDelay)
  send_ship_3()
});

}
async function get_deliveryMode() {
    let config = {
        method: 'get',
        url: `https://www.footlocker.com/api/users/carts/current/deliverymodes?countryCode=${profile.countryAbr}&stateCode=${profile.stateAbr}&timestamp=${timestamp()}`,
        headers: { 
          'authority': 'www.footlocker.com', 
          'pragma': 'no-cache', 
          'cache-control': 'no-cache', 
          'accept': 'application/json', 
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
          'x-fl-request-id': `${create_request_ID()}`, 
          'sec-gpc': '1', 
          'sec-fetch-site': 'same-origin', 
          'sec-fetch-mode': 'cors', 
          'sec-fetch-dest': 'empty', 
          'referer': 'https://www.footlocker.com/checkout', 
          'accept-language': 'en-US,en;q=0.9', 
          'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1610660557356; s_cc=true; _pxvid=6b0086a1-56b1-11eb-9435-0242ac12000f; userVIP=unknown; userStatus=guest; janrainSSO_session=session; IR_gbd=footlocker.com; _mibhv=anon-1610660559021-611437609_2389; _scid=c2a7d255-9444-4860-9978-868b2c85d729; sc.ASP.NET_SESSIONID=hpsa4hre0xd5sbljbae50bhg; _fbp=fb.1.1610660559346.473920142; sc.UserId=24df6f8d-f92f-4e88-acbd-3efdcd8c1f62; _gcl_au=1.1.577915812.1610660559; _ga=GA1.2.541062857.1610660560; __zlcmid=129jjeoIXzp7rxZ; BVBRANDID=9dae50fb-6d93-42f0-bd22-5799a7cd22ba; BVImplmain_site=8001; s_pr_tbe66=1610660625425; ku1-sid=n0IajBbMsAZpDmkxX36Ym; ku1-vid=b107fe80-f399-d08e-fb63-12d8ca7fbde3; cart-guid=${cartGUID}; s_pr_tbe67=1610660630649; rskxRunCookie=0; rCookie=xrluojk3jpszxp8cmtjy1mkjxdr6dn; _pin_unauth=dWlkPU9XUXpNR1EyTjJJdFltTXlZeTAwTnpGbUxXSmlPR1l0WWpsak5tUmtOVEF4TlRndw; bluecoreNV=false; xyz_cr_100238_et_100==NaN&cr=100238&et=100; s_pr_tbe68=1610994616214; _gid=GA1.2.1003491023.1611242341; _sctr=1|1611205200000; JSESSIONID=7fh6joekx2kz1q09k9hs5csfm.fzcexflapipdb648881; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600354%26vn%3D22; s_invisit=true; IR_PI=6bf7e3c8-56b1-11eb-982a-12cfcb81d2fc%7C1611363723228; mbox=PC#93a201fb353647f5bc624c79d3a790fc.34_0#1674523911|session#8968fe017f18486491df900369fc76a0#1611279181; aa_pageHistory=[{"n":"FL: W: PDP","t":"Product","p":"/product/nike-elite-crew-socks/622100.html"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; _uetsid=fd1ce1c05bfb11eba2ba33bc936b44e2; _uetvid=6c3b2a3056b111eb8e4cfd8cbf3db3db; IR_11068=1611279112334%7C2193747%7C1611277323228%7C%7C; _derived_epik=dj0yJnU9ajd5Z3FhRmJxbmRIMWRCWk9nbGJ0QUFPdUMyOXpOOGcmbj1mdjAyaDM4a3BDcVlwYjROb0tZMmZBJm09NyZ0PUFBQUFBR0FLS3dn; lastRskxRun=1611279112952; s_sq=%5B%5BB%5D%5D; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217702d9b8bcb47-08f3b77cbcf604-31346d-1fa400-17702d9b8bde67%22%2C%22bc_persist_updated%22%3A%201611279751224%2C%22event_lang%22%3A%20%22en%22%2C%22bc_id%22%3A%20925531239%7D; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-432600572%7CMCIDTS%7C18649%7CMCMID%7C47719650416069447731046573673280787188%7CMCAAMLH-1611884551%7C7%7CMCAAMB-1611884551%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1611286951s%7CNONE%7CMCSYNCSOP%7C411-18649%7CvVersion%7C4.5.2%7CMCCIDH%7C1811066100; s_lv=1611279753293; _gali=ShippingAddress_text_line1; datadome=MU5bHeh07uPlR37T.ThABxz2dsPI4fjj~Gv5-.33rCvUEh6F20oZ3pnn~fd1ueVc~_q~lOEUrWlRRn_XD0fVSIsn2YVOjwrKR58bUQA13i; datadome=Hz_swNzAY_6VJP7xMst2f6XXYy1EQT.20di.XlG_qqlaXWQioccHA2KO~uqbp4zncWgW~-Z_TVVDHZ5u9sqPvL1Wf9GEPWTkxzhuYuln6m; JSESSIONID=8lzt4ak2r94v84g1ugowwtb.fzcexflapipdb648881`
        }
      };
      
      axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(getDateTime() + 'Error Getting Delivery....');
        delay(errorDelay)
        get_deliveryMode()
      });
      
}
async function send_devliveryMode() {
    let data = JSON.stringify({"deliveryModeId":"fl-standard"});

let config = {
  method: 'put',
  url: `https://www.footlocker.com/api/users/carts/current/deliverymode?timestamp=${timestamp()}`,
  headers: { 
    'authority': 'www.footlocker.com', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'accept': 'application/json', 
    'x-csrf-token': `${grabbedCSRF}`, 
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
    'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1610660557356; s_cc=true; _pxvid=6b0086a1-56b1-11eb-9435-0242ac12000f; userVIP=unknown; userStatus=guest; janrainSSO_session=session; IR_gbd=footlocker.com; _mibhv=anon-1610660559021-611437609_2389; _scid=c2a7d255-9444-4860-9978-868b2c85d729; sc.ASP.NET_SESSIONID=hpsa4hre0xd5sbljbae50bhg; _fbp=fb.1.1610660559346.473920142; sc.UserId=24df6f8d-f92f-4e88-acbd-3efdcd8c1f62; _gcl_au=1.1.577915812.1610660559; _ga=GA1.2.541062857.1610660560; __zlcmid=129jjeoIXzp7rxZ; BVBRANDID=9dae50fb-6d93-42f0-bd22-5799a7cd22ba; BVImplmain_site=8001; s_pr_tbe66=1610660625425; ku1-sid=n0IajBbMsAZpDmkxX36Ym; ku1-vid=b107fe80-f399-d08e-fb63-12d8ca7fbde3; cart-guid=${cartGUID}; s_pr_tbe67=1610660630649; rskxRunCookie=0; rCookie=xrluojk3jpszxp8cmtjy1mkjxdr6dn; _pin_unauth=dWlkPU9XUXpNR1EyTjJJdFltTXlZeTAwTnpGbUxXSmlPR1l0WWpsak5tUmtOVEF4TlRndw; bluecoreNV=false; xyz_cr_100238_et_100==NaN&cr=100238&et=100; s_pr_tbe68=1610994616214; _gid=GA1.2.1003491023.1611242341; _sctr=1|1611205200000; JSESSIONID=7fh6joekx2kz1q09k9hs5csfm.fzcexflapipdb648881; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600354%26vn%3D22; s_invisit=true; IR_PI=6bf7e3c8-56b1-11eb-982a-12cfcb81d2fc%7C1611363723228; mbox=PC#93a201fb353647f5bc624c79d3a790fc.34_0#1674523911|session#8968fe017f18486491df900369fc76a0#1611279181; aa_pageHistory=[{"n":"FL: W: PDP","t":"Product","p":"/product/nike-elite-crew-socks/622100.html"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; _uetsid=fd1ce1c05bfb11eba2ba33bc936b44e2; _uetvid=6c3b2a3056b111eb8e4cfd8cbf3db3db; IR_11068=1611279112334%7C2193747%7C1611277323228%7C%7C; _derived_epik=dj0yJnU9ajd5Z3FhRmJxbmRIMWRCWk9nbGJ0QUFPdUMyOXpOOGcmbj1mdjAyaDM4a3BDcVlwYjROb0tZMmZBJm09NyZ0PUFBQUFBR0FLS3dn; lastRskxRun=1611279112952; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217702d9b8bcb47-08f3b77cbcf604-31346d-1fa400-17702d9b8bde67%22%2C%22bc_persist_updated%22%3A%201611279751224%2C%22event_lang%22%3A%20%22en%22%2C%22bc_id%22%3A%20925531239%7D; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-432600572%7CMCIDTS%7C18649%7CMCMID%7C47719650416069447731046573673280787188%7CMCAAMLH-1611884551%7C7%7CMCAAMB-1611884551%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1611286951s%7CNONE%7CMCSYNCSOP%7C411-18649%7CvVersion%7C4.5.2%7CMCCIDH%7C1811066100; s_sq=%5B%5BB%5D%5D; datadome=1iHjgiX7Dh7vU8H-nYBL97CSa5mfC16OFdIgtfR-L6VuIvoVeWMZd9Ruwu-b0zr_ntfOOie26bvcB2lU9LilPHJ3OD4rLu8vIR7HsuaZlg; s_lv=1611279789996; datadome=Hz_swNzAY_6VJP7xMst2f6XXYy1EQT.20di.XlG_qqlaXWQioccHA2KO~uqbp4zncWgW~-Z_TVVDHZ5u9sqPvL1Wf9GEPWTkxzhuYuln6m`
  },
  data : data
};


 try {
  response = await axios(config)
 } catch(err) {
  console.log(getDateTime() + 'Error Sending Delivery....')
  delay(errorDelay)
  send_devliveryMode()
 }
}
async function send_person() {
    let data = JSON.stringify({"email":profile.email,"firstName":profile.firstName,"lastName":profile.lastName});

let config = {
  method: 'put',
  url: `https://www.footlocker.com/api/users/carts/current/pickperson?timestamp=${timestamp()}`,
  headers: { 
    'authority': 'www.footlocker.com', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'accept': 'application/json', 
    'x-csrf-token': `${grabbedCSRF}`, 
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
    'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1610660557356; s_cc=true; _pxvid=6b0086a1-56b1-11eb-9435-0242ac12000f; userVIP=unknown; userStatus=guest; janrainSSO_session=session; IR_gbd=footlocker.com; _mibhv=anon-1610660559021-611437609_2389; _scid=c2a7d255-9444-4860-9978-868b2c85d729; sc.ASP.NET_SESSIONID=hpsa4hre0xd5sbljbae50bhg; _fbp=fb.1.1610660559346.473920142; sc.UserId=24df6f8d-f92f-4e88-acbd-3efdcd8c1f62; _gcl_au=1.1.577915812.1610660559; _ga=GA1.2.541062857.1610660560; __zlcmid=129jjeoIXzp7rxZ; BVBRANDID=9dae50fb-6d93-42f0-bd22-5799a7cd22ba; BVImplmain_site=8001; s_pr_tbe66=1610660625425; ku1-sid=n0IajBbMsAZpDmkxX36Ym; ku1-vid=b107fe80-f399-d08e-fb63-12d8ca7fbde3; cart-guid=${cartGUID}; s_pr_tbe67=1610660630649; rskxRunCookie=0; rCookie=xrluojk3jpszxp8cmtjy1mkjxdr6dn; _pin_unauth=dWlkPU9XUXpNR1EyTjJJdFltTXlZeTAwTnpGbUxXSmlPR1l0WWpsak5tUmtOVEF4TlRndw; bluecoreNV=false; xyz_cr_100238_et_100==NaN&cr=100238&et=100; s_pr_tbe68=1610994616214; _gid=GA1.2.1003491023.1611242341; _sctr=1|1611205200000; JSESSIONID=7fh6joekx2kz1q09k9hs5csfm.fzcexflapipdb648881; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600354%26vn%3D22; s_invisit=true; IR_PI=6bf7e3c8-56b1-11eb-982a-12cfcb81d2fc%7C1611363723228; mbox=PC#93a201fb353647f5bc624c79d3a790fc.34_0#1674523911|session#8968fe017f18486491df900369fc76a0#1611279181; aa_pageHistory=[{"n":"FL: W: PDP","t":"Product","p":"/product/nike-elite-crew-socks/622100.html"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; _uetsid=fd1ce1c05bfb11eba2ba33bc936b44e2; _uetvid=6c3b2a3056b111eb8e4cfd8cbf3db3db; IR_11068=1611279112334%7C2193747%7C1611277323228%7C%7C; _derived_epik=dj0yJnU9ajd5Z3FhRmJxbmRIMWRCWk9nbGJ0QUFPdUMyOXpOOGcmbj1mdjAyaDM4a3BDcVlwYjROb0tZMmZBJm09NyZ0PUFBQUFBR0FLS3dn; lastRskxRun=1611279112952; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217702d9b8bcb47-08f3b77cbcf604-31346d-1fa400-17702d9b8bde67%22%2C%22bc_persist_updated%22%3A%201611279751224%2C%22event_lang%22%3A%20%22en%22%2C%22bc_id%22%3A%20925531239%7D; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-432600572%7CMCIDTS%7C18649%7CMCMID%7C47719650416069447731046573673280787188%7CMCAAMLH-1611884551%7C7%7CMCAAMB-1611884551%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1611286951s%7CNONE%7CMCSYNCSOP%7C411-18649%7CvVersion%7C4.5.2%7CMCCIDH%7C1811066100; datadome=8a-FHSTQGErGHofU7t~LX6zGnBPtTIf81jEcHHjUI-dpPu0q9r8toohcxPo1c_DXrUWMO0SeM~n.GwgjmYp0LeTz3B5Q9Bq~96ejPA_xZA; s_lv=1611280248386; s_sq=footlockerglobalprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dfl%25253A%252520w%25253A%252520checkout%2526link%253DPLACE%252520ORDER%2526region%253Dmain%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dfl%25253A%252520w%25253A%252520checkout%2526pidt%253D1%2526oid%253Dfunctionan%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DBUTTON; datadome=Hz_swNzAY_6VJP7xMst2f6XXYy1EQT.20di.XlG_qqlaXWQioccHA2KO~uqbp4zncWgW~-Z_TVVDHZ5u9sqPvL1Wf9GEPWTkxzhuYuln6m`
  },
  data : data
};

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
  console.log(getDateTime() + 'Submitted Billing....')
})
.catch(function (error) {
  console.log(getDateTime() + 'Error Submitting Billing....')
  delay(errorDelay)
  send_person()
});

}
async function send_payment() {
  console.log(getDateTime() + 'Submitting Payment....')
	// adyen key? 10001|E348EBBFF1F0C3FCD819E9433A29D1ED7218D5C48EAFF60F58CE3ADD10F34A3D2FA7FEF3248BFED219534DCC83D45578F24BA9FA870FC4DE900CBCB92E4AB1988F9DCBA93B7392D77E7550B1A9E91F66C79358EAF8808230414A9F3ECB9129F7369E95A462EA99DB52167E4583D06975DE1C28100355B1CEA372B83EDD19DBBFA1A4F1566F656DC8F9D93D4FA5341B4F3D8CA94F56CDF8F666C1D6F4AA077BC998FC3A3F74BED84B34CD6B9888D831B0546272A185F9DA9CF8C09CCDA8344A0F7CE5291D13FE6DF24E5C51FA8E35A0885E7113DB45DB121A54E367E7C9695CE24FE7FCBCA305363B57CFEA8B70DBA192CCD9BC68B2328D3465DD9C2960AEA93F
    let data = JSON.stringify({"preferredLanguage":"en","termsAndCondition":false,"deviceId":"","encryptedCardNumber":`${encryptedCardNumber}`,"encryptedExpiryMonth":`${encryptedExpiryMonth}`,"encryptedExpiryYear":`${encryptedExpiryYear}`,"encryptedSecurityCode":`${encryptedCVC}`,"paymentMethod":"CREDITCARD","returnUrl":`https://www.footlocker.com/${ReferID}/checkout`,"browserInfo":{"screenWidth":1920,"screenHeight":1080,"colorDepth":24,"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36","timeZoneOffset":300,"language":"en-US","javaEnabled":false}});

let config = {
  method: 'post',
  url: `https://www.footlocker.com/api/v2/users/orders?timestamp=${timestamp()}`,
  headers: { 
    'authority': 'www.footlocker.com', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'accept': 'application/json', 
    'x-csrf-token': `${grabbedCSRF}`, 
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36', 
    'x-fl-request-id':`${create_request_ID()}`, 
    'content-type': 'application/json', 
    'sec-gpc': '1', 
    'origin': 'https://www.footlocker.com', 
    'sec-fetch-site': 'same-origin', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://www.footlocker.com/checkout', 
    'accept-language': 'en-US,en;q=0.9', 
    'cookie': `at_check=true; AMCVS_40A3741F578E26BA7F000101%40AdobeOrg=1; s_pr_tbe65=1610660557356; s_cc=true; _pxvid=6b0086a1-56b1-11eb-9435-0242ac12000f; userVIP=unknown; userStatus=guest; janrainSSO_session=session; IR_gbd=footlocker.com; _mibhv=anon-1610660559021-611437609_2389; _scid=c2a7d255-9444-4860-9978-868b2c85d729; sc.ASP.NET_SESSIONID=hpsa4hre0xd5sbljbae50bhg; _fbp=fb.1.1610660559346.473920142; sc.UserId=24df6f8d-f92f-4e88-acbd-3efdcd8c1f62; _gcl_au=1.1.577915812.1610660559; _ga=GA1.2.541062857.1610660560; __zlcmid=129jjeoIXzp7rxZ; BVBRANDID=9dae50fb-6d93-42f0-bd22-5799a7cd22ba; BVImplmain_site=8001; s_pr_tbe66=1610660625425; ku1-sid=n0IajBbMsAZpDmkxX36Ym; ku1-vid=b107fe80-f399-d08e-fb63-12d8ca7fbde3; cart-guid=${cartGUID}; s_pr_tbe67=1610660630649; rskxRunCookie=0; rCookie=xrluojk3jpszxp8cmtjy1mkjxdr6dn; _pin_unauth=dWlkPU9XUXpNR1EyTjJJdFltTXlZeTAwTnpGbUxXSmlPR1l0WWpsak5tUmtOVEF4TlRndw; bluecoreNV=false; xyz_cr_100238_et_100==NaN&cr=100238&et=100; s_pr_tbe68=1610994616214; _gid=GA1.2.1003491023.1611242341; _sctr=1|1611205200000; JSESSIONID=7fh6joekx2kz1q09k9hs5csfm.fzcexflapipdb648881; s_vs=1; s_lv_s=Less%20than%201%20day; s_vnum=1612155600354%26vn%3D22; s_invisit=true; IR_PI=6bf7e3c8-56b1-11eb-982a-12cfcb81d2fc%7C1611363723228; mbox=PC#93a201fb353647f5bc624c79d3a790fc.34_0#1674523911|session#8968fe017f18486491df900369fc76a0#1611279181; aa_pageHistory=[{"n":"FL: W: PDP","t":"Product","p":"/product/nike-elite-crew-socks/622100.html"},{"n":"FL: W: Checkout","t":"Checkout","p":"/checkout"}]; _uetsid=fd1ce1c05bfb11eba2ba33bc936b44e2; _uetvid=6c3b2a3056b111eb8e4cfd8cbf3db3db; IR_11068=1611279112334%7C2193747%7C1611277323228%7C%7C; _derived_epik=dj0yJnU9ajd5Z3FhRmJxbmRIMWRCWk9nbGJ0QUFPdUMyOXpOOGcmbj1mdjAyaDM4a3BDcVlwYjROb0tZMmZBJm09NyZ0PUFBQUFBR0FLS3dn; lastRskxRun=1611279112952; mp_footlocker_mixpanel=%7B%22distinct_id%22%3A%20%2217702d9b8bcb47-08f3b77cbcf604-31346d-1fa400-17702d9b8bde67%22%2C%22bc_persist_updated%22%3A%201611279751224%2C%22event_lang%22%3A%20%22en%22%2C%22bc_id%22%3A%20925531239%7D; AMCV_40A3741F578E26BA7F000101%40AdobeOrg=-432600572%7CMCIDTS%7C18649%7CMCMID%7C47719650416069447731046573673280787188%7CMCAAMLH-1611884551%7C7%7CMCAAMB-1611884551%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1611286951s%7CNONE%7CMCSYNCSOP%7C411-18649%7CvVersion%7C4.5.2%7CMCCIDH%7C1811066100; s_lv=1611280248386; s_sq=footlockerglobalprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dfl%25253A%252520w%25253A%252520checkout%2526link%253DPLACE%252520ORDER%2526region%253Dmain%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dfl%25253A%252520w%25253A%252520checkout%2526pidt%253D1%2526oid%253Dfunctionan%252528%252529%25257B%25257D%2526oidt%253D2%2526ot%253DBUTTON; datadome=C6w8.iZLKfos3~EZDqX8POV9wHyaLmWFFhic.ljQlIg-DH4Zis4d9vQ-c7uapXn4Ysm5bz4iAmRAVYSQgoCbtoGohz_odVTtaUlSUUoeKx; datadome=Hz_swNzAY_6VJP7xMst2f6XXYy1EQT.20di.XlG_qqlaXWQioccHA2KO~uqbp4zncWgW~-Z_TVVDHZ5u9sqPvL1Wf9GEPWTkxzhuYuln6m1`
  },
  data : data
};
console.log(getDateTime() + 'Proccessing Order....')

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
  if(response.status == 200) {
    console.log(getDateTime() + 'Success....')

  }
})
.catch(function (error) {
  //console.log(error);
  console.log(getDateTime() + 'Declined....')
  delay(errorDelay)
  send_payment()

});
}

//grab_CSRF()
//add_to_cart()
//main()
//console.log(cartGUID)
//queue()
//grabbedCSRF
//send_zip()
//create_request_ID()
//get_auth()\
//grab_CSRF()
//console.log(timestamp())
grab_CSRF()