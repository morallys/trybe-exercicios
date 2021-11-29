const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCoins = async () => {

  const coins = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
};

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('cripto');

  coins.forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinsList.appendChild(newLi);
  });
}

window.onload = fetchCoins;


// .then((result) => result.map((arrCoins) => { id, rank, symbol } = arrCoins))


// const createElement = (arrCoin) => {
//   const father = document.getElementById('cripto');
//   const son = document.createElement('li');
//   father.appendChild(son);
// };

// const defaultCoinObj = (data) => {
//   return {
//     name: data.name,
//     symbol: data.symbol,
//     price: data.priceUsd
//   }
// }

// const getCoins = (dataObj) => {
//   // console.log(dataObj);

//   const arrObjCoin = dataObj.map((obj) => defaultCoinObj(obj));

//   return arrObjCoin.slice(0, 10)
// };

  // const requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };

  // fetch(API_URL, requestOptions)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const arrCoin = defaultCoinObj(data);

  //     createElement(arrCoin);
  //   })
  //   .catch((error) => console.log('error', error));
  //   // .then((data) => getCoins(data));