import { NativeModules } from "react-native"
import { WebSocket } from 'mock-socket'
require('stacktrace-parser')

NativeModules.BlobModule = {
  ...NativeModules.BlobModule,
  addNetworkingHandler: jest.fn()
};

global.WebSocket = WebSocket
