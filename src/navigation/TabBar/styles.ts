import { withStyles } from "@utils/hooks";

export const getStyles = withStyles(({ theme, insets, width }) => ({
  container: {
    width,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: theme.colors.backgroundDark,
    borderTopLeftRadius: theme.radius.m,
    borderTopRightRadius: theme.radius.m,
    paddingTop: theme.spacing.s,
    paddingBottom: insets.bottom || theme.spacing.s
  },
  item: {
    alignItems: "center",
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs
  },
  focused: {
    backgroundColor: theme.colors.light,
    borderRadius: theme.radius.m
  },
  label: {
    color: theme.colors.white,
    fontSize: theme.font.size.m
  }
}));
