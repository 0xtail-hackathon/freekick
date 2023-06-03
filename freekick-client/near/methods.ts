import { Account, Contract, connect } from "near-api-js";
import { AccountView } from "near-api-js/lib/providers/provider";
import connectionConfig from "./config";

const CONTRACT_ID = "";

export const contractInstance = (account: Account) => {
    const contract = new Contract(account, CONTRACT_ID, {
        // name of contract you're connecting to
        viewMethods: ["nft_metadata"], // view methods do not change state but usually return a value
        changeMethods: ["nft_mint"], // change methods modify state
    });
    return contract;
};

export const getContractMetadata = async (account: Account) => {
    const response = contractInstance(account).nft_metadata();
    console.log(response);
    return response;
};

export async function getAccountDetail(accountId: string) {
    const near = await connect(connectionConfig);
    const accountDetail = await near.connection.provider.query<AccountView>({
        request_type: "view_account",
        account_id: accountId,
        finality: "final",
    });
}

export async function getContract() {
    const nearConnection = await connect(connectionConfig);
    const account = await nearConnection.account("last-last.testnet");
    const contract = new Contract(
        account, // the account object that is connecting
        CONTRACT_ID,
        {
            // name of contract you're connecting to
            viewMethods: ["badge_view", "has_badge"], // view methods do not change state but usually return a value
            changeMethods: ["sbt_mint"], // change methods modify state
        }
    );
    return contract;
}
