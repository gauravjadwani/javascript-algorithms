export default class Linklistnode{
  constructor(value,next=null){
    this.value=value;
    this.next=next;
  }
  // over-ridding toString
  toString(callback){
     return callback ? callback(this.value) : `${this.value}`;
  }
}
