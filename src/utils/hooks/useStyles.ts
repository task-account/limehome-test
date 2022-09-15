import { Dimensions, StyleSheet } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "@utils/constants";

interface StyleParams {
  theme: typeof theme;
  insets: EdgeInsets;
  width: number;
  height: number;
}

type StyleCallback = (params: StyleParams) => StyleSheet.NamedStyles<any>;

export function withStyles(styles: StyleCallback) {
  return () => {
    const insets = useSafeAreaInsets();
    const { width, height } = Dimensions.get("screen");
    return styles({ theme, insets, width, height });
  };
}
