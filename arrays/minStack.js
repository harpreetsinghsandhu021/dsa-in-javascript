const minStack = function () {
  this.stack = [];
  this.minStack = [];
};

minStack.prototype.push = function (x) {
  this.stack.push(x);

  if (
    this.minStack.length === 0 ||
    this.minStack[this.minStack.length - 1] > x
  ) {
    this.minStack.push(x);
  }
};

minStack.prototype.pop = function(x){
    let popped = this.stack.pop()

    if(popped = this.minStack[this.minStack.length - 1]){
        this.minStack.pop()
    }
}

minStack.prototype.top = functon(){
    this.minStack[this.minStack.length - 1]
}