import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const [fontsLoaded, error] = useFonts({
    ...FontAwesome.font,
    gothic: require("@assets/fonts/chancery.ttf")
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    if (fontsLoaded && !error) {
      setLoadingComplete(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  return isLoadingComplete;
}
