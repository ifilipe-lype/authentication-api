function filterProps(obj, filterHash){
    let filteredObj = {};

    for(let prop of Object.keys(obj)){
        if(!filterHash[prop]){
            filteredObj[prop] = obj[prop]
        }
    }

    return filteredObj;
}

module.exports = Object.freeze({ filterProps });
