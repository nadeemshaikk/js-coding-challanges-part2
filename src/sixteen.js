function fetchData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(id%2 === 0){
                return resolve({ id: id, data: "Some data" });
            }else{
                return reject(new Error("ID must be even"));
            }
        },2000);
    })
}

//async-await example
async function getData(id){
    try{
        const response = await fetchData(id);
        console.log("Fetch Data:", response);
    }
    catch(err){
        console.log(err.message);
    }
}

getData(3);
getData(2);
getData(31);