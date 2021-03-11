export const FormatCurrency = (value, typeCurrency) => {
    value = Number(value);
    if (typeCurrency === 'MX') {
        return '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
        value = value / 21.50;
        return 'US$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
}
