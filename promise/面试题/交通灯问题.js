// //题目：红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？

function red() {
    console.log("red")
}
function green() {
    console.log("green")
}
function yellow() {
    console.log("yellow")
}
 var temp = new Promise(function (resolve, reject) { resolve() });

const f = (ms, fn) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            fn();
            resolve();
        }, ms)
    })
};

//Promise实现
// var step = function (fn) {
//     fn.then(() => {
//         return f(3000, red);
//     }).then(() => {
//        return f(2000, green);
//     }).then(() => {
//        return f(1000, yellow);
//     }).then(() => {
//         step(fn);
//     })
// }

//async await实现
var step = async (fn) => {
   await f(3000, red);
   await f(2000, green);
   await f(1000, yellow);
   step(fn);
}


step(temp);