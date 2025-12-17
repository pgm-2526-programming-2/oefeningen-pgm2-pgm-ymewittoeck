
//VAT bij europese webshops
//BTW bij belgische webshops

const regionNotation = 'btw'


const product = {
    price: 25,
    name: 'Gameboy',
    [regionNotation]: 21
}

//
const productkeys = Object.keys(product)

product.color = 'red'
product.color = 'blue'
product[regionNotation] = 32

const productMap = new Map()
productMap.set('price', 25)
productMap.set('name', 'Gameboy')
productMap.set('color', 'red')
productMap.set('color', 'blue')

productMapLength = productMap.size

console.log(product, productMap)