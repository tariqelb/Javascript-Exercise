// //  Write a JavaScript program to get a sorted array of objects ordered by properties and orders.

// let orderBy = (arr, prop, order) => {
//     let i_prop = 0;
//     for (let i = 0; i < arr.length - 1; i++)
//     {
//         j = i + 1;
//         // console.log(arr[i][prop[i_prop]] > arr[j][prop[i_prop]] && order[0] === 'asc')
//         if (arr[i][prop[i_prop]] > arr[j][prop[i_prop]] && order[0] == "asc")
//         {
//             swap = arr[i][prop[i_prop]];
//             arr[i][prop[i_prop]] = arr[j][prop[i_prop]];
//             arr[j][prop[i_prop]] = swap;
//             i_prop = 0;
//             i = -1;
//         }
//         else if (arr[i][prop[i_prop]] < arr[j][prop[i_prop]] && order[0] == "desc")
//         {
//             swap = arr[i].prop[i_prop];
//             arr[i][prop[i_prop]] = arr[j][prop[i_prop]];
//             arr[j][prop[i_prop]] = swap;
//             i_prop = 0;
//             i = -1;
//         }
//         // console.log(arr[i][prop[i_prop]] == arr[j][prop[i_prop]])
//         else if (arr[i][prop[i_prop]] == arr[j][prop[i_prop]])
//         {
//             console.log(i)
//             i_prop++;
//             i--;
//         }
//     }
//     return arr;
// }

// console.log(orderBy(users, ['name', 'age'], ['asc', 'desc'])); 

const users = [{ name: 'fred',  age: 48 }, { name: 'barney',  age: 36 }, { name: 'fred',  age: 40 }];



const orderBy = (arr, props, orders) =>
[...arr].sort((a, b) =>
props.reduce((acc, prop, i) => {
    if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
    }
    return acc;
}, 0)
);

console.log(orderBy(users, ['name', 'age'], ['acs', 'asc']))