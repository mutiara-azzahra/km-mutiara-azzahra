import {NavigationContainer} from '@react-navigation/native';

//screen
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import Register from '../screens/Register/Register';
import Profile from '../screens/Profile/Profile';
import Explore from '../screens/Explore/Explore';

const Stack = createNativeStackNavigator();

export default function MainRoutes() {
  return (
    <StackNavigator intialRouteName="Home">
      <Stack.Navigator name="Login" component={Login}></Stack.Navigator>
      <Stack.Navigator name="Home" component={Home}></Stack.Navigator>
      <Stack.Navigator name="Register" component={Register}></Stack.Navigator>
      <Stack.Navigator name="Profile" component={Profile}></Stack.Navigator>
      <Stack.Navigator name="Explore" component={Explore}></Stack.Navigator>
    </StackNavigator>
  );
}
