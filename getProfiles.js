const fs = require('fs');
FILENAME = './Billing Profiles.csv'

function getProfiles()
{
    res = []
    let textByLine = fs.readFileSync(FILENAME).toString().split("\n");
    //console.log(textByLine);
    const profsList = textByLine.map((line) => line.split(","));
    
    for (let i = 1; i < profsList.length; i++) {
        res.push({
            'profName':profsList[i][0],
            'email':profsList[i][1],
            'shipFirst':profsList[i][2],
            'shipLast':profsList[i][3],
            'ship1':profsList[i][4],
            'ship2':profsList[i][5],
            'shipCountry':profsList[i][6],
            'shipCity':profsList[i][7],
            'shipState':profsList[i][8],
            'shipZip':profsList[i][9],
            'shipPhone':profsList[i][10],
            'cardNumber':profsList[i][11],
            'cardExp':profsList[i][12],
            'cardCVV':profsList[i][13],
            'nameOnCard':profsList[i][14],
            'differentBilling':profsList[i][15],
            'billFirst':profsList[i][16],
            'billLast':profsList[i][17],
            'bill1':profsList[i][18],
            'bill2':profsList[i][19],
            'billCountry':profsList[i][20],
            'billCity':profsList[i][21],
            'billState':profsList[i][22],
            'billZip':profsList[i][23],
            'billPhone':profsList[i][24].replace('\r',''),
        })
    }

    return res
}


module.exports.getProfiles = getProfiles;

