import { StyleSheet } from "react-native";

import { withStyles } from "@utils/hooks";
import { theme } from "@utils/constants";

export const useStyles = withStyles(({ insets, width, height }) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width,
    height,
    ...StyleSheet.absoluteFillObject
  },
  markerWrapper: {
    alignItems: "center"
  },
  marker: {
    width: 45,
    aspectRatio: 1,
    borderRadius: theme.radius.xs,
    backgroundColor: theme.colors.gray,
    alignItems: "center",
    justifyContent: "center"
  },
  markerText: {
    color: theme.colors.white
  },
  selectedMarker: {
    backgroundColor: theme.colors.orange,
    borderRadius: theme.radius.m
  },
  pointer: {
    width: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 9,
    borderStyle: "solid",
    borderLeftColor: theme.colors.none,
    borderRightColor: theme.colors.none,
    borderTopColor: theme.colors.gray
  },
  selectedPointer: {
    borderTopColor: theme.colors.brown
  },
  cardWrapper: {
    position: "absolute",
    left: theme.spacing.m,
    right: theme.spacing.m,
    bottom: insets.bottom * 3.5 || theme.spacing.xl * 3
  }
}));
