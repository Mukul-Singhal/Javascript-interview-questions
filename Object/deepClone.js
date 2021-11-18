const test = {
  name: "Mukul",
  lastName: "Singhal",
  address: {
    city: "Pune",
  },
};

const deepClone = (input) => {
  let result = Array.isArray(input) ? [] : {};

  if (typeof input !== "object") {
    return input;
  }

  for (let key in input) {
    result[key] = deepClone(input[key]);
  }

  return result;
};

let clone = deepClone(test);

clone.address.city = "Mumbai";

console.log(clone === test);

console.log(test);

console.log(clone);
