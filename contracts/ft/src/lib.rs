use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::{LazyOption, LookupMap};
use near_sdk::json_types::U128;
use near_sdk::{env, near_bindgen, AccountId, Balance, PanicOnDefault, StorageUsage};

pub mod ft_core;
pub mod events;
pub mod metadata;
pub mod storage;
pub mod internal;

use crate::metadata::*;
use crate::events::*;

/// The image URL for the default icon
const DATA_IMAGE_SVG_KIC_ICON: &str = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='_레이어_1' data-name='레이어 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 350'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23fff; %7D %3C/style%3E%3C/defs%3E%3Ccircle class='cls-1' cx='175' cy='175' r='162.9707446909'/%3E%3Cg%3E%3Cpolygon points='176.1367860808 126.0853620361 132.6779464405 152.8292633532 132.6779464405 203.8027070876 176.1367860808 228.5721765173 219.5956257212 202.9740783229 219.5956257212 149.9560344144 176.1367860808 126.0853620361'/%3E%3Cpath d='m87.5476129678,70.9260655694v55.1592964666l-43.4588396404,25.0724074848s3.3429876646-46.801827305,43.4588396404-80.2317039515Z'/%3E%3Cpath d='m264.7259591939,278.1913007774v-55.1592964666l43.4588396404-25.0724074848s-3.3429876647,46.801827305-43.4588396404,80.2317039515Z'/%3E%3Cpath d='m43.1173588495,198.501199093l46.9213630569,28.9988564529-1.5196915734,50.1496450386s-38.0545591723-27.4488092968-45.4016714835-79.1485014915Z'/%3E%3Cpath d='m224.8303139383,52.2157343941l-49.3884214798,24.5628135691-41.8018022725-27.747174392s43.393982684-17.8479374841,91.1902237523,3.1843608229Z'/%3E%3Cpath d='m221.7589211931,302.2663726969l-48.6528533454-25.989379524-42.5914141759,26.5191967916s42.8563228097,19.1029369691,91.2442675213-.5298172676Z'/%3E%3Cpath d='m308.244980419,157.8110754681l-46.2457109214-30.0646338423,2.6665095782-50.1017573209s37.4166860034,28.3121566493,43.5792013431,80.1663911632Z'/%3E%3C/g%3E%3C/svg%3E";

/// The specific version of the standard we're using
pub const FT_METADATA_SPEC: &str = "ft-1.0.0";

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    /// Keep track of each account's balances
    pub accounts: LookupMap<AccountId, Balance>,

    /// Total supply of all tokens.
    pub total_supply: Balance,

    /// The bytes for the largest possible account ID that can be registered on the contract 
    pub bytes_for_longest_account_id: StorageUsage,

    /// Metadata for the contract itself
    pub metadata: LazyOption<FungibleTokenMetadata>,
}

/// Helper structure for keys of the persistent collections.
#[derive(BorshSerialize)]
pub enum StorageKey {
    Accounts,
    Metadata
}

#[near_bindgen]
impl Contract {
    /// Initializes the contract with the given total supply owned by the given `owner_id` with
    /// default metadata (for example purposes only).
    #[init]
    pub fn new_default_meta(owner_id: AccountId, total_supply: U128) -> Self {
        // Calls the other function "new: with some default metadata and the owner_id & total supply passed in 
        Self::new(
            owner_id,
            total_supply,
            FungibleTokenMetadata {
                spec: FT_METADATA_SPEC.to_string(),
                name: "KIC".to_string(),
                symbol: "KIC".to_string(),
                icon: Some(DATA_IMAGE_SVG_KIC_ICON.to_string()),
                reference: None,
                reference_hash: None,
                decimals: 18,
            },
        )
    }

    /// Initializes the contract with the given total supply owned by the given `owner_id` with
    /// the given fungible token metadata.
    #[init]
    pub fn new(
        owner_id: AccountId,
        total_supply: U128,
        metadata: FungibleTokenMetadata,
    ) -> Self {
        // Create a variable of type Self with all the fields initialized. 
        let mut this = Self {
            // Set the total supply
            total_supply: total_supply.0,
            // Set the bytes for the longest account ID to 0 temporarily until it's calculated later
            bytes_for_longest_account_id: 0,
            // Storage keys are simply the prefixes used for the collections. This helps avoid data collision
            accounts: LookupMap::new(StorageKey::Accounts.try_to_vec().unwrap()),
            metadata: LazyOption::new(
                StorageKey::Metadata.try_to_vec().unwrap(),
                Some(&metadata),
            ),
        };

        // Measure the bytes for the longest account ID and store it in the contract.
        this.measure_bytes_for_longest_account_id();

        // Register the owner's account and set their balance to the total supply.
        this.internal_register_account(&owner_id);
        this.internal_deposit(&owner_id, total_supply.into());
        
        // Emit an event showing that the FTs were minted
        FtMint {
            owner_id: &owner_id,
            amount: &total_supply,
            memo: Some("Initial token supply is minted"),
        }
        .emit();

        // Return the Contract object
        this
    }
}