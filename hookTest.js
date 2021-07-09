const axios = require("axios");

let userhook = 'https://discordapp.com/api/webhooks/766055188406337546/vUzGtrH1HxIHvNhQrd6VFqVvuRgBoRGfN1_5mUK1gdpevoW-r1huyRxMQlvXcrWbBn_8'
//const publichook = 'https://discord.com/api/webhooks/822240944723853333/4LFZWDU7nOKGdMo1TJyQb4zfZmPrXLYLw7gvlCE5k0Jny0TC0KnvvA9lFUiFuWOWGRrT'

let site = 'Footlocker'
let productName= 'Nike Elite Crew Socks'
let size = 'XL'
let profile = 'Test'
let email ='example@gmail.com'
let price = '$10.99'
let sku = '622100'
let time = '0.0s' // timer
let proxy = 'local'
let image = 'https://images.footlocker.com/pi/622100/zoom/622100.jpeg'
async function privateSuccessWebhook(){
  let data = JSON.stringify({
    "content": null,
    "embeds": [
      {
        "title": "Test Checkout",
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
            "value": `||${profile}||`,
            "inline": true
          },
          {
            "name": "Proxy",
            "value": `||${proxy}||`,
            "inline": true
          },
          {
            "name": "Email",
            "value": `||${email}||`,
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
