require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski strike dash right artwork include argue metal gauge'; 
let testAccounts = [
"0x364d6ceeda93804d9440a658d9528b170b619a87a536336cd512cc1a308e5967",
"0xf50c8ede8631871c222a5c00a0bdcc32536bed818816e22844c46579d703e201",
"0x3e0861fb190c7a52bad625fcce033cf636991808a09720ad53a85ab957c7cbac",
"0xaa79bade2f0bd552095ab3fb6200237c135c697b5049e0ee9ca644819763f15e",
"0x7552ec313b8bdb85904eae5f09458dc18c3b8397da845a525fd25d0c5e135569",
"0xcff16eeccbb99b2bd146b44f424e154f0bbfa68921074066d078338510d7253f",
"0xeddc89c637f46038bb0fc99175087b331473918131205b25515172741ec1b851",
"0x7c54a0ccf4f47860097ed68dc2707f7eb35ebc2fa0a18c4fd4ceaf63d1282c29",
"0x80f48ae2c1356538d3736ce07b3b5141d405858cf8844eccc5b2688cf2ebadea",
"0xbf49f024f1bfc9b072033bf3afb3d1f6a1e3ca2fe26651ce89f97772130e5f7f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


