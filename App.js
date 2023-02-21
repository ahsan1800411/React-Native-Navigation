import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/DetailsScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StatusBar } from 'expo-status-bar';
import LogoTitle from './components/BaseLogo';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

function App() {

  return (
    <>
      <StatusBar style='dark' />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerTintColor: 'green',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: 'green',
              },
            }}
          >
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{
                headerTitle: (props) => <LogoTitle />,
              }}
            />
            <Stack.Screen
              name='Details'
              component={DetailsScreen}
              options={{
                title: 'Details',

              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}

export default App;
