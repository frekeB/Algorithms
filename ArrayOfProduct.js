
function arrayOfProducts(array){
    let result = [];
    for(let i=0; i<array.length; i++){
        let product = 1;
        for(let j=0; j<array.length; j++){
            if(i !== j){
                product *= array[j];
            }
        }
        result.push(product);

    }
    return result;
}


console.log(arrayOfProducts([5,1,4,2]));