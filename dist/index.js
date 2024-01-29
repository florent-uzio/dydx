"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v4_client_js_1 = require("@dydxprotocol/v4-client-js");
const mySocket = new v4_client_js_1.SocketClient(v4_client_js_1.Network.testnet().indexerConfig, () => {
    console.log("socket opened");
}, () => {
    console.log("socket closed");
}, (message) => {
    console.log(message);
});
mySocket.connect();
mySocket.subscribeToMarkets();
// const main = async () => {
//   const client = await CompositeClient.connect(Network.testnet())
// }
