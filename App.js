import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';
import Navigator from './src/navigation/StackNavegator';

function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          'bebas-neue-regular': require('./assets/fonts/BebasNeue-Regular.ttf'),
          'pt-sans-regular': require('./assets/fonts/PTSans-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
