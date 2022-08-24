function teste(valor) {
    var array = [];
    
    for (i = 1; i < valor; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            array.push(i);   
        }     
    }

    let sum = 0;

    array.forEach(function (e) {
        sum += e;
    });

    return sum;
}

console.log(teste(11));