const arr = [1, 2, 3, 4, 5, [6, [7, 8, 9]]];

//------------- Using flat function --------------------

// Setting the depth value to
// Infinity to deep flatten the array
const flattened = arr.flat(Infinity);
console.log("flattened array using flat function :-", flattened);

//-------------------Using recursion (pollyfill)----------------

const flatten = (input) => {
  let result = [];

  if (!Array.isArray(input)) {
    return input;
  }

  for (let data of input) {
    result = result.concat(flatten(data));
  }
  return result;
};

console.log("flattened array using recursion :-", flatten(arr));

//------------- Using reduce function --------------------

function flattenReduce(arr) {
  return arr.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur),
    []
  );
}

const flattenedReduce = flattenReduce(arr);
console.log("flattened array using reduce :-", flattenedReduce);
