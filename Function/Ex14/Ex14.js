//  Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1


function amountTocoins(amount , coins) {
    let i = 0;
    let pepers = [];
    
    while (amount > 0)
    {
        while (amount >= coins[i])
        {
            amount -= coins[i];
            pepers.push(coins[i]);
        }
        i++;
    }
    return pepers;
}

console.log(amountTocoins(46,[25,10,5,2,1]))