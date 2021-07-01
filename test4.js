/*
se = cookieJar.store.idx['www.footlocker.com']
                  ses = se['/'] */
ses = 'JSESSIONID=64kdgrnbm9dg29f86pc8vbxb.fzcexflapipdb698880; Path=/; HttpOnly'
                  x = ses.split('=')[1].split(";")[0]
                  console.log(x)
                  