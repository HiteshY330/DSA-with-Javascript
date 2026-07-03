// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

let linkedList = { value: 1 }
linkedList.next = { value: 2 }
linkedList.next.next = null

linkedList = {value: "hitesh", next: linkedList}

linkedList.next = linkedList.next.next

// // with noraml loop
// function printList(list){
//     let listData = list
//     while(listData){
//         console.log(listData.value)
//         listData = listData.next
//     }
// }

// using recursion
function printList(list){
    //// first solution
    let listData = list;
    // if(listData == null){
    //     return;
    // }
    // console.log(listData.value)
    // printList(listData.next)

    //// seccond solution effective way
    console.log(listData.value)
    if(listData.next){
        printList(listData.next)
    }
    
}

printList(linkedList)

console.log(linkedList)
