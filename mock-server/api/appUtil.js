const uuidv4 = require('uuid/v4');

module.exports.cloneObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

module.exports.uniqueArr = (arr) => {
  return [...new Set(arr)];
};

module.exports.randomSubArrayElements = (arr, n) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

module.exports.randomSubArray = (arr) => {
  return this.randomSubArrayElements(arr, arr.length / 2)
};

module.exports.randomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

module.exports.filterArrByAttrContains = (arr, attr, value) => {
  if (!!arr && !!attr && !!value) {
    return arr.filter(item => item[attr].toLowerCase().indexOf(value.toLowerCase()) > -1);
  } else {
    return arr;
  }
};

module.exports.filterArrByAttrEqual = (arr, attr, value) => {
  if (arr && attr && value) {
    return arr.filter(item => item[attr] === value);
  } else {
    return arr;
  }
};

module.exports.uuid = () => {
  return uuidv4();
};

module.exports.randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
