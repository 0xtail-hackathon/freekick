import { CONTRACT_ID } from "@/constants";
import { keyStores } from "near-api-js";

const connectionConfig = {
    networkId: "testnet",
    nodeUrl: "https://archival-rpc.testnet.near.org",
    contractName: CONTRACT_ID,
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
    deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() },
};

export default connectionConfig;
