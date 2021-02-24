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
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1xTFFXMDlNTUxRMUNNZGJpV3cwSyJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImdpdGh1YnwyMDg3NDQ1NSJ9LCJuaWNrbmFtZSI6InZpbml0cmFqMTAiLCJuYW1lIjoiVklOSVQgUkFKIiwicGljdHVyZSI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMDg3NDQ1NT92PTQiLCJ1cGRhdGVkX2F0IjoiMjAyMS0wMi0yNFQwODo0Nzo0OC41NjJaIiwiaXNzIjoiaHR0cHM6Ly90ZXN0LTMyMy51cy5hdXRoMC5jb20vIiwic3ViIjoiZ2l0aHVifDIwODc0NDU1IiwiYXVkIjoiTXJVUzNzWUxKVFNaWjMyaVIzeDlIcEFidzM5VlVSVWgiLCJpYXQiOjE2MTQxNTY0NjgsImV4cCI6MTYxNDE5MjQ2OCwiYXRfaGFzaCI6IkhJN0NBN3BXTzFBQTVmSDNncEF6a2ciLCJub25jZSI6ImNreThuR1V6cE1taFJMempFb004QlBTWk0tTGlvS3QxIn0.2yQQkvcEA-3MClq_R0-7hBdCxkAcs6YLKIS8fJ4ydOCLWALVHq7H3S-kgvZpUHOU5JcQDZkhL7UjIpAmC9jDXY9Iu-7ZJ7-oliQ3upBGIC8oznYx0P9wZ81jAuI_xWJiAQGFVSZV-fecPL1cg2I_K55JLn5st6QK3NRwPGx6L0cf-DAqZgyLZIifTTJAofwEsIk6gf-2CB6Yg1ulA-VMdlR4hKcYvc3cMbJPTnGDj-xtJZh57GmrVfdo0sZnfXgBy8z20Kk_P8ozk-yZ3lOqEVJsV7t_ztQFu5iZDu20V-cMpTwpP8gbyFQ6qD1HI21wDePW9cM6kqH3eELWz0pP8w',
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
