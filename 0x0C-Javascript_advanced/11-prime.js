const countPrimeNumbers = () => {
    let num = 0;
    for (let counter = 2; counter <= 100; counter++) {

        let notPrime = false;
        for (let i = 2; i <= counter; i++) {
            if (counter % i ===0 && i !== counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                num++;
        }
    }
    console.log(num);
}

const tm0 = performance.now();
for (let index = 0; index < 100; index++) {
    countPrimeNumbers();
}
const tm1 = performance.now();
setTimeout(function(){ console.log(`Execution time of calculating prime numbers 100 times was ${tm1 - tm0} milliseconds`); }, 0);
