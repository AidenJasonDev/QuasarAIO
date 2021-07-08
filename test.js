let size = 'S XL'
let sizelist = size.split(' ')


function multiSize() { // FIXXXXX
  //stamp(`[Task ${cluster.worker.id}]`,'Selecting Size....','act',false,productName)

  let min = sizelist.length - sizelist.length + 1
  let max = sizelist.length
  console.log(min,max)

  function between(min, max) {
   return Math.floor(
     Math.random() * (max - min) + min
   )
  }

  let sizeNum = between(min, max + 1)
  console.log(sizeNum)
  let listNum = sizeNum - 1
  console.log(listNum)
  let size = sizelist[listNum]
  console.log(size)
}

multiSize()
//node test
