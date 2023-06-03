# Freekick contracts

Freekick contract consists of 2 main contracts, FT(NEP-141) and NFT(NEP-171) contract, both written in Rust.

**FT** is the token used for token economy in Freekick.   

**NFT** is an extended NEP-171 contract that holds the informaton of football member's informaiton.


## Development

To build run:
for nft
```bash
./contracts/nft/src/build.sh
```
for ft
```bash
.contracts/ft/src/build.sh
```

[FT] Using this contract
===================

### Deploy
In the project root, log in to your newly created account  with `near-cli` by following the instructions after this command:

    near login

To make this tutorial easier to copy/paste, we're going to set an environment variable for your account id. In the below command, replace `MY_ACCOUNT_NAME` with the account name you just logged in with, including the `.testnet`:

    FT_CONTRACT_ID=MY_ACCOUNT_NAME

You can tell if the environment variable is set correctly if your command line prints the account name after this command:

    echo $FT_CONTRACT_ID

Now we can deploy the compiled contract in this example to your account:

    near deploy --wasmFile res/kic.wasm --accountId $FT_CONTRACT_ID

FT contract should be initialized before usage. You can read more about metadata at ['nomicon.io'](https://nomicon.io/Standards/FungibleToken/Metadata.html#reference-level-explanation). Modify the parameters and create a token:

    near call $FT_CONTRACT_ID new_default_meta '{"owner_id": "'$FT_CONTRACT_ID'", "total_supply": "1000000000000000000000000000"}' --accountId $FT_CONTRACT_ID

Get metadata:

    near view $FT_CONTRACT_ID ft_metadata



[FT] Transfer Example
---------------

Add storage deposit for Bob's account:

    near call $FT_CONTRACT_ID storage_deposit '{"account_id": "bob.testnet"}' --accountId FT_CONTRACT_ID --amount 0.00125
    

Check balance of Bob's account, it should be `0` for now:

    near view $FT_CONTRACT_ID ft_balance_of '{"account_id": "'bob.testnet'"}'

Transfer tokens to Bob from the contract that minted these fungible tokens, exactly 1 yoctoNEAR of deposit should be attached:

    near call $FT_CONTRACT_ID ft_transfer '{"receiver_id": "bob.testnet", "amount": "10000000000000000000", "memo": "Hi! :)"}' --accountId $FT_CONTRACT_ID --depositYocto 1


Check the balance of Bob again with the command from before and it will now return `10` (because decimal is 18 by deafault).

