//Object property shorthand

const name = 'Garima'
const userAge = 22


const user = {
    name,
    age : userAge,
    location: 'India'
}

console.log(user)



//Object Destructing

const product = {
    label  :'Red Notebook',
    price : 3,
    stock :201,
    salesPrice : undefined
}

// Primitive method
// const label = product.label
// const stock = product.stock

const transaction = (type, { label, stock=0} = {}) =>{
    console.log(type,label,stock)
}

transaction('order')