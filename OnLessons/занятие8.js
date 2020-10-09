var o = {
prop1: 1,
someStrangeFunctionInObject: function() {
console.log('this for someStrangeFunctionInObject', this);
}
}
o.someStrangeFunctionInObject();