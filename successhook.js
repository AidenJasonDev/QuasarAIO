const webhook = require("webhook-discord");

let userhook = 'https://discordapp.com/api/webhooks/766055188406337546/vUzGtrH1HxIHvNhQrd6VFqVvuRgBoRGfN1_5mUK1gdpevoW-r1huyRxMQlvXcrWbBn_8'
//const publichook = 'https://discord.com/api/webhooks/822240944723853333/4LFZWDU7nOKGdMo1TJyQb4zfZmPrXLYLw7gvlCE5k0Jny0TC0KnvvA9lFUiFuWOWGRrT'

const Hook = new webhook.Webhook(userhook);
let site = 'Footlocker'
let product = 'Nike Elite Crew Socks'
let size = 'XL'
let profile = 'Test1'
let email ='example@gmail.com'
let price = '180 USD'
let sku = '622100'
let time = '0.0s' // timer
let proxy = '3.224.68.166:31112:paranoia:lO6SCJruloH2yHRr_country-UnitedStates_session-1b5kO7Lb'
let image = 'https://images.footlocker.com/pi/622100/zoom/622100.jpeg'
function privateSuccessWebhook(){
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
              "value": `||${profile.Name}||`,
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
            "url": "https://images.thdstatic.com/productImages/d6937a7a-aa6a-42dd-add3-f15891721c05/svn/gray-megacomfort-work-socks-mciskgxl-64_600.jpg"
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
  }
  privateSuccessWebhook()
  