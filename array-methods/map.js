const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const array = prices.map((x) => ({ price: x, salePrice: x / 2 }));

console.log('Price Objects:', array);

const formatPrice = prices.map((x) => `$${x.toFixed(2)}`);
console.log('Formatted Prices:', formatPrice);
