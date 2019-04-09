class Stack{
  constructor(){
    this.storage=[];
    this.count=0
  }

  push(value){
    this.storage[this.count]=value;
    this.count++;
    return this.display();
  }

  pop(){
    if(this.count === -1){
      return undefined;
    }
    let element=this.erase(this.count - 1)
    this.count--;
    this.reorder();
    return element;
  }
  reorder(){
    let arr=this.storage.filter(function (el) {
      return el != undefined;
    });
    this.storage=arr
  }
  display(){
    return this.storage;
  }

  erase(index){
    const value=this.storage[index];
    delete this.storage[index];
    return value;
  }

  peep(){
    return this.storage[this.count - 1];
  }
}

let stack=new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.display())
// stack.push(3);
// (stack.push(4));
// (stack.pop());
// (stack.erase(3));
// console.log(stac k.erase(1));
// console.log(stack.display());
// (stack.push(5));
// (stack.push(6));
// console.log((stack.pop()),'poped');
// (stack.pop());
// console.log(stack.display())
