class Node{
    constructor(value){
        this.head = value
        this.next = null
    }
}

class linkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        // console.log(newNode)
    }
    prepand(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
    }
}

const list = new linkedList(10)
list.append(11)
list.prepand(13)
console.log(list)



// // let list = {
// //   value: 1,
// //   next: {
// //     value: 2,
// //     next: {
// //       value: 3,
// //       next: {
// //         value: 4,
// //         next: null
// //       }
// //     }
// //   }
// // };

// let linkedList = { value: 1 }
// linkedList.next = { value: 2 }
// linkedList.next.next = null

// linkedList = {value: "hitesh", next: linkedList}

// linkedList.next = linkedList.next.next

// // // with noraml loop
// // function printList(list){
// //     let listData = list
// //     while(listData){
// //         console.log(listData.value)
// //         listData = listData.next
// //     }
// // }

// // using recursion
// function printList(list){
//     //// first solution
//     let listData = list;
//     // if(listData == null){
//     //     return;
//     // }
//     // console.log(listData.value)
//     // printList(listData.next)

//     //// seccond solution effective way
//     console.log(listData.value)
//     if(listData.next){
//         printList(listData.next)
//     }
    
// }

// printList(linkedList)

// console.log(linkedList)

// class linkedListClass{
//     constructor(value){
//         this.head = value
//         this.next = null
//     }
// }

// let linkedlist = new linkedListClass(10)

// console.log(linkedlist)