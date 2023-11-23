import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Booking from './components/Booking';
import FinalBooking from './components/FinalBooking';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Navigation"
            component={BottomNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Booking"
            component={Booking}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="BookFinal"
            component={FinalBooking}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
     
    
  );
}

