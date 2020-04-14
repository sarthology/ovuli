import { registerRootComponent } from 'expo';
import * as React from 'react';
import CustomNavigationContainer from '@/Navigation';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import PTCFonts from '@wireframes/assets/fonts/PTC55F.ttf';

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({
      'PT-Sans': PTCFonts,
    })
      .then(() => setIsFontLoaded(true))
      .catch(error => console.log(error));
  }, [PTCFonts]);

  if (!isFontLoaded) {
    return <AppLoading />;
  }
  return <CustomNavigationContainer />;
};

registerRootComponent(App);
export default App;
