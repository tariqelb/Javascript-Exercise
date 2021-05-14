let percentage = (cashBack, deduction) => {
    let arr = [];
    cashBack.forEach((element, index) => {
       arr[index] = Math.floor(((element - deduction[index]) * 100) / element); 
        //   arr[index] = (((element - deduction[index]) * 100) / element).toFixed(2); 
    });
    return arr;
}
// budget 125$
let cashBack =  [0.06,1.95,4.97,2.06,2.10,0.15,0.39];
let deduction = [0.05,1.60,4.07,1.69,1.72,0.12,0.32];
console.log(percentage(cashBack, deduction));

// budget 100$
let cashBack1 =  [2.72,9.50,0.77,0.88,1.90,2.85,0.66,2.93,2.33];
let deduction1 = [2.23,7.77,0.63,0.72,1.55,2.33,0.54,2.40,1.91];
console.log(percentage(cashBack1, deduction1));

// budget 765$
let cashBack2 =  [1.61,0.97,1.21,0.79,3.44,0.36,1.19,2.79];
let deduction2 = [1.32,0.79,0.99,0.65,2.81,0.29,0.97,2.28];
console.log(percentage(cashBack2, deduction2));