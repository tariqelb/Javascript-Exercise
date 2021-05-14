// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

function ConvertTemperatures(temperatur, unit)
{
    if (unit == "f")
    {
        let c = (temperatur - 32) / 9  * 5
        console.log(c);
    }
    else
    {
        let f = (temperatur * 9)/ 5 + 32 
        console.log(f);
    }
}

ConvertTemperatures(60, "c");
ConvertTemperatures(45, "f");