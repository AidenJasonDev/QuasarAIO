const {Howl, Howler} = require('howler');


let  checkoutSound = new Howl({
  src: ['QZRCHECKOUT.mp3'],
  html5: true
});

checkoutSound.play()
