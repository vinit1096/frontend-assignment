import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SCREEN_MAPPING } from './navigations';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'https://test-323.herokuapp.com/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    // can be set using environment variables
    // but hardcoding it since ttl is not longer and
    // this would save me some time
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1xTFFXMDlNTUxRMUNNZGJpV3cwSyJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImdpdGh1YnwyMDg3NDQ1NSJ9LCJuaWNrbmFtZSI6InZpbml0cmFqMTAiLCJuYW1lIjoiVklOSVQgUkFKIiwicGljdHVyZSI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMDg3NDQ1NT92PTQiLCJ1cGRhdGVkX2F0IjoiMjAyMS0wMi0yNFQxODo0OTozNC43NjZaIiwiaXNzIjoiaHR0cHM6Ly90ZXN0LTMyMy51cy5hdXRoMC5jb20vIiwic3ViIjoiZ2l0aHVifDIwODc0NDU1IiwiYXVkIjoiTXJVUzNzWUxKVFNaWjMyaVIzeDlIcEFidzM5VlVSVWgiLCJpYXQiOjE2MTQxOTI1NzUsImV4cCI6MTYxNDIyODU3NSwiYXRfaGFzaCI6IkF1VU9ZUWpwQWNqT3NBN2F5SlJLQ3ciLCJub25jZSI6IkVDZU5UYmdTOU5tejh2RkM5YU13cGRoYUtBdDlLcUhaIn0.UyJhciFTo7SGI6MpJt1YklJtqgLlsDNdOqrZZwI-grAVmnRR4xUS_iTSOxBiRyUxizy_uRcoZHSxmbZ67bKQxSlMC4g0xOoHA8i5VHBfqnaMgfCD44R24r1xlydvt7HT5DkrJuLqIgmInx61USlsaTstdy9iUyaSm278c2MInmiMgVnBmWNVWnmvAF77eZFXyO5E9AKzmm45vOi4vd6P1sPYNdEvYxB17Ify-mEVPM6tWO3e_tqdVjXA21FamFTCmE3ewTcKZ6cyja7P-YRRdjoHXensDK8hHoLLgKSj9BsSFslWUY0iAen3rSqv7SbAEUwt8tBBxogkkq1nxR2t8g',
  },
});

function App() {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={() => ({
              headerShown: false,
              // gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            })}>
            {SCREEN_MAPPING.map((item) => (
              <Stack.Screen
                name={item.name}
                component={item.screen}
                key={item.name}
                //   options={{ headerShown: false }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaProvider>
  );
}

export default App;
