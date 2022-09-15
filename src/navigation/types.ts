import { RouteProp } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RouteParamList {}
  }
}

export enum RouterNames {
  root = "Root",
  search = "Search",
  map = "Map",
  saved = "Saved",
  profile = "Profile",
  apartment = "Apartment",
  notFound = "NotFound"
}

export type RouteParams<T extends keyof RouteParamList> = RouteProp<RouteParamList, T>;

export type RouteParamList = {
  [RouterNames.search]: undefined;
  [RouterNames.map]: undefined;
  [RouterNames.saved]: undefined;
  [RouterNames.profile]: undefined;
  [RouterNames.apartment]: { apartmentId: number };
  [RouterNames.notFound]: undefined;
};
