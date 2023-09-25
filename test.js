new Promise((res,rej)=>{
    res('111')
}).catch(err=>{
    // console.log(err);
}).then(res=>{
    console.log(res);
})