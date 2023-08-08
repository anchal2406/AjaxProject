const xhr = new XMLHttpRequest();

document.getElementById('convert-button').addEventListener('click', (e) => {
  e.preventDefault();

  const amount = document.getElementById('amount').value;
  const have = document.getElementById('from-currency-select').value;
  const want = document.getElementById('to-currency-select').value;

  xhr.open('GET', `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${have}&want=${want}&amount=${amount}`);
  xhr.setRequestHeader('X-RapidAPI-Key', '739f7284a1mshc4a2e9205a3078fp14adb0jsn67020384990d');
  xhr.setRequestHeader('X-RapidAPI-Host', 'currency-converter-by-api-ninjas.p.rapidapi.com');

  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      const newAmount = response.new_amount; // Assuming the API response contains a property 'new_amount'
      document.getElementById('result').textContent = newAmount;
      console.log(newAmount);
    }
  };

  xhr.send();
});

// Add event listeners to update variables on UI change
document.getElementById('amount').addEventListener('input', () => {
  amount = document.getElementById('amount').value;
});

document.getElementById('from-currency-select').addEventListener('change', () => {
  have = document.getElementById('from-currency-select').value;
});

document.getElementById('to-currency-select').addEventListener('change', () => {
  want = document.getElementById('to-currency-select').value;
});