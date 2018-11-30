import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

const reactotron = Reactotron
  .configure() // controls connection & communication settings
  .use(reactotronRedux()) //  <- here i am!
  .use(sagaPlugin()) // <-- sweet
  .connect() // let's connect!

export default reactotron
