const webhook = require("webhook-discord");
const csv = require('csvtojson');
csv().fromFile("./Settings.csv").then((jsonObj) =>{
    userHook = jsonObj[0].Webhook
    function WebhookTest(){

        const Hook = new webhook.Webhook(userHook);
        let site = 'Footlocker'
        let product = 'TEST PRODUCT'
        let size = 'N/A'
        let profile = 'Test1'
        let email ='example@gmail.com'
        let price = '$0.00'
        const msg = new webhook.MessageBuilder()
                        .setName("QUASAR AIO")
                        .setTitle(`SUCCESSFUL TEST`)
                        .setColor("#4111ff")
                        .addField(`Site`, `${site}`)
                        .addField(`Product`, `${product}`, true)
                        .addField(`Size`, `${size}`, true)
                        .addField(`Profile`, `||${profile}||`, true)
                        .addField(`Email`, `||${email}||`, true)
                        .addField(`Price`, `${price}`)
                        .setFooter('Quasar AIO Version: alpha')
        Hook.send(msg);

    }
    WebhookTest()
})
