const f = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(resolve,2000,"123")
        // resolve("123")
    })
};

f().then((value)=>{
    console.log("value:",value)
})

const testAsync = async () => {
    const t = await f();
    console.log(t);
}

testAsync();
console.log("async")