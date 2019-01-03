import { NativeModules } from "react-native"
import { WebSocket } from 'mock-socket'
require('stacktrace-parser')

module.exports = {
  // Load setup-tests.js before test execution
  setupTestFrameworkScriptFile: '<rootDir>setup-tests.js',
};

NativeModules.BlobModule = {
  ...NativeModules.BlobModule,
  addNetworkingHandler: jest.fn()
};

global.WebSocket = WebSocket

class XMLHttpRequest {
  open = () => {}
  send = () => {}
}
global.XMLHttpRequest = XMLHttpRequest;
jest.useFakeTimers();
