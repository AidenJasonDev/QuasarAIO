


let nameNum = ['1','2','3','4','5']
//let nameNum = '5'
let dict = {
  "byName": [
    {
      "id": '1',
      "code": 'AW15',
      "fName": 'Aiden',
      "lName": 'Williams',
      "age": '15'
    },
    {
      "id": '2',
      "code": 'AW14',
      "fName": 'Andrea',
      "lName": 'Williams',
      "age": '14'
    },
    {
      "id": '3',
      "code": 'BO22',
      "fName": 'Brian',
      "lName": 'Ortiz',
      "age": '22'
    },
    {
      "id": '4',
      "code": 'BO17',
      "fName": 'Bryana',
      "lName": 'Ortiz',
      "age": '17'
    },
    {
      "id": '5',
      "code": 'EO15',
      "fName": 'Elias',
      "lName": 'Ortiz',
      "age": '15'
    },
  ]
}
let names = dict.byName
//console.log(names.length)




for(y = 0; y < nameNum; y++){
  for(x = 0; x < names.length; x++) {
    if(names[x].id == y) {
      let nameCode = names[x].code
      console.log(nameCode)
    }
    else{
      console.log('nah')
    }
  }
}
