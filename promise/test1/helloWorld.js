let prommise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

prommise.then(function() {
    console.log('Resolved');
});

console.log('Hi!');

// Promise
// Hi!
// Resolved