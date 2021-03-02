/*
 * @Author: wanyuqing
 * @Date: 2021-03-02 20:01:29
 */
function iter(targetObj, callFn) {
  for (const prop in targetObj) {
    if (targetObj.hasOwnProperty(prop)) {
      callFn(prop);
    }
  }
}

class SnapshotSandbox {
  constructor(targetObj) {
    this.targetObj = targetObj;
    // 改动数据
    this.modifySandbox = {};
    // sandbox快照
    this.targetSnapshot = {};
  }
  active() {
    // 暂存当前快照
    iter(targetObj, (prop) => {
      this.targetSnapshotp[prop] = this.targetObj[prop];
    });
    // 恢复快照
    Object.keys(this.modifySandbox).forEach((prop) => {
      this.targetObj;
    });
  }
  inactive() {
    // 记录当前快照
  }
}
