const Promise = require('./promise');

const promise = new Promise((resolve, reject) => {
  try {
    // setTimeout(() => {
    //   resolve(100);
    // }, 1500);
    resolve(100);
  } catch (e) {
    reject(e);
  }
});

promise.then((data) => {
  console.log('success', data);
});

