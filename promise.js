const Promise = function Promise(execute) {
  const self = this;
  this.status = 'pending';
  this.value = null;
  this.reason = undefined;
  this.resolvedFuncs = []; // 成功的回调
  this.rejectedFuncs = []; // 失败的回调

  function resolve(value) {
    self.status = 'resolved';
    self.value = value;
    self.resolvedFuncs.forEach(fn => fn(self.value));
  }

  function reject(reason) {
    self.status = 'rejected';
    self.reason = reason;
    self.rejectedFuncs.forEach(fn => fn(self.reason));
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
    this.resolvedFuncs.push(onFullfilled);
    this.rejectedFuncs.push(onRejected);
  } else if (this.status === 'resolved') {
    onFullfilled(this.value);
  } else if (this.status === 'rejected') {
    onRejected(this.reason);
  }
};

module.exports = Promise;
