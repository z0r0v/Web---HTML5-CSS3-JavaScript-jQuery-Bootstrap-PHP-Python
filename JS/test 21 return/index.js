function decrement(x) {

    return x--;

}

decrement(23);

// Ничего не выведет


console.log(decrement(23));

// 23

function twoReturns(x) {

    x = x - 8;

    console.log(x);

    return x;

    x = x + 8;

    console.log(x);

    return x;

}

twoReturns(10);

// 2