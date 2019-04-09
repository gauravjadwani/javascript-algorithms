
class Queue{
  constructor(){
    this.storage=[];
  }
  enqueue(value){
    let len=this.storage.length;
    this.storage[len]=value;
    return value;
  }
  dequeue(){
    delete this.storage[0];
    this.reorder();
  }
  reorder(){
    this.storage=this.storage.slice(1)
    // console.log('this',this,Object.keys(this.storage));
    // return this.storage=store;
  }
  display(){
    return this.storage;
  }
}

let q=new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
console.log(q.dequeue());
