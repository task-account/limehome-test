import { TouchableOpacity, View, Text } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { getStyles } from "./styles";

export function TabBar(props: BottomTabBarProps) {
  const { state, descriptors, navigation } = props;
  const styles = getStyles();

  return (
    <View style={styles.container}>
      {state.routes.map(({ name, key }, index) => {
        const { options } = descriptors[key];
        const focused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: key,
            canPreventDefault: true
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(name, { merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: key
          });
        };

        return (
          <TouchableOpacity
            key={key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.item, focused && styles.focused]}
          >
            {options.tabBarIcon && options.tabBarIcon({ focused, color: "white", size: 30 })}
            <Text style={styles.label}>{name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
