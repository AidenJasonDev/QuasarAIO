const axios = require("axios");

let userhook = 'https://discordapp.com/api/webhooks/766055188406337546/vUzGtrH1HxIHvNhQrd6VFqVvuRgBoRGfN1_5mUK1gdpevoW-r1huyRxMQlvXcrWbBn_8'
//const publichook = 'https://discord.com/api/webhooks/822240944723853333/4LFZWDU7nOKGdMo1TJyQb4zfZmPrXLYLw7gvlCE5k0Jny0TC0KnvvA9lFUiFuWOWGRrT'
let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let dayTime = 'AM'
// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();
if(hours > 12) {
  hours = hours - 12
  dayTime = 'PM'
}

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();



// prints date & time in YYYY-MM-DD HH:MM:SS format
let timeStamp = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + ' ' + dayTime


export const sendWebhook = () => {
  let data = JSON.stringify({
    "content": null,
    "embeds": [
      {
        "title": "",
        "color": 4264447,
        "fields": [
          {
            "name": "Test Success",
            "value": `Light Years Ahead`
          },
        ],
        "footer": {
          "text": `Quasar AIO  •  0.0.1(alpha)  •  ${timeStamp}`,
          "icon_url": "https://i.ibb.co/GQpFDXw/quasar-aio.png"
        },
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
    },
    data : data,

  };
  try {
  axios(config)
  

  }
  catch(err) {
   console.log(err)
  }
}
