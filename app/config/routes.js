import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ConfigScreen from '../screens/ConfigScreen'
import PostScreen from '../screens/PostScreen'


export const timelineStackRoutes = {
  Home:  {screen: HomeScreen},
  Post:  {screen: PostScreen}
}

export const Routes = {

    Search: { screen: SearchScreen},
    Config: { screen: ConfigScreen},
}
