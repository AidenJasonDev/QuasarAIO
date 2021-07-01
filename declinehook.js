const webhook = require("webhook-discord");

let userhook = 'https://discordapp.com/api/webhooks/766055188406337546/vUzGtrH1HxIHvNhQrd6VFqVvuRgBoRGfN1_5mUK1gdpevoW-r1huyRxMQlvXcrWbBn_8'
//let publichook = 'https://discord.com/api/webhooks/822240944723853333/4LFZWDU7nOKGdMo1TJyQb4zfZmPrXLYLw7gvlCE5k0Jny0TC0KnvvA9lFUiFuWOWGRrT'

const Hook = new webhook.Webhook(userhook);
let site = 'Footlocker'
let product = 'Nike Elite Crew Socks'
let size = 'XL'
let profile = 'Test1'
let email ='example@gmail.com'
let price = '$9.99'
let sku = '622100'
let time = '0.0s' // timer
let proxy = 'localhost'
let image = 'https://images.footlocker.com/pi/622100/zoom/622100.jpeg'
const msg = new webhook.MessageBuilder()
                .setName("QUASAR AIO")
                .setTitle(`Decline`)
                .setColor("#FF2C1E")
                .setThumbnail(image)
                .addField(`Site`, `${site}`)
                .addField(`SKU`, `${sku}`)
                .addField(`Link`, `https://www.footlocker.com/product/~/${sku}.html`)
                .addField(`Product`, `${product}`, true)
                .addField(`Size`, `${size}`, true)
                .addField(`Profile`, `||${profile}||`, true)
                .addField('Proxy', `||${proxy}||`)
                .addField(`Email`, `||${email}||`, true)
                .addField(`Price`, `${price}`)
                .setFooter('Quasar AIO Version: alpha')
Hook.send(msg);

