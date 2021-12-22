const axios = require('axios');
const jwt = require('jsonwebtoken');

module.exports = (email, pass) => {
    let token = jwt.sign({email: email, key: pass}, '7mURji6ojYYdHvvjP0', {expiresIn: 300})
    async function login(token, email, pass) {
        let data = ' '
        let config = {
            method: 'GET',
            url: `https://quasarapi.herokuapp.com/client/${email}`,
            headers: { 
              'Authorization': `Bearer ${token}`
            },
            data : data
        };

          try {
              let res = await axios(config)
              console.log(res)
              if(res.status == 200) {
                console.log('Flag1')
                console.log(res)
                if(res.data.client[0].key != pass) {
                    console.log('Flag2')
                    return 'Invalid Password'
                }
                else if(res.data.client[0].key === pass) {
                    console.log('Flag3')
                    if(res.data.client[0].instanceMax - res.data.client[0].instanceActive <= 0) {
                        console.log('Flag4')
                        return 'Max instances running, please close them or reset them in discord'
                    }
                    else {
                        console.log('Flag')
                        let data2 = [
                            {"propName": "instanceActive", "value": `${res.data.client[0].instanceActive + 1}`}
                        ]
                        let config2 = {
                            method: 'PATCH',
                            url: `https://quasarapi.herokuapp.com/client/${email}`,
                            headers: {
                                'Authorization': `Bearer ${token}`
                            },
                            data: data2
                        }
                        try {
                            let res = await axios(config2)
                            console.log('Flag14')
                            if(res.status == 200) {
                                console.log('Flag13')
                                console.log(res)
                                return 'Logged in successfully'
                            }
                            else if(res.status == 401) {
                                console.log('Flag12')
                                return 'Unauthorized, please contact an admin'
                            }
                            else {
                                console.log('Flag11')
                                return `Unknown Error: ${res.status}, please contact an admin : 4`
                            }

                        }
                        catch(err) {
                            console.log('Flag10')
                            return `Unknown Error: ${res.status}, please contact an admin : 3`
                        }
                    }
                }
                else {
                    console.log('Flag5')
                    return 'Unknown password error, please contact an admin'
                }
              }
              else if(res.status == 401) {
                console.log('Flag6')
                  return 'Unauthorized, please contact an admin'
              }
              else if(res.status == 404) {
                console.log('Flag7')
                  return 'No user found with that email'
              }
              else {
                console.log('Flag8')
                  return `Unknown Error: ${res.status}, please contact an admin : 2`
              }
          }
          catch(err) {
            console.log('Flag9')
            console.log(err)
                return `Unknown Error: ${err}, please contact an admin`
          }
    }
   return login(token, email, pass)
}