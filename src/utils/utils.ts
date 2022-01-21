export async function fetch_data(stock_ticker :string, number_of_days):string{
  const  api_url= "https://fintech-tin100-api.herokuapp.com";
  var raw = JSON.stringify({
  "ticker_name": stock_ticker,
  "n_days": 40
  });
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

  fetch(`${api_url}/data/`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}
