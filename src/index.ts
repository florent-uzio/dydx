import { Network, SocketClient } from "@dydxprotocol/v4-client-js"

const mySocket = new SocketClient(
  Network.testnet().indexerConfig,
  () => {
    console.log("socket opened")
  },
  () => {
    console.log("socket closed")
  },
  (message) => {
    console.log(message)
  },
)
mySocket.connect()

mySocket.subscribeToMarkets()

// const main = async () => {
//   const client = await CompositeClient.connect(Network.testnet())
// }
