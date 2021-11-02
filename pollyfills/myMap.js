//---------------- Map Pollyfill --------------

const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

const newArr = arr.myMap(function (item) {
  return item * 2;
});

console.log(newArr);
