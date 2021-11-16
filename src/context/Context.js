import React,{useReducer} from 'react'
import faker from "faker";
import { cartReducer } from './Reducer';
const Cart = React.createContext();
const Context = ({children}) => {

    const products = [...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([6,7,0,3,5]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1,2,3,4,5])
    }))

const [state, dispatch] = useReducer(cartReducer, {
    products: products ,
    cart:[]
})

console.log(products)
    return (
        <Cart.Provider value={{state,dispatch}}>
            {children}
        </Cart.Provider>
    )
}
//in index.js this component has wrapped App component
export default Context

export const CartState = () =>{
    return useContext(Cart); //useContext takes context so that we can access it accross the app
}