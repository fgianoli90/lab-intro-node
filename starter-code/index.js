class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a-b)
    
    this.length = this.items.length
  }

  get(pos) {
    var listOfItems = this.items
    if(pos >= listOfItems.length){
      throw new Error("OutOfBounds");
    } else if (pos < listOfItems.length){
    var valueAtIndex= listOfItems[pos]
      return valueAtIndex
    }
  }

  max() {
    let listOfItems=this.items
    if (listOfItems.length === 0){
      throw new Error("EmptySortedList");
    }else if (listOfItems.length > 0){
      listOfItems.sort((a,b)=>a-b)
      return listOfItems[listOfItems.length-1]

    }
    
  }

  min() {
    let listOfItems=this.items
    if (listOfItems.length === 0){
      throw new Error("EmptySortedList");
    }else if (listOfItems.length > 0){
      listOfItems.sort((a,b)=>a-b)
      return listOfItems[0]

    }
  }

  sum() {
    let listOfItems=this.items
    if (listOfItems.length === 0){
      return 0
    }else if (listOfItems.length > 0){
      let sum=0
      listOfItems.forEach(eachItem=>{
        sum= sum+ parseInt(eachItem)
      })
      return sum
    // listOfItems.reduce((acc,val)=>{return acc + pasreInt(val)},0)
    }
  }

  avg() {
    let listOfItems=this.items
    if (listOfItems.length === 0){
      throw new Error("EmptySortedList");
    }else if (listOfItems.length > 0){
      let sum=0
      listOfItems.forEach(eachItem=>{
        sum= sum+ parseInt(eachItem)
      })
      return sum/listOfItems.length
    }
  }
}

module.exports = SortedList;
