## Restaurant Reviews

### Problem:

There are many restaurant review platforms available, but they are often centralized and lack transparency. Users cannot be sure if reviews are authentic, and restaurant owners have limited control over their reputation on these platforms. Additionally, traditional review platforms are often limited to fiat currency, making international transactions difficult and costly.

### Solution:

Restaurant Reviews web3 is a decentralized platform that allows users to leave verified reviews on restaurants and enables restaurant owners to manage their reputation on the platform. The use of blockchain technology ensures that reviews are authentic, immutable, and transparent. Additionally, users can pay for services and leave tips using cryptocurrencies, making transactions fast and affordable regardless of location. With Restaurant Reviews web3, users can trust that the reviews they read are genuine, while restaurant owners can be confident that their reputation is being managed fairly and accurately.


### Polygon Deployed to
- https://mumbai.polygonscan.com/tx/0xb96d9bcfba43208473be388e7ab12ebd6b0a1c4af3c1710674d701cc2bcfba10
- https://mumbai.polygonscan.com/address/0x3B6EfecD4F05Cb607783a81981B7Aed95D6cc12c
- Contract address: 0x3B6EfecD4F05Cb607783a81981B7Aed95D6cc12c
- Tweet: https://twitter.com/byLionelMessi/status/1657580793160507392


## Scroll Alpha Network
- Deployed Cotract: 0x8d2b6A2f9063553cc86A78041cC7b3A979269a7B
- https://blockscout.scroll.io/tx/0xb8f3363fa00fd50f27096c7f93f178145000d1d87832cb16eb518cd374845910
- https://blockscout.scroll.io/address/0x8d2b6A2f9063553cc86A78041cC7b3A979269a7B


## How It's Made
This app makes use of the following software:
- `Polygon Mumbai Network` enables our application to be a scalable and secure platform with light-speed transactions. We have successfully deployed to the Polygon Mumba Network at  contract address: `0x3B6EfecD4F05Cb607783a81981B7Aed95D6cc12c`
- `Scroll Alpha Network` for cheap transactions and a secure platform with light-speed transactions. We have successfully deployed to the Scroll Alpha Network at  contract address: `0x8d2b6A2f9063553cc86A78041cC7b3A979269a7B`

- `Subgraph`: we created a subgraph for  indexing & fetching data on the chain, which is suitable for scaling

- `WorldCoin` makes sure users create only one Restaurant per person to avoid any scams. As well as, to create reviews.
- `IPFS NFTStorage`facilitated the storage of NFTS, details of the class, and metadata of every event class. We also save all the reviews, tags, class difficulty, class quality, and ratings.

- `NFTPort` smooths the path of the minting and donating process and eliminates the high transaction fees. Our users will not pay anything for donating NFTs or minting.
- `Solidity` for the smart contract.
- `OpenZeppelin ERC721` we use the ERC721 template for faster development of our smart contract.
- `Hardhat` for local blockchain development.
- `React Js, Material-ui, Web3` React Js for the frontend, Material-ui, and Web3 to connect to the blockchain.
### Polygon Deployed to
- https://mumbai.polygonscan.com/tx/0xb96d9bcfba43208473be388e7ab12ebd6b0a1c4af3c1710674d701cc2bcfba10
- https://mumbai.polygonscan.com/address/0x3B6EfecD4F05Cb607783a81981B7Aed95D6cc12c
- Contract address: 0x3B6EfecD4F05Cb607783a81981B7Aed95D6cc12c
- Tweet: https://twitter.com/byLionelMessi/status/1657580793160507392

## Scroll Alpha Network
- Deployed Contract: 0x8d2b6A2f9063553cc86A78041cC7b3A979269a7B
- https://blockscout.scroll.io/tx/0xb8f3363fa00fd50f27096c7f93f178145000d1d87832cb16eb518cd374845910
- https://blockscout.scroll.io/address/0x8d2b6A2f9063553cc86A78041cC7b3A979269a7B





## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Deploying your Smart Contracts to a Live Network

Once you are ready to deploy your smart contracts, there are a few things you need to adjust.

1. Select the network

By default, `yarn deploy` will deploy the contract to the local network. You can change the defaultNetwork in `packages/hardhat/hardhat.config.ts.` You could also simply run `yarn deploy --network target_network` to deploy to another network.

Check the `hardhat.config.ts` for the networks that are pre-configured. You can also add other network settings to the `hardhat.config.ts file`. Here are the [Alchemy docs](https://docs.alchemy.com/docs/how-to-add-alchemy-rpc-endpoints-to-metamask) for information on specific networks.

Example: To deploy the contract to the Sepolia network, run the command below:

```
yarn deploy --network sepolia
```

2. Generate a new account or add one to deploy the contract(s) from. Additionally you will need to add your Alchemy API key. Rename `.env.example` to `.env` and fill the required keys.

```
ALCHEMY_API_KEY="",
DEPLOYER_PRIVATE_KEY=""
```

The deployer account is the account that will deploy your contracts. Additionally, the deployer account will be used to execute any function calls that are part of your deployment script.

You can generate a random account / private key with `yarn generate` or add the private key of your crypto wallet. `yarn generate` will create a random account and add the DEPLOYER_PRIVATE_KEY to the .env file. You can check the generated account with `yarn account`.

3. Deploy your smart contract(s)

Run the command below to deploy the smart contract to the target network. Make sure to have some funds in your deployer account to pay for the transaction.

```
yarn deploy --network network_name
```

4. Verify your smart contract

You can verify your smart contract on Etherscan by running:

```
yarn verify --network network_name
```
