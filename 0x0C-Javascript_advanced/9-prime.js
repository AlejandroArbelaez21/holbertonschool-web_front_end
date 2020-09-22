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
countPrimeNumbers();
const tm1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${tm1 - tm0} milliseconds.`)
