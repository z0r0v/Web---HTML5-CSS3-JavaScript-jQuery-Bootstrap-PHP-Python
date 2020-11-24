
const methods = {
    getEven() {
        console.log("Even:");
        for (let i = 2; i <= 30; i++) {
            if (i % 2 == 0) {
                console.log( i );
            }
        }
    },
    getSeven() {
        console.log("Seven:");
        for (let i = 2; i <= 30; i++) {
            if (i % 7 == 0) {
                console.log( i );
            }
        }
    },
    getOdd() {
        console.log("Odd:");
        for (let i = 1; i <= 30; i++) {
            if (i % 2 != 0) {
                console.log( i );
            }
        }
    }
};

methods.getEven();
methods.getSeven();
methods.getOdd();