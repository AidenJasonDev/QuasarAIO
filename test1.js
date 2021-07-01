let tops = 'Tops/Sweaters'
let categories = {
	"all": res.data.products_and_categories,
	"new":res.data.products_and_categories.new,
	"jackets":res.data.products_and_categories.Jackets,
	"shirts":res.data.products_and_categories.Shirts,
	"tops/sweaters":res.data.products_and_categories[tops],
	"sweatshirts":res.data.products_and_categories.Sweatshirts,
	"pants":res.data.products_and_categories.Pants,
	"shorts":res.data.products_and_categories.Shorts,
	"hats":res.data.products_and_categories.Hats,
	"bags":res.data.products_and_categories.Bags,
	"accessories":res.data.products_and_categories.Accessories,
	"shoes":res.data.products_and_categories.Shoes,
	"skate":res.data.products_and_categories.Skate,
}
let categoryProducts = categories[category]
for(let x = 0; x < categoryProducts.length; x++) {
  if(categoryProducts[x].name.includes(sepKeywords[0])){
	console.log(categoryProducts[x].id)

  }
  else{
	stamp('Product Not Found')
  }
}
async function productDetails() {
 let config = {
   method: 'get',
   url: 'https://www.supremenewyork.com/shop/173890'
 }
 try{
  res = await axios(config)
  console.log(res.data)
 }
 catch(err)  {

 }
}
productDetails()