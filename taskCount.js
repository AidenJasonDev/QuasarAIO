const fs = require('fs')
const chalk = require("chalk");
FILENAME = './tasks.csv'

function taskCount() {
    tasks = [];
    let textByLine = fs.readFileSync(FILENAME).toString().split('\n');

    const taskList = textByLine.map((line) => line.split(','));

    for(let i = 1; i < taskList.length; i++) {
        tasks.push(taskList[i][0])
    }
    tasks = tasks.sort()
     current = null
     cnt = 0 
    for(let x = 0; x < tasks.length; x++) {
        if(tasks[x] != current) {
            if(cnt > 0) {
                console.log(chalk.hex('#643dff')('Imported ' + cnt + ' ' + current + ' Tasks'))
            }
            current = tasks[x];
            cnt = 1

        } else {
            cnt++
        }
    }
    if(cnt > 0 ) {
        console.log(chalk.hex('#643dff')('Imported ' + cnt + ' ' + current + ' Tasks'))
      
    }
}


module.exports.taskCount = taskCount;