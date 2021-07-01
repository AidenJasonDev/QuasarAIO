bmak = {
    get_cf_date: function () {
      return Date.now ? Date.now() : +new Date();
    }
  }
  
  function gen_sensor() {
    t = 0;
    try {
      t = bmak.get_cf_date();
    }
    catch(err) {
        null
    }
  }