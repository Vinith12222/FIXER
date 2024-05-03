document.addEventListener('DOMContentLoaded', function () {
    const accessKey = 'YOUR_ACCESS_KEY'; // Replace with your Fixer API access key
    const baseURL = `http://data.fixer.io/api/latest?access_key=${accessKey}`;

    fetch(baseURL)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayExchangeRates(data.rates);
            } else {
                console.error(data.error.info);
            }
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayExchangeRates(rates) {
        const exchangeRatesContainer = document.getElementById('exchange-rates');
        exchangeRatesContainer.innerHTML = '<h2>Exchange Rates:</h2>';
        const list = document.createElement('ul');
        for (const currency in rates) {
            const listItem = document.createElement('li');
            listItem.textContent = `${currency}: ${rates[currency]}`;
            list.appendChild(listItem);
        }
        exchangeRatesContainer.appendChild(list);
    }
});
