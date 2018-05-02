console.log('js online');
key = '29c6f20c66d1c5f885a5a4584ebb0a9d';
symbol = 'ILS,USD';
url = 'http://data.fixer.io/api/latest?';

var symList;
var symArray = [];

function getSymbolList(inputName) {
    var selectSymbol = $('<select>').attr('id', inputName + '_selectedVal').addClass('form-control');
    $.ajax({
        type: 'GET',
        url: url,
        data: {
            access_key: key,
            format: 1,
        },
        error: function(e) {
            console.log(e, status);
        },
        success: function(data, status) {
            rates = data.rates;
            var result = Object.keys(rates).map(function(key) {
                selectSymbol.append($('<option>').attr('value', rates[key]).text(key));
            });
        },
    });
    $('#' + inputName).append($('<label>').attr('for', inputName), selectSymbol);
}
getSymbolList('fromCoin1');
getSymbolList('fromCoin2');

$("form").submit(function(e) {
    baseInput = Number($('#base').val());
    synbolInput = $('#symbol');
    fromCoinVal = Number($('#fromCoin1_selectedVal').val());
    toCoinVal = Number($('#fromCoin2_selectedVal').val());
    e.preventDefault();
    console.log('form clicked');
    console.log('baseInput: ', baseInput, 'fromCoinVal: ', fromCoinVal, 'toCoinVal: ', toCoinVal);
    calc = baseInput / fromCoinVal;
    result = calc * toCoinVal;
    console.log(result);
    synbolInput.val(result.toFixed(2));
});