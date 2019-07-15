declare module 'truffle-hdwallet-provider' {
    import {Provider} from 'web3/providers'

    class HDWalletProvider implements Provider {
        constructor (mnemonic: string, provider_url: string, address_index?: number, num_addresses?: number, shareNonce?: boolean, wallet_hdpath?: string)
        sendAsync(payload: any, callback: (err: Error, result: any) => void,): void
        getAddress (idx: number): string
        getAddresses (): Array<string>
        send(payload: any, callback: any): any;
    }

    namespace HDWalletProvider {
    }

    export = HDWalletProvider
}
