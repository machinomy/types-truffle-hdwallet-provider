declare module 'truffle-hdwallet-provider' {
    import * as Web3 from 'web3'

    class HDWalletProvider implements Web3.Provider {
        constructor (mnemonic: string, provider_url: string, address_index?: number, num_addresses?: number)
        sendAsync(
            payload: Web3.JSONRPCRequestPayload,
            callback: (err: Error, result: Web3.JSONRPCResponsePayload) => void,
        ): void
        getAddress (idx: number): string
        getAddresses (): Array<string>
    }

    export = HDWalletProvider
}