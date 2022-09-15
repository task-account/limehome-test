import { withStyles } from "@utils/hooks";

export const useStyles = withStyles(({ theme }) => ({
  container: {
    flexDirection: "row",
    position: "absolute",
    right: theme.spacing.s,
    top: theme.spacing.s,
    backgroundColor: theme.colors.backgroundLight,
    padding: theme.spacing.xs,
    borderRadius: theme.radius.s,
    borderWidth: 1,
    borderColor: theme.colors.lightGray
  }
}));
