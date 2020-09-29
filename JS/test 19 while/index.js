const methods = {
    getEven: function() {
        console.log("get even:");
        let i = 0;
        while (i <= 30 ) {
            i++;
            if(!(i % 2)) {
                console.log(i);
            }
        }
    },
    getMultipleFive: function () {
        console.log("get multiple five:");
        let i = 0;
        while (i <= 30 ) {
            i++;
            if(!(i % 5)) {
                console.log(i);
            }
        }
    },
    getEvenRevers: function () {
        console.log("get get even revers:");
        let i = 30;
        while (i != 0) {
            i--;
            if(!(i % 2)) {
                console.log(i);
            }
        }
    }
};

methods.getEven();
methods.getMultipleFive();
methods.getEvenRevers();