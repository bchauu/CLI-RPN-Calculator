import color from "colors-cli";

class Stack {
    constructor() {
      this.items = [];
      this.count = 0;
    }
  
    push(element) {
      this.items[this.count] = element;
      this.count += 1;
      return this.count - 1;
    }
  
    pop(element) {
      if (this.count === 0) return undefined;
      const deletedItem = this.items.splice(this.count - 1, 1);
      delete this.items[this.count - 1];
      this.count -= 1;
      return deletedItem[0];
    }
  
    size() {
      console.log(color.black(`${this.count} elements in stack`));
      return this.count;
    }
  
    clear() {
      this.items = [];
      this.count = 0;
      console.log('Stack is cleared');
      return this.items;
    }
  }

  const operandStack = new Stack();

  export default operandStack;