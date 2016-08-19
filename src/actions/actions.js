//定义一个change方法，将来把它绑定到props上

//  let actions = {
//     //action 
//     addItem: text => ({
//         type: "ADD_ITEM",
//         text
//     })

// };

// export default actions;

export let addItem =(id,text)=>({
    type:"ADD_ITEM",
    id,
    text
});