class Testcase{

  constructor(){
    this.noofarrays=parseInt(Math.random()*100);
    // console.log('cons',this.noofarrays)
    this.arrayContainer=[];
    this.result=[];
  }

  initArray(){
    for(let i=0;i<this.noofarrays;i++){
      this.arrayContainer.push([]);
    }
  }

  display(){
    return (this.result);
  }

  insertValuesToArray(){
    for(let i=0;i<this.noofarrays;i++){
      let lengthEachArray=parseInt(Math.random()*100);
      for(let j=0;j<lengthEachArray;j++){
        const randomValue=parseInt(Math.random()*100);
        this.arrayContainer[i].push(randomValue)
      }
    }
  }

  isArraySorted(arr){
    let check=true;
    for(let i=0;i<arr.length;i++){
      if(arr[i]>arr[i+1]){
        check=false;
        break;
      }
    }
    return check;
  }

  // testSample(arr,i){
  //   if(this.isArraySorted(arr)){
  //     return i;
  //   }
  // }
  sort(arr){
    let minIndex=0;
    let i;
    let subject=[...arr]
    for(i=0;i<arr.length;i++){
      // console.log("minIndex",arr[i])
      for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
          const temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
      }
      if(this.isArraySorted(arr)){
        this.result
        let obj={};
        obj['subject']=subject;
        obj['sorted']=arr;
        obj['ilterations']=i+1;
        obj['length']=arr.length;
        this.result.push(obj);
        break;
      }
    }
    return arr;
  }
  operation(){
    for(let item=0;item<this.arrayContainer.length;item++){
      this.sort(this.arrayContainer[item]);
    }
    return this.display();
  }
}

let t1=new Testcase();
t1.initArray();
t1.insertValuesToArray();
console.log(JSON.stringify(t1.operation()));
// console.log(t1.arrayContainer);
// let a=[12,13,87,1]
// console.log(t1.sort(a));
// console.log(JSON.stringify(t1.display()));
// console.log(t1.display())
