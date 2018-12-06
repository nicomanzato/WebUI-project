import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ConfigScreen from '../screens/ConfigScreen'
import PostScreen from '../screens/PostScreen'
import UserProfileScreen from '../screens/UserProfileScreen'

export const timelineStackRoutes = {
  Home:  {screen: HomeScreen},
  Post:  {screen: PostScreen},
  UserProfile: {screen: UserProfileScreen},
}

export const Routes = {

    Search: { screen: SearchScreen},
    Config: { screen: ConfigScreen},
}
