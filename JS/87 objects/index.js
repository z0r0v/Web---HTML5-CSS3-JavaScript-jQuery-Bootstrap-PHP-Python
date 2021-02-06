const carToyota = ['camry', 2010, 'sedan', 'black', true];

const carToyotaObj = {
    model: 'camry',
    yers: 2010,
    body: 'sedan',
    color: 'black',
    airBag: true
}

const x = 'yers';
console.log(carToyotaObj[x]);
console.log(carToyotaObj['color']);
console.log(carToyotaObj.airBag);

const carMazda = {...carToyotaObj};
carMazda.model = 'cx-7'
carMazda.yers = 2018;
carMazda.body = 'crossover';
carMazda.airBag = false;
carMazda.color = 'rad';
carMazda.dors = 4;

console.log(carMazda);
console.log(carToyotaObj);

const carOpel = {...carMazda};
carOpel.model = "zafira"
console.log(carOpel);