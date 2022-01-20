require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stomach response mirror connect install define army gauge'; 
let testAccounts = [
"0x0a2b9e69828265f28b86b0d1b75df8c7dadffe5b3e9d92c08ca3d925bcd7f247",
"0x1ea9d99e2c0fb2deddba9a9882bf3dd76e3b759b79b4271de8d27add8b2cc188",
"0xf7917d60078ff2199e8b2701223e43626ca2ee170c8d36d616d751e251b0d120",
"0x5b23271318a1f024dc5b03cb9839a305cbe385a481364ba04c762b60931aebf5",
"0x1cbb0fab436764746b55c215081323949655307d6784e8ad9271834e4933bc65",
"0x2ff30cb1928daca496f45e0b0aa3d3af441ea39d2934195d871160e51a997866",
"0xe076009ca5978138ca4a06f2106eeadb8d15c0831c87a52c193897e374bc205c",
"0x209439d4c7fa1e460bc3a3ecd16c30aa7479ffe790967b389567e8548268eb11",
"0x5001c09062d2b8a3f6b57191c8591e55df858ae573c09036fe96bf2c8aa24c01",
"0x19d69c955a3f47f35ab59a1fc45efc186f2392c11e41b88223ee570b46193042"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

