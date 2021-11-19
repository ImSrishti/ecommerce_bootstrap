export const cartReducer = (state,action) => {
    switch (action.type) {
       case "ADD_TO_CART":
           return {...state,
            cart:[
                ...state.cart,
                {...action.payload, qty: 1}
            ]}
        case "REMOVE_FROM_CART":
                return {...state,
                 cart: state.cart.filter((c)=> c.id !== action.payload.id),
                
                 }
    
        default:
            return state;
    }
}

//action contains two things one is type and second is payload ,
//payload contains the data that we want to put in state and manipulate the state