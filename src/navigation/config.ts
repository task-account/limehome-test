import { ComponentProps } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchScreen, MapScreen, ApartmentScreen, NotFoundScreen } from "@screens";
import { RouterNames } from "./types";

export interface TabRoute {
  name: RouterNames;
  component: () => JSX.Element;
  headerShown: boolean;
  iconName?: ComponentProps<typeof MaterialIcons>["name"];
}

export const routes = [
  {
    name: RouterNames.root,
    headerShown: false,
    tabs: [
      {
        name: RouterNames.search,
        component: SearchScreen,
        iconName: "search",
        headerShown: false
      },
      {
        name: RouterNames.map,
        component: MapScreen,
        iconName: "map",
        headerShown: false
      },
      {
        name: RouterNames.saved,
        component: NotFoundScreen,
        iconName: "favorite-outline",
        headerShown: false
      },
      {
        name: RouterNames.profile,
        component: NotFoundScreen,
        iconName: "account-circle",
        headerShown: false
      }
    ]
  },
  {
    name: RouterNames.apartment,
    component: ApartmentScreen,
    headerShown: false
  }
];
