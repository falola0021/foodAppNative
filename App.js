import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/pages/HomeScreen';
import Details from './src/pages/showdetails/DetailsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: Details,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
