const addItem = (product) => {
   return {
       type: "ADD_ITEM",
       payload: product,
   }
}

const removeItem = (product) => {
   return {
       type: "REMOVE_ITEM",
       payload: product,
   }
}

const increase = (product) => {
    return {
        type: "INCREASE",
        payload: product,
    }
 }
 
 const decrease = (product) => {
    return {
        type: "DECREASE",
        payload: product,
    }
 }

 const checkout = () => {
     return {
         type : "CHECKOUT" ,

     }
 }
 

 export {addItem, removeItem, increase, decrease , checkout}
 