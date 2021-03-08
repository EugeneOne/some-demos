/*
 * @Author: wanyuqing
 * @Date: 2021-03-02 20:01:29
 */

const window = {
  range: 'globe'
};

function iter(targetObj, callFn) {
  for (const prop in targetObj) {
    if (targetObj.hasOwnProperty(prop)) {
      callFn(prop);
    }
  }
}

class SnapshotSandbox {
  constructor() {
    this.targetObj = window;
    // 改动数据
    this.modifySandbox = {};
    // sandbox快照
    this.targetSnapshot = {};
  }
  active() {
    // 暂存当前快照
    iter(targetObj, (prop) => {
      this.targetSnapshotp[prop] = window[prop];
    });
    // 恢复快照
    Object.keys(this.modifySandbox).forEach((prop) => {
      window[prop] = this.modifySandbox[prop];
    });
  }
  inactive() {
    // 记录当前快照
    this.modifySandbox = {};
    iter(this.targetSnapshot, props => {
      if(this.targetSnapshot[props] !== window[prop]) {
        // 记录变更
        this.modifySandbox[props] = window[prop];
        // 全局环境数据
        window[prop] = this.targetSnapshotp[prop]
      }
    })
  }
}


let sandboxWindow = new SnapshotSandbox(window);
sandboxWindow.range = 'instance'
