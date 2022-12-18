const mySet = new Set()

//sets store only unique values
mySet.add('harpreet singh')
mySet.add('hello')
mySet.add('hello')
mySet.add('hello')
mySet.add('hello')
mySet.add('hello')
mySet.add('hello')

mySet.forEach(el => {
    console.log(el);
})