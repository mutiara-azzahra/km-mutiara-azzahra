import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainRoutes from './android/app/src/routers/MainRoutes';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <MainRoutes />;
}
