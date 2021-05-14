// Write a JavaScript program to compute the new ratings between two or more opponents using the Elo rating system.
// It takes an array of pre-ratings and returns an array containing post-ratings.
// The array should be ordered from best performer to worst performer (winner -> loser).

let Elo_ratings = (rat , KFactor, match_Rlt) => {
    let transformed_rating = () => rat.map(val =>   Math.pow(10,(val/400)))
    let expected_score = (tr = transformed_rating(rat)) => tr.map(val => (val/tr.reduce((ac,av)=> ac + av)).toFixed(2))
    let Elo = (ex = expected_score()) => rat.map((val,i) => (val + KFactor * (match_Rlt[i] - ex[i]))).sort((a,b) => a < b)
    return Elo()
}

console.log(Elo_ratings([1200,1200,1200,1200],32,[1,0,0.5,0.5]))
console.log(Elo_ratings([1200, 1200], 64,[1,0]));