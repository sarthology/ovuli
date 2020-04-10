import { registerRootComponent } from 'expo';
import * as React from 'react';
import CustomNavigationContainer from '@/Navigation';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
// import { loadSettings } from './settingStorage';
import PTCFonts from '@wireframes/assets/fonts/PTC55F.ttf';
import i18n from './i18n';

// const settings = async () => await loadSettings();
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

  // if (settings !== null) {
  //   i18n.locale = settings.locale;
  // }
  return <CustomNavigationContainer />;
};

registerRootComponent(App);
export default App;
