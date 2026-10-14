const temperature = document.querySelector(".temperature input");
const result = document.querySelector(".result input");
const inputTemperatureUnit = document.querySelector(".temperature select");
const resultTemperatureUnit = document.querySelector(".result select");

temperature.oninput  = ()=>{
    let inputTemperatureUnitvalue = inputTemperatureUnit.value;
    let resultTemperatureUnitvalue = resultTemperatureUnit.value;

    //From celcius to other units
    let celciusToKelvin = inputTemperatureUnitvalue === "Celcius" && resultTemperatureUnitvalue === "Kelvin";
    let celciusToFahrenheit = inputTemperatureUnitvalue === "Celcius" && resultTemperatureUnitvalue === "Fahrenheit";

    //From Kelvin to other units

    let kelvinToCelcius = inputTemperatureUnitvalue === "Kelvin" && resultTemperatureUnitvalue === "Celcius";
    let kelvinToFahrenheit = inputTemperatureUnitvalue === "Kelvin" && resultTemperatureUnitvalue === "Fahrenheit"

    //From Fahrenheit to other units
 
    let fahrenheitToCelcius = inputTemperatureUnitvalue === "Fahrenheit" && resultTemperatureUnitvalue === "Celcius";
    let fahrenheitToKelvin = inputTemperatureUnitvalue === "Fahrenheit" && resultTemperatureUnitvalue === "Kelvin";

    //From the same unit to same unit
    let sameUnit = inputTemperatureUnitvalue === resultTemperatureUnitvalue;
    let convertTemperature = 0;
    //calculations....
    let inputTemperatureValue = parseFloat(temperature.value) || 0;
    

    if(celciusToKelvin){
        convertTemperature = (inputTemperatureValue * 1) + 273.15;
        result.value = convertTemperature.toFixed(2);
    }
    else if (celciusToFahrenheit){
        convertTemperature = (9/5 * inputTemperatureValue) + 32;
        result.value = convertTemperature.toFixed(2);
        
    }else if(kelvinToCelcius){
        convertTemperature = (inputTemperatureValue - 273.15);
        result.value = convertTemperature.toFixed(2);
        
    }else if (kelvinToFahrenheit){
        convertTemperature = 9/5 * (inputTemperatureValue - 273.15) + 32;
        result.value = convertTemperature.toFixed(2);
        
    }else if (fahrenheitToCelcius){
        convertTemperature = 5/9 * (inputTemperatureValue - 32);
        result.value = convertTemperature.toFixed(2);
        
    }else if (fahrenheitToKelvin){
        convertTemperature = 5/9 * (inputTemperatureValue - 32) + 273.15;
        result.value = convertTemperature.toFixed(2);
        
    }else if(sameUnit){
        result.value = inputTemperatureValue;
        
    }
    
   
}

