//Callback
const getDataCallBack = (callback) => {
    setTimeout(() => {
       callback(undefined, 'This time is up.')
    }, 2000);
};

getDataCallBack((err, data) => {
    if (err) {
        
    } else {
        console.log(data);
    }
})


//Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided.')
    }, 2000)
})

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data)
    })
}, (err) => {
    console.log(err)
})

//Promises chaining
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})