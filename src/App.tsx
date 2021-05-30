import 'react-native-gesture-handler';

import React from 'react';
// import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    {/* Se apagar as duas próximas linhas o layout fica no centro certinho */}
    {/* <StatusBar barStyle="light-content" backgroundColor="312e38" translucent /> */}
    <AppProvider>
      {/*   <View style={{ flex: 1, backgroundColor: '#312e38' }} />  */}
      <Routes />
    </AppProvider>
  </NavigationContainer>
);

export default App;
