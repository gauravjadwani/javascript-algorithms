import Linklistnode from './Linklistnode';

// let Linklistnode=require('./Linklistnode');

class Linklist{
  constructor(){
    this.head=null;//head pointer
  }
  createNode(value){
    const newNode = new Linklistnode(value);
    return newNode;
  }
  searchElement(value){
    let current=this.head;
    while(current){
      if(current.value === value){
        return "present";
      }
      current=current.next;
    }
    return "absent";
  }
  append(value){
      const newNode = new Linklistnode(value);
      let last=this.head;
      if(this.head === null){
        this.head=newNode;
        last = this.head;
      }else{
        while(last.next){
          last=last.next;
        }
        last.next=newNode;
      }
    return this;
  }
  prepend(value){
    const node=this.createNode(value);
    const temp=this.head;
    node.next=this.head;
    this.head=node;
    return this;
  }
  display(){
    let temp=this.head;
    while(temp){
      //checking till temp node as need last object also which has temp.next=null
      console.log(temp);
      temp=temp.next;
    }
  }
  delete(element=null){
    if(!element){
      //delete the first element
      this.head=this.head.next;
    }else{
      //search element
      let current=this.head;
      while(current !== null){
        if(current.next.value === element){
          current.next=(current.next).next;
          console.log("ff")
          break;
        }
        current=current.next;
      }
      // let elementthis.searchElement(element)
    }
    return this;
  }
}
let o=new Linklist().append("hehe").append("feffe").append("guarav").append("jadw").prepend("start").delete("guarav");
o.display();
console.log(o.searchElement("staffrt"));

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
