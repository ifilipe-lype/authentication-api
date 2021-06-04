function filterProps(obj, filterHash){
    let filteredObj = {};

    for(let prop of Object.keys(obj)){
        if(!filterHash[prop]){
            filteredObj[prop] = obj[prop]
        }
    }

    return filteredObj;
}

function filterFalsyProps(obj){
    const newObj = {};

    for(let prop of Object.keys(obj)){
        if(obj[prop]) newObj[prop] = obj[prop];
    }

    return newObj;
}

module.exports = Object.freeze({ filterProps, filterFalsyProps });
