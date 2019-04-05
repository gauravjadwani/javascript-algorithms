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
    let element=this.erase(this.count)
    this.count--;
    return element;
  }

  display(){
    let arr=this.storage.filter(function (el) {
      return el != undefined;
    });
    return arr;
  }

  erase(index){
    const value=this.storage[index];
    delete this.storage[index];
    return value;
  }
}

let stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
(stack.push(4));
(stack.pop());
console.log(stack.erase(1));
console.log(stack.display())
