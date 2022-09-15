import { withStyles } from "@utils/hooks";

export const useStyles = withStyles(({ theme }) => ({
  container: {
    padding: theme.spacing.s,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
}));
