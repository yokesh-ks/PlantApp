/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import GetStarted from '../screens/getStarted';
import DashBoard from '../screens/dashBord';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="getStarted"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="getStarted"
        options={{
          title: 'Awesome app',
        }}>
        {screenprops => <GetStarted {...screenprops} />}
      </Stack.Screen>
      <Stack.Screen
        name="dashBoard"
        options={{
          title: 'Awesome app',
        }}>
        {screenprops => <DashBoard {...screenprops} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
