const Promise = function Promise(execute) {
  const self = this;
  this.status = 'pending';
  this.value = null;
  this.reason = undefined;

  function resolve(value) {
    self.status = 'resolved';
    self.value = value;
  }

  function reject(reason) {
    self.status = 'rejected';
    self.reason = reason;
  }

  try {
    execute(resolve, reject);
  } catch (err) {
    reject(err);
  }
};

Promise.prototype.then = function then(onFullfilled, onRejected) {
  if (this.status === 'pending') {
    console.log('pending');
  } else if (this.status === 'resolved') {
    onFullfilled(this.value);
  } else if (this.status === 'rejected') {
    onRejected(this.reason);
  }
};

module.exports = Promise;
