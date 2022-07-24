import { useState, useEffect } from 'react';

import { ethers } from 'ethers';
import logo from './logo.svg';
const butter = require("@0xlyle/butter");

function App() {
	const [haveMetamask, sethaveMetamask] = useState(true);

	const [accountAddress, setAccountAddress] = useState('');
	const [accountAccess, setAccountAccess] = useState('');

	const [isConnected, setIsConnected] = useState(false);

	const { ethereum } = window;
  const chainID = "1";
  const tokenContractAddress = "" //Quackle
  //const tokenContractAddress = "" //Pooly Supporter
  //const tokenContractAddress = "" //BAYC
  const covalentKey = "ckey_9981f1423bf5429085c1a2c8980"

	const provider = new ethers.providers.Web3Provider(window.ethereum);

	useEffect(() => {
		const { ethereum } = window;
		const checkMetamaskAvailability = async () => {
			if (!ethereum) {
				sethaveMetamask(false);
			}
			sethaveMetamask(true);
		};
		checkMetamaskAvailability();
	}, []);

	const connectWallet = async () => {
		try {
			if (!ethereum) {
				sethaveMetamask(false);
			}

			const accounts = await ethereum.request({
				method: 'eth_requestAccounts',
			});

			//let access = await butter.spread(chainId,ethAddress,covalentKey,tokenContractAddress)
      let access = await butter.spread(chainID,accountAddress,covalentKey,tokenContractAddress)
			setAccountAddress(accounts[0]);
			setAccountAccess(access);
			setIsConnected(true);
		} catch (error) {
			setIsConnected(false);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				{haveMetamask ? (
					<div className="App-header">
						{isConnected ? (
							<div className="card">
								<div className="card-row">
									<h3>Wallet Address:</h3>
									<p>
										{accountAddress.slice(0, 4)}...
										{accountAddress.slice(38, 42)}
									</p>
								</div>
								<div className="card-row">
									<h3>This account has access:</h3>
									<p>{accountAccess}</p>
								</div>
							</div>
						) : (
							<img src={logo} className="App-logo" alt="logo" />
						)}

						{isConnected ? (
							<p className="info">🎉 Connected Successfully</p>
						) : (
							<button className="btn" onClick={connectWallet}>
								Connect
							</button>
						)}
					</div>
				) : (
					<p>Please Install MataMask</p>
				)}
			</header>
		</div>
	);
}

export default App;