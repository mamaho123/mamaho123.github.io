function calculateBMI() {

  let tbx_height = document.getElementById('height');
  let tbx_weight = document.getElementById('weight');
  let resultDiv = document.getElementById('bmi_result');

  resultDiv.innerHTML = ""

  let height = parseFloat(tbx_height.value);
  let weight = parseFloat(tbx_weight.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById('bmi_result').innerHTML = 'Please enter valid weight and height.';
    return;
  }
  let bmi = weight / ((height / 100) * (height / 100));

  let bmiCategory;
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    resultDiv.setAttribute("class", "bmi_result_Underweight");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'Healthy Weight';
    resultDiv.setAttribute("class", "bmi_result_healthy_weight");
  } else if (bmi >= 24.9 && bmi < 29.9) {
    bmiCategory = 'Overweight';
    resultDiv.setAttribute("class", "bmi_result_overweight");
  } else {
    bmiCategory = 'Obee';
    resultDiv.setAttribute("class", "bmi_result_obese");
  }

  let resultHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>';
  resultHTML += 'BMI Category: ' + bmiCategory;

  
  resultDiv.innerHTML = resultHTML;
  // resultDiv.id = 'bmi_result_' + bmiCategory.replace(/\s+/g, '_').toLowerCase();
}

function handleKeyPress(event, action) {
  if (event.key === 'Enter') {
    if (action === 'weight') {
      document.getElementById('weight').focus();
    } else if (action === 'calculate') {
      calculateBMI();
    }
  }
}