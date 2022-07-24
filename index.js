var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

//let chainID = "1"
//let ethAddress = "0xb7658aac84dbe5924badc9d780c36442dd46306e"
//let covalentKey = "ckey_9981f1423bf5429085c1a2c8980"
//let accessTokenContractAddress = "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f" //Gitcoin
//let accessTokenContractAddress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d" //BAYC
//let accessTokenContractAddress = "0x90b3832e2f2ade2fe382a911805b6933c056d6ed" //Pooly - Supporter
//let accessTokenContractAddress = "0xD417144312DbF50465b1C641d016962017Ef6240" //Covalent
  
// fetch(`https://api.covalenthq.com/v1/${chainID}/address/${ethAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true&key=${covalentKey}`, requestOptions)
// .then(response => response.text())
// .then(result => console.log(result.data))
// .catch(error => console.log('error', error));
let ps = []
modules.export = async function asyncCall(chainID,ethAddress,covalentKey) {
  const res = await fetch(`https://api.covalenthq.com/v1/${chainID}/address/${ethAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true&key=${covalentKey}`, requestOptions)
  ps = await res.json()
  ps = ps.data.items
  console.log(ps);
  var result = ps.filter(ps => ps.contract_address === accessTokenContractAddress);
  console.log(result);
  if(result.length == 0){
    return false
  }
  else
    return true
}

asyncCall(chainID,ethAddress,covalentKey)