import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';

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
          // 'spartan-regular': require('./assets/fonts/Spartan-Regular.ttf'),
          // 'spartan-semiBold': require('./assets/fonts/Spartan-SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
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
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
