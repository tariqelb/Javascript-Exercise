// Write a JavaScript program to target a given value in a nested JSON object, based on the given key. 
const data = {
    level1a: {
        level2a: {
        level3a: 'some data'
      }
    },
    level1b: {
        level2b: {
            level3b: "other data"
        }
    },
    level1c: {
        level2c: {
            level3c: "again onther data"
        }
    }
  };

const iterate = (obj) => {
    Object.keys(obj).forEach(key => {

    console.log(`key: ${key}, value: ${obj[key]}`)

    if (typeof obj[key] === 'object') {
            iterate(obj[key])
        }
    })
}

const iterateobj = (obj, key, value) =>
{
    Object.keys(obj).forEach(keys =>
        {
            console.log(keys === key)
            console.log(typeof obj[keys] === "object", obj[keys])
            if (keys === key)
                console.log(obj[keys]);
            else if (typeof obj[keys] === 'object')
                {
                    iterateobj(obj[keys], key, value);
                }
        })
}
//iterate(data);
iterateobj(data, "level3c", "again onther data");