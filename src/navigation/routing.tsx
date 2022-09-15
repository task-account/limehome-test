import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import { RouteParamList, RouterNames } from "./types";
import { routes, TabRoute } from "./config";
import { TabBar } from "./TabBar";

export function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RouteParamList>();
const BottomTab = createBottomTabNavigator<RouteParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName={RouterNames.map}>
      {routes.map(({ name, tabs, component, headerShown }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={tabs ? TabBarWrapper(tabs) : component}
          options={{ headerShown }}
        />
      ))}
    </Stack.Navigator>
  );
}

function TabBarWrapper(screens: Array<TabRoute>) {
  return () => (
    <BottomTab.Navigator tabBar={(props) => <TabBar {...props} />}>
      {screens.map(({ name, component, iconName, headerShown }) => (
        <BottomTab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerShown,
            tabBarIcon: () => <MaterialIcons name={iconName} size={35} color={"white"} />
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
}
