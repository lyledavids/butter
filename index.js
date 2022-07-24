var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

let ps = []
modules.export = async function spread(chainID,ethAddress,covalentKey,accessTokenContractAddress) {
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

spread(chainID,ethAddress,covalentKey,accessTokenContractAddress)