class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  //codigo andrea

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++
  }
  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }    
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("OutOfBounds");
    } else {
      let maxResult = this.items[0];
      for (let i = 0; i < this.items.length; i++) {
        if (maxResult < this.items[i]) {
          maxResult = this.items[i];
        }
      }
      return maxResult;
    }    
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let minResult = this.items[0];
      for (let i = 0; i < this.items.length; i++) {
        if (minResult > this.items[i]) {
          minResult = this.items[i];
        }
      }
      return minResult;
    }    
  }

  sum() {

    if (this.items.length === 0) {
      return 0;
    } else {
      let totalResult = 0;
      for (let i = 0; i < this.items.length; i++) {
         totalResult += this.items[i]
      }
      return totalResult;
    }    
  }

  avg() {
    let counter = 0; 
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
                 
      for (let i = 0; i < this.items.length; i++) {
         counter += this.items[i]         
      }      
    }   
    let average = counter / this.items.length 
    return average
  }    
  
}

module.exports = SortedList;
