function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);   
  
    const age = parseInt(document.getElementById('age').value);
    const   
   weightUnit = document.getElementById('weight-unit').value;
    const heightUnit = document.getElementById('height-unit').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;   
  
    let heightInMeters = height;
    let weightInKg = weight;
    if (heightUnit === 'in') {
      heightInMeters = height / 39.37;
    }
    if (weightUnit === 'lbs') {
      weightInKg = weight / 2.205;
    }
  
    const bmi = weightInKg / (heightInMeters * heightInMeters);
  
    let result = "";
    if (bmi < 18.5) {
      result = "Anda kekurangan berat badan. ";
    } else if (bmi >= 18.5 && bmi < 25) {
      result = "Berat badan Anda ideal. ";
    } else if (bmi >= 25 && bmi < 30) {
      result = "Anda kelebihan berat badan. ";
    } else {
      result = "Anda obesitas. ";
    }

    document.getElementById('result').textContent = "BMI Anda: " + bmi.toFixed(2) + "\n" + result;
  }