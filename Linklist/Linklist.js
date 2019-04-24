import Linklistnode from './Linklistnode';

// let Linklistnode=require('./Linklistnode');

class Linklist{
  constructor(){
    this.head=null;
  }

  append(value){

    // this.head=newNode;
      //head===null
      const newNode = new Linklistnode(value);
      let last=this.head;

      // newNode.next=null;

      if(this.head === null){
        this.head=newNode;
        last = this.head;
      }else{
        while(last.next){
          last=last.next;
          // console.log("if")
        }
        last.next=newNode;
      }


    return this;
  }
}
let o=new Linklist().append("hehe").append("feffe").append("guarav").append("jadw");
console.log(JSON.stringify(o));

// if(this.head === null){
//   this.head=newNode;
//   last = this.head;
// }else{
//   while(last.next){
//     last=last.next;
//   }
//   last.next=newNode;
// }


// other way
// if(this.head === null){
//   this.head=newNode;
//   // last = this.head;
// }
//   while(last && last.next){
//     last=last.next;
//     console.log('ig')
//   }
//   if(last){
//     last.next=newNode;
//   }
