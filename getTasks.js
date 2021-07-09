const fs = require('fs');
FILENAME = './tasks.csv'

function getTasks()
{
    res = []
    let textByLine = fs.readFileSync(FILENAME).toString().split("\n");

    const profsList = textByLine.map((line) => line.split(","));
    for (let i = 1; i < profsList.length; i++) {
        if (profsList[i][0]) {
            res.push({
                'site':profsList[i][0],
                'sku':profsList[i][1],
                'size':profsList[i][2],
                'proxyList':profsList[i][3],
                'prof':profsList[i][4],
                'delay':profsList[i][5],
                'mode':profsList[i][6].replace('\r','')
            })
        }
    }

    return res
}


module.exports.getTasks = getTasks;

