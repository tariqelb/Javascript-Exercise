// Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

let pattern = () => {
    let star = "*";
    for(let i = 0; i < 5; i++)
    {
        console.log(star.padStart(i+1,"*"));        
    }
}

pattern()