import { LogBox, Platform, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation } from "@navigation";
import { useCachedResources } from "@utils/hooks";
import { theme } from "@utils/constants";

LogBox.ignoreAllLogs();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar
          backgroundColor={theme.colors.backgroundDark}
          barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
        />
        <Navigation />
      </SafeAreaProvider>
    );
  }
}
